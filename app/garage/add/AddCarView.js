define(function(require) {
    'use strict';

    require('backboneCourier');
    var Backbone = require('backbone'),
        ich = require('icanhaz'),
        Marionette = require('marionette'),
        Car = require('garage/car/Car'),
        CarDetailsView = require('garage/car/CarDetailsView'),
        app;

    ich.addTemplate('addCar', require('text!garage/add/AddCarTemplate.html'));

    var AddCarView = Backbone.Marionette.Layout.extend({
        template: ich.addCar,
        initialize: function() {
            app = require('app');
        },
        regions: {
            panelBody: '.panel-body'
        },
        onRender: function() {
            this.newCar = new Car();
            this.listenTo(this.newCar, 'change', this.addNewCar);
            var carDetailsView = new CarDetailsView({model: this.newCar, editable: true});
            this.panelBody.show(carDetailsView);
        },
        addNewCar: function() {
            this.newCar.resetId();
            app.models.carCollection.add(this.newCar);
            this.stopListening(this.newCar);
            this.render();
        }

    });

    return AddCarView;

});