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
          carCollection: "#carCollection",
          selectedCarDetails: "#selectedCarDetails"
        },
        ui: {
            panelHeading : '.panel-heading'
        },
        initialize: function(){
            Backbone.Courier.add(this);
            app = require('app');
        },
        onRender: function() {
            if (this.options.editable) {
                this.changePanelHeading("Garage Editor");
            }

            var carSelectionList = new CarSelectionList({collection: app.models.carCollection});
            this.carCollection.show(carSelectionList);

            this.selectedCarDetails.show(new CarDetailsView({editable: this.options.editable}));
        },
        onMessages : {
            "car:selected" : "onCarSelected"
        },
        onCarSelected: function(event) {
            this.selectedCarDetails.show(new CarDetailsView({model: event.data.car, editable: this.options.editable}));
        },
        changePanelHeading: function(heading) {
            this.ui.panelHeading.html(heading);
        }

    });

    return GarageBrowser;
});