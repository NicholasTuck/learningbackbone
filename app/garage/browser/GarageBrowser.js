define(function(require) {
    'use strict';

    require('backboneCourier');
    var Backbone = require('backbone'),
        _ = require('lodash'),
        $ = require('jquery'),
        ich = require('icanhaz'),
        Marionette = require('marionette'),
        Car = require('garage/car/Car'),
        CarCollection = require('garage/car/CarCollection'),
        CarDetailsView = require('garage/car/CarDetailsView'),
        CarSelectionList = require('garage/browser/CarSelectionList');

    ich.addTemplate('garageBrowser', require('text!garage/browser/GarageBrowserTemplate.html'));

    var GarageBrowser = Marionette.Layout.extend({
        template: ich.garageBrowser,
        regions: {
          carCollection: "#carCollection",
          selectedCarDetails: "#selectedCarDetails"
        },
        initialize: function(){
            Backbone.Courier.add( this );
        },
        onRender: function() {
            //todo refactor this model into a model in the app.js somehow and pass it to the view here
            var carCollection = new CarCollection();
            carCollection.add(new Car({make: 'Nissan', model: 'Altima'}));
            carCollection.add(new Car({make: 'Mazda', model: '3'}));
            carCollection.add(new Car({make: 'Ford', model: 'Focus'}));
            carCollection.add(new Car({make: 'GMC', model: 'Truck', hasBrakes: false}));

            var carSelectionList = new CarSelectionList({collection: carCollection});
            this.carCollection.show(carSelectionList);

            this.selectedCarDetails.show(new CarDetailsView({}));
        },
        onMessages : {
            "car:selected" : "onCarSelected"
        },
        onCarSelected: function(event) {
            this.selectedCarDetails.show(new CarDetailsView({model: event.data.car}));
        }

    });

    return GarageBrowser;
});