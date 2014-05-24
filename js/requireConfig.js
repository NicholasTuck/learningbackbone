var require = {
    paths: {
        backbone: 'vendor/backbone-1.1.2.min',
        icanhaz: 'vendor/ICanHaz-0.10.2.min',
        lodash: 'vendor/lodash-2.4.1.min',
        jquery: 'vendor/jquery-1.10.2.min',
        marionette: 'vendor/backbone.marionette-1.8.6.min',

        text: 'vendor/text-2.0.12',

        // require plugins
        plugins: 'plugins'
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