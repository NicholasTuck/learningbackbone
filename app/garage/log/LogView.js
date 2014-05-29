define(function(require) {
    'use strict';

    require('backboneCourier');
    var Backbone = require('backbone'),
        ich = require('icanhaz'),
        _ = require('lodash'),
        Marionette = require('marionette'),
        Car = require('garage/car/Car'),
        CarDetailsView = require('garage/car/CarDetailsView'),
        Moment = require('moment'),
        app;

    ich.addTemplate('log', require('text!garage/log/LogTemplate.html'));

    var LogView = Backbone.Marionette.Layout.extend({
        template: ich.log,
        initialize: function() {
            app = require('app');
            this.listenTo(app.models.carCollection, 'add', this.carAdded);
            this.listenTo(app.models.carCollection, 'remove', this.carRemoved);
            var that = this;
            _.forEach(app.models.carCollection.models, function(car) {
                that.listenTo(car, 'change', that.carChanged);
            });
        },
        ui: {
            logArea : '.logArea',
        },
        events: {
          'click .clearButton': 'clearLog'
        },
        carAdded: function (car) {
            this.logCarWithDescription("Car Added", car);
            this.listenTo(car, 'change', this.carChanged);
        },
        carRemoved: function (car) {
            this.logCarWithDescription("Car Removed", car);
            this.stopListening(car);
        },
        carChanged: function(car) {
            this.logCarWithDescription("Car Changed", car);
        },
        logCarWithDescription: function (description, car) {
            var moment = Moment();

//            var logLine = '<dt>' + moment.format() + ' ' + description + '</dt>' +
//                '<dd>' + JSON.stringify(car.toJSON()) + '</dd>';
            var logLine = moment.format() + ' ' + description + ': ' + JSON.stringify(car.toJSON()) + '\n';

            this.ui.logArea.prepend(logLine);
        },
        clearLog: function() {
            this.ui.logArea.html('');
        }
    });

    return LogView;

});