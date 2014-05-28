define(function(require) {
    'use strict';

    require('backboneCourier');
    var ich = require('icanhaz'),
        _ = require('lodash'),
        Marionette = require('marionette');

    ich.addTemplate('carDetailsTemplate', require('text!garage/car/CarDetailsTemplate.html'));

    var CarDetailsView = Marionette.ItemView.extend({
        template: ich.carDetailsTemplate,
        initialize: function(options){

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
                }
            }
        },
        events: {
            'click .saveButton': 'save'
        },
        save: function(event) {
            event.preventDefault();
            //todo implement me
            // https://github.com/derickbailey/backbone.syphon looks like a good start
            // todo I wonder if I will have to listen to change events, or the collection views... probably
//            var data = (this.ui.carForm.serialize`());
//            this.model.set(data);
//            console.log(data);
        }
    });

    return CarDetailsView;
});