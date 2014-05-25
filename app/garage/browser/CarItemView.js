define(function(require) {
    'use strict';

    require('backboneCourier');
    var Backbone = require('backbone'),
        $ = require('jquery'),
        ich = require('icanhaz'),
        Marionette = require('marionette');

    ich.addTemplate('carItem', require('text!garage/browser/CarItemTemplate.html'));

    var CarItemView = Marionette.ItemView.extend({
        template: ich.carItem,
        ui: {
            link: "a"
        },
        initialize: function() {
            Backbone.Courier.add( this );
        },
        events: {
            "click @ui.link": "onClick"
        },
        onClick: function(event) {
            this.spawn("car:selected", {car: this.model});
            this.ui.link.addClass('active');
        }
    });

    return CarItemView;
});