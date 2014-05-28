define(function (require) {
    'use strict';

    require('backboneCourier');
    var Backbone = require('backbone'),
        ich = require('icanhaz'),
        Marionette = require('marionette'),
        CarSelectionList = require('garage/browser/CarSelectionList'),
        Car = require('garage/car/Car'),
        app;

    ich.addTemplate('removeCar', require('text!garage/remove/RemoveCarTemplate.html'));

    var RemoveCarModel = Backbone.Model.extend({
        defaults: {
            selectedCar: null
        }
    });


    var RemoveCarView = Backbone.Marionette.Layout.extend({
        template: ich.removeCar,
        initialize: function () {
            Backbone.Courier.add(this);
            app = require('app');
            this.model = new RemoveCarModel();
            this.listenTo(this.model, 'change', this.render);
        },
        regions: {
            carSelection: '.removeCarSelection'
        },
        events: {
            'click button': 'onRemovedClicked'
        },
        onRender: function () {
            var carSelectionList = new CarSelectionList({collection: app.models.carCollection});
            this.carSelection.show(carSelectionList);
        },
        templateHelpers: {
            enabled: function () {
                return (this.selectedCar === null ? "disabled" : "");
            }
        },
        onMessages: {
            "car:selected": "onCarSelected"
        },
        onCarSelected: function (event) {
            this.model.set('selectedCar', event.data.car);
        },
        onRemovedClicked: function () {
            app.models.carCollection.remove(this.options.selectedCar);
        }

    });

    return RemoveCarView;

})
;