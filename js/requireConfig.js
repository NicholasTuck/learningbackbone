var require = {
    baseUrl: "/learningBackbone",
    paths: {
        backbone: 'js/vendor/backbone-1.1.2.min',
        icanhaz: 'js/vendor/ICanHaz-0.10.2.min',
        lodash: 'js/vendor/lodash-2.4.1.min',
        jquery: 'js/vendor/jquery-1.10.2.min',
        marionette: 'js/vendor/backbone.marionette-1.8.6.min'
    },


    shim : {

        backbone: {
            deps: ['lodash', 'jquery']
//            exports: 'Backbone'
        },
        marionette: {
            deps: ['jquery', 'lodash', 'backbone']
//            exports : 'Marionette'
        }

    },
    map : {
        "*" : {"underscore" : "lodash"}
    }
};