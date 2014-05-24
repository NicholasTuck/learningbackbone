define(function(require) {
    'use strict';

    var Backbone = require('backbone'),
        _ = require('lodash'),
        $ = require('jquery'),
        ich = require('icanhaz'),
        Marionette = require('marionette');

    ich.addTemplate('garageLayout', require('text!garage/GarageLayoutTemplate.html'));


    var GarageLayoutView = Backbone.Marionette.Layout.extend({
        template: ich.garageLayout,
        regions: {
            addCar: "#addCar",
            removeCar: "#removeCar",
            updateCar: "#updateCar",
            garageBrowser: "#garageBrowser",
            log: "#log"
        },
        onInitialize: function(){
//            this.regions.addCar.show(new AddCarView());

        }
    });

    return GarageLayoutView;
});