define(function (require) {
    "use strict";

    require(['plugins', 'bootstrap']);
    var Backbone = require("backbone"),
        Marionette = require("marionette"),
        app = require('app');

    app.start();

    new (Marionette.AppRouter.extend({
        appRoutes: {
            "car/:id" : 'selectCar'
        },
        controller: {
            selectCar: function (id) {
                app.vent.trigger("show:car", id);
            }
        }

    }))();

    Backbone.history.start();

});