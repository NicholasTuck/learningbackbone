define(function (require) {
    "use strict";

    require(['plugins', 'bootstrap']);
    var Backbone = require("backbone"),
        app = require('app');

    app.start();

//    new Router({ controller: Controller });

    Backbone.history.start();

});