define(function(require) {
    'use strict';

    require('backboneCourier');
    require('cesium');
    var Backbone = require('backbone'),
        ich = require('icanhaz'),
        Marionette = require('marionette'),
        _ = require('lodash'),
        app;


        ich.addTemplate('garageMap', require('text!garage/map/GarageMapTemplate.html'));

    var GarageBrowser = Marionette.ItemView.extend({
        template: ich.garageMap,
        zoomHeight: 300000,

        initialize: function (options) {
            _.bindAll(this);
//            Backbone.Courier.add(this);
            app = require('app');
            this.carCollection = app.models.carCollection;

            this.listenTo(this.carCollection, 'add', this.addBillboard);
            this.listenTo(this.carCollection, 'remove', this.removeBillboard);
            this.listenTo(this.carCollection, 'change', this.updateBillboard);

            app.vent.on("showing:car", this.flyToCar);

        },

        ui: {
          cesiumWrapper: '.cesiumWrapper'
        },

        onShow: function() {
            this.widget = new Cesium.CesiumWidget(this.ui.cesiumWrapper[0]);
            this.initializeBillboards();
        },

        initializeBillboards: function (){
            var scene = this.widget.scene;
            var view = this;
            this.billboards = new Cesium.BillboardCollection();

            var image = new Image();
            image.onload = function() {
                var textureAtlas = new Cesium.TextureAtlas({
                    scene : scene,
                    image : image
                });
                view.billboards.textureAtlas = textureAtlas;
                _.each(view.carCollection.models, view.addBillboard);

                scene.primitives.add(view.billboards);
            };
            image.src = 'images/tank.png';
        },

        addBillboard: function(car) {
            this.billboards.add({
                position : Cesium.Cartesian3.fromDegrees(car.get('location').lon, car.get('location').lat),
                imageIndex : 0,
                id: car
//                translucencyByDistance : new Cesium.NearFarScalar(1.5e2, 1.0, 8.0e6, 0.0)
            });
        },

        removeBillboard: function(car) {
            var foundBillboard = _.find(this.billboards._billboards, {id: car});
            this.billboards.remove(foundBillboard);
        },

        updateBillboard: function(car) {
            this.removeBillboard(car);
            this.addBillboard(car);
        },

        flyToCar: function(car) {
            var destination = Cesium.Cartesian3.fromDegrees(car.get('location').lon, car.get('location').lat, this.zoomHeight);
            var scene = this.widget.scene;

            var flight = Cesium.CameraFlightPath.createAnimation(scene, {
                destination : destination,
                duration: 3500
            });
            scene.animations.add(flight);
        }

    });

    return GarageBrowser;

});