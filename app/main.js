define(function(require){
    "use strict";

    require(['plugins', 'bootstrap']);
    var Backbone = require("backbone"),
     _ = require("lodash"),
       Marionette = require("marionette"),

        app = require('app');


    // ready to code
    app.start();

//    new Router({ controller: Controller });

    Backbone.history.start();


});