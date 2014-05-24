define(function(require) {
    'use strict';

    var Backbone = require('backbone'),
        _ = require('lodash'),
        $ = require('jquery'),
        ich = require('icanhaz'),
        Marionette = require('marionette');

    ich.addTemplate('garageWrapper', require('text!garage/GarageWrapperTemplate.html'));

    // maybe look into boss view instead of so reliant on layouts http://justspamjustin.github.io/BossView/

    var GarageWrapperView = Backbone.Marionette.Layout.extend({
        template: ich.garageWrapper,
        regions: {
            addCar: "#addCar",
            removeCar: "#removeCar",
            updateCar: "#updateCar",
            garageBrowser: "#garageBrowser",
            log: "#log"
        },
        initialize: function(){
//            this.regions.addCar.show(new AddCarView());

        }
    });

    return GarageWrapperView;
});