define(function(require) {
    'use strict';

    require('backboneCourier');
    var Backbone = require('backbone'),
        $ = require('jquery'),
        ich = require('icanhaz'),
        Marionette = require('marionette'),
        BackboneUtil = require('util/BackboneUtil');

    ich.addTemplate('carItem', require('text!garage/browser/CarItemTemplate.html'));

    var CarItemView = Marionette.ItemView.extend({
        template: ich.carItem,
        initialize: function() {
                Backbone.Courier.add( this );
            this.listenTo(this.model, 'change', this.onCarChange);
        },
        onRender: function () {
            BackboneUtil.removeWrapperElement(this);
        },
        events: {
            "click": "onClick"
        },
        onClick: function(event) {
            this.spawn("car:selected", {car: this.model});
            this.$el.addClass('active');
        },
        onCarChange: function () {
            var active = this.$el.hasClass('active');
            this.render();
            if (active) this.$el.addClass('active');
        }
    });

    return CarItemView;
});