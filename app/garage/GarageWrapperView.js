define(function(require) {
    'use strict';

    var Backbone = require('backbone'),
        ich = require('icanhaz'),
        Marionette = require('marionette'),
        GarageBrowser = require('garage/browser/GarageBrowser'),
        RemoveCarView = require('garage/remove/RemoveCarView'),
        AddCarView = require('garage/add/AddCarView'),
        LogView = require('garage/log/LogView');

    ich.addTemplate('garageWrapper', require('text!garage/GarageWrapperTemplate.html'));

    // maybe look into boss view instead of so reliant on layouts http://justspamjustin.github.io/BossView/

    var GarageWrapperView = Backbone.Marionette.Layout.extend({
        template: ich.garageWrapper,
        id: 'garageWrapper',
        regions: {
            addCar: "#addCar",
            removeCar: "#removeCar",
            garageEditor: "#garageEditor",
            garageBrowser: "#garageBrowser",
            log: "#log"
        },
        initialize: function(){

        },
        onRender: function() {
            this.garageBrowser.show(new GarageBrowser());
            this.garageEditor.show(new GarageBrowser({editable: true}));
            this.removeCar.show(new RemoveCarView());
            this.addCar.show(new AddCarView());
            this.log.show(new LogView());
        }
    });

    return GarageWrapperView;
});