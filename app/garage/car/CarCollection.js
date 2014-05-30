define(function(require) {
    'use strict';

    var Backbone = require('backbone'),
        BackboneLocalStorage = require('backboneLocalStorage'),
        Car = require('garage/car/Car');

    var CarCollection = Backbone.Collection.extend({
        model: Car,
        localStorage: new Backbone.LocalStorage("garageApp/CarCollection"),
        initialize: function() {
            this.bind('change', this.onChange);
            this.bind('add', this.onChange);
            this.bind('remove', this.onRemove);
        },
        onChange: function (car) {
            car.save();
        },
        onRemove: function(car) {
            car.destroy();
        }
    });

    return CarCollection;

});