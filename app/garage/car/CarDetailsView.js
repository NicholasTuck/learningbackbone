define(function(require) {
    'use strict';

    require('backboneCourier');
    var ich = require('icanhaz'),
        Marionette = require('marionette');

    ich.addTemplate('carDetailsTemplate', require('text!garage/car/CarDetailsTemplate.html'));

    var CarDetailsView = Marionette.ItemView.extend({
        template: ich.carDetailsTemplate,
        initialize: function(options){

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
        }
    });

    return CarDetailsView;
});