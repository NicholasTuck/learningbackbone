define(function(require) {
    'use strict';

    require('backboneCourier');
    var Backbone = require('backbone'),
        ich = require('icanhaz'),
        Marionette = require('marionette');

    ich.addTemplate('carDetailsTemplate', require('text!garage/car/CarDetailsTemplate.html'));

    var CarDetailsView = Marionette.ItemView.extend({
        template: ich.carDetailsTemplate
    });

    return CarDetailsView;
});