define(function(require) {
    'use strict';

    require(['backboneCourier', 'backboneSyphon']);
    var ich = require('icanhaz'),
        _ = require('lodash'),
        Marionette = require('marionette'),
        EngineTypes = require('garage/car/EngineTypes');

    ich.addTemplate('carDetailsTemplate', require('text!garage/car/CarDetailsTemplate.html'));

    var CarDetailsView = Marionette.ItemView.extend({
        template: ich.carDetailsTemplate,
        initialize: function(options){
            if (this.model) this.listenTo(this.model, 'change', this.carDetailsChanged);
        },
        ui: {
          carForm: '.carForm'
        },
        templateHelpers: function(){
            var that = this;
            return {
                empty: function () {
                    return (that.model === undefined);
                },
                editable: function () {
                    return that.options.editable;
                },
                hasBrakesCheckMark: function() {
                    return (this.hasBrakes ? "checked" : "");
                },
                disabled: function() {
                    return (that.options.editable ? "" : "disabled");
                },
                engineTypes: EngineTypes,
                selected: function() {
                    return (this['.'] === that.model.get('engineType') ? "selected" : "");
                }
            }
        },
        events: {
            'click .saveButton': 'save'
        },
        save: function(event) {
            event.preventDefault();
            var data = Backbone.Syphon.serialize(this);
            this.model.set(data);
        },
        carDetailsChanged: function () {
            this.render();
        }
    });

    return CarDetailsView;
});