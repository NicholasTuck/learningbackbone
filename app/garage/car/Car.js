define(function(require) {
    'use strict';

    var Backbone = require('backbone'),
        _ = require('lodash'),
        EngineTypes = require('garage/car/EngineTypes'),
        globalCounter = 0;

    var Car = Backbone.Model.extend({
//        localStorage: new Backbone.LocalStorage('todos-backbone'),

        defaults: {
            make: '',
            model: '',
            hasBrakes: true,
            engineType: EngineTypes[0]
        },
        initialize: function () {
            this.set('id', globalCounter);
            globalCounter += 1;
        }

    });

    return Car;

});