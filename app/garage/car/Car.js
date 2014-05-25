define(function(require) {
    'use strict';

    var Backbone = require('backbone'),
        _ = require('lodash'),

        globalCounter = 0;

    var Car = Backbone.Model.extend({
//        localStorage: new Backbone.LocalStorage('todos-backbone'),

        defaults: {
            make: '',
            model: '',
            hasBrakes: true,
            engineType: 'Four Cylinder'
        },
        initialize: function () {
            this.set('id', globalCounter);
            globalCounter += 1;
        }

    });

    return Car;

});