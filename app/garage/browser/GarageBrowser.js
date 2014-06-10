define(function(require) {
    'use strict';

    require('backboneCourier');
    var Backbone = require('backbone'),
        ich = require('icanhaz'),
        Marionette = require('marionette'),
        _ = require('lodash'),
        CarDetailsView = require('garage/car/CarDetailsView'),
        CarSelectionList = require('garage/browser/CarSelectionList'),
        app;

    ich.addTemplate('garageBrowser', require('text!garage/browser/GarageBrowserTemplate.html'));

    var GarageBrowser = Marionette.Layout.extend({
        template: ich.garageBrowser,
        regions: {
          carSelection: "#carCollection",
          selectedCarDetails: "#selectedCarDetails"
        },
        ui: {
            panelTitle : '.panel-title'
        },
        initialize: function(options){
            _.bindAll(this);
            Backbone.Courier.add(this);
            app = require('app');
            this.carCollection = app.models.carCollection;
            this.listenTo(this.carCollection, 'remove', this.validateCarStillExists);
            if (!options.editable) {
                app.vent.on("show:car", this.showCarById);
            }
        },
        onRender: function() {
            if (this.options.editable) {
                this.changePanelHeading("Garage Editor");
            }

            var carSelectionList = new CarSelectionList({collection: this.carCollection});
            this.carSelection.show(carSelectionList);
            this.showEmptyCarDetails();
        },
        showEmptyCarDetails: function() {
            this.selectedCarDetails.show(new CarDetailsView({editable: this.options.editable}));
        },
        onMessages : {
            "car:selected" : "onCarSelected"
        },
        onCarSelected: function(event) {
            this.showCar(event.data.car);
        },
        showCar: function(car) {
            this.selectedCarDetails.show(new CarDetailsView({model: car, editable: this.options.editable}));
            if (!this.options.editable && !_.isUndefined(car)) {
                app.vent.trigger("showing:car", car);
                Backbone.history.navigate("car/" + car.get('id'), {trigger: false});
            }
        },
        showCarById: function(id) {
            var carToShow = this.carCollection.get(id);
            if (_.isUndefined(carToShow)) carToShow = undefined;
            this.showCar(carToShow);
        },
        changePanelHeading: function(heading) {
            this.ui.panelTitle.html(heading);
        },
        validateCarStillExists: function() {
            var currentCar = this.selectedCarDetails.currentView.model;
            if(!this.carCollection.get(currentCar)) {
                this.showEmptyCarDetails();
            }

        }

    });

    return GarageBrowser;
});