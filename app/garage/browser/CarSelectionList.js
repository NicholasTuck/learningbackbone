define(function(require) {
    'use strict';

    require('backboneCourier');
    var Backbone = require('backbone'),
        _ = require('lodash'),
        $ = require('jquery'),
        ich = require('icanhaz'),
        Marionette = require('marionette'),
        CarItemView = require('garage/browser/CarItemView');

    var CarSelectionList = Marionette.CollectionView.extend({
        itemView: CarItemView,
        initialize: function(){
            Backbone.Courier.add( this );
        },
        onMessages : {
            "car:selected" : "onCarSelected"
        },
        passMessages: {
            "car:selected" : "car:selected"
        },
        onCarSelected: function(event) {
            this.$el.find('.list-group-item').removeClass('active');
        }

    });

    return CarSelectionList;
});