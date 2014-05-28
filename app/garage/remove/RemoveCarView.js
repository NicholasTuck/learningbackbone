define(function(require) {
    'use strict';

    require('backboneCourier');
    var Backbone = require('backbone'),
        ich = require('icanhaz'),
        Marionette = require('marionette'),
        CarSelectionList = require('garage/browser/CarSelectionList'),
        Car = require('garage/car/Car'),
        app;

    ich.addTemplate('removeCar', require('text!garage/remove/RemoveCarTemplate.html'));

    var RemoveCarView = Backbone.Marionette.Layout.extend({
        template: ich.removeCar,
        initialize: function() {
            Backbone.Courier.add(this);
            app = require('app');
        },
        regions: {
            carSelection: '.removeCarSelection'
        },
        events: {
            'click button': 'onRemovedClicked'
        },
        ui: {
          removeButton: '.removeButton'
        },
        onRender: function() {
            var carSelectionList = new CarSelectionList({collection: app.models.carCollection});
            this.carSelection.show(carSelectionList);
        },
        onMessages : {
            "car:selected" : "onCarSelected"
        },
        onCarSelected: function(event) {
            this.setSelectedCar(event.data.car);
        },
        onRemovedClicked: function() {
            app.models.carCollection.remove(this.options.selectedCar);
            this.ui.removeButton.prop('disabled', 'disabled');

        },
        setSelectedCar: function(car) {
            this.options.selectedCar = car;
            this.ui.removeButton.prop('disabled', false);
        }

    });

    return RemoveCarView;

});