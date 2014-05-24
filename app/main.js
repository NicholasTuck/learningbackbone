define(function(require){
    "use strict";

    require('plugins');
    var Backbone = require("backbone"),
     _ = require("lodash"),
        $ = require("jquery"),
       ich = require("icanhaz"),
       Marionette = require("marionette"),

        app = require('app');


    // ready to code
    app.start();

//    new Router({ controller: Controller });

    Backbone.history.start();


});