define(function(require) {
    'use strict';

    var Backbone = require('backbone'),
        _ = require('lodash'),
        $ = require('jquery'),
        ich = require('icanhaz'),
        Marionette = require('marionette'),
        GarageBrowser = require('garage/browser/GarageBrowser');

    ich.addTemplate('garageWrapper', require('text!garage/GarageWrapperTemplate.html'));

    // maybe look into boss view instead of so reliant on layouts http://justspamjustin.github.io/BossView/

    var GarageWrapperView = Backbone.Marionette.Layout.extend({
        template: ich.garageWrapper,
        id: 'garageWrapper',
        regions: {
            addCar: "#addCar",
            removeCar: "#removeCar",
            updateCar: "#updateCar",
            garageBrowser: "#garageBrowser",
            log: "#log"
        },
        initialize: function(){

        },
        onRender: function() {
            this.garageBrowser.show(new GarageBrowser());
        }
    });

    return GarageWrapperView;
});