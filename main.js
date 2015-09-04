requirejs.config({
    baseUrl: 'bower_components',
    enforceDefine: true,
    paths: {
        "jquery": "jquery/dist/jquery.min",
        "underscore": "underscore/underscore",
        "backbone": "backbone/backbone",
        "bootstrap": "bootstrap/dist/js/bootstrap",
        //text: 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text',
        //json: 'https://cdnjs.cloudflare.com/ajax/libs/requirejs-plugins/1.0.3/json',
        //tpl: 'https://cdnjs.cloudflare.com/ajax/libs/requirejs-tpl/0.0.2/tpl.min'
    },
    shim: {
        "underscore": {
            exports: "_"
        },
        "backbone": {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
    }
});

define(["jquery", "underscore", "backbone", "../RocketCollection", "../RocketModel", "../RocketView"],
    function ($, _, Backbone, RocketCollection, RocketModel, RocketView) {
        var app = app || {};

        app.rocketModel = new RocketModel();

        app.rocketView = new RocketView({
            el: '#rockets',
            model: app.rocketModel,
        });
    }
);