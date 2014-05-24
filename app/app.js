define(function(require) {
    "use strict";

    require('plugins');
    var Backbone = require("backbone"),
        _ = require("lodash"),
        $ = require("jquery"),
        ich = require("icanhaz"),
        Marionette = require("marionette"),
        GarageWrapper = require("garage/GarageWrapperView");

    var app = new Marionette.Application();

    app.addRegions({
        main: '#main'
    });

    app.addInitializer(function () {
        app.main.show(new GarageWrapper());
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