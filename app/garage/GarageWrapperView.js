define(function(require) {
    'use strict';

    var Backbone = require('backbone'),
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
            garageEditor: "#garageEditor",
            garageBrowser: "#garageBrowser",
            log: "#log"
        },
        initialize: function(){

        },
        onRender: function() {
            this.garageBrowser.show(new GarageBrowser());
            this.garageEditor.show(new GarageBrowser({editable: true}));
        }
    });

    return GarageWrapperView;
});