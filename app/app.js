define(function(require) {
    "use strict";

    require('plugins');
    var Marionette = require("marionette"),
        GarageWrapper = require("garage/GarageWrapperView"),
        CarCollection = require('garage/car/CarCollection'),
        Car = require('garage/car/Car');

    var app = new Marionette.Application();

    app.addRegions({
        main: '#main'
    });

    app.addInitializer(function () {
        this.models = {};

        var carCollection = new CarCollection();
        carCollection.fetch();

        if (carCollection.length === 0) {
            carCollection.add(new Car({make: 'Nissan', model: 'Altima', location: {lat: 41.2, lon: -98.1}}));
            carCollection.add(new Car({make: 'Mazda', model: '3', location: {lat: 25.7, lon: 80.22}}));
            carCollection.add(new Car({make: 'Ford', model: 'Focus', location: {lat: 40.7, lon: -74}}));
            carCollection.add(new Car({make: 'GMC', model: 'Truck', hasBrakes: false, location: {lat: 34.05, lon: -118.25}}));
        }

        this.models.carCollection = carCollection;

        this.main.show(new GarageWrapper());
//        todoList.fetch();
    });

//    app.listenTo(todoList, 'all', function () {
//        app.main.$el.toggle(todoList.length > 0);
//        app.footer.$el.toggle(todoList.length > 0);
//    });

//    app.vent.on('todoList:filter', function (filter) {
//        footer.updateFilterSelection(filter);
//        document.getElementById('todoapp').className = 'filter-' + (filter === '' ? 'all' : filter);
//    });

//    app.vent.on('todoList:clear:completed', function () {
//        todoList.getCompleted().forEach(function (todo) {
//            todo.destroy();
//        });
//    });



    return app;

});