define(function(require) {
    'use strict';

    var Backbone = require('backbone'),
        Car = require('garage/car/Car');

    var CarCollection = Backbone.Collection.extend({
        model: Car

    });

    return CarCollection;

});