define(function(require) {
    'use strict';

    require('backboneCourier');
    var Backbone = require('backbone'),
        ich = require('icanhaz'),
        Marionette = require('marionette'),
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
        initialize: function(){
            Backbone.Courier.add(this);
            app = require('app');
            this.carCollection = app.models.carCollection;
            this.listenTo(this.carCollection, 'remove', this.validateCarStillExists);
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
            this.selectedCarDetails.show(new CarDetailsView({model: event.data.car, editable: this.options.editable}));
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