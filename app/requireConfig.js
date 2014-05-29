var require = {
    paths: {
        backbone: 'vendor/backbone-1.1.2.min',
        backboneCourier: 'vendor/backbone.courier-0.6.0.min',
        backboneSyphon: 'vendor/backbone.syphon-0.4.1.min',
        icanhaz: 'vendor/ICanHaz-0.10.2.min',
        lodash: 'vendor/lodash-2.4.1.min',
        jquery: 'vendor/jquery-1.10.2.min',
        marionette: 'vendor/backbone.marionette-1.8.6.min',
        bootstrap: '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',

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
            deps: ['jquery', 'lodash', 'backbone'],
            exports : 'Marionette'
        },
        lodash: {
            exports: '_'
        },

        icanhaz: {
            deps: ['lodash', 'backbone', 'jquery'],
            exports: 'ich'
        },
        shim: {
            'bootstrap': {
                deps:['jquery']
            }
        }
    },
    map : {
        "*" : {"underscore" : "lodash"}
    }
};