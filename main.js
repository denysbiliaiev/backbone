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

        app.rocketCollection = new RocketCollection({
            model: RocketModel
        });

        app.rocketModel = new RocketModel();

        app.rocketCollection.add(app.rocketModel);

        app.rocketCollection.add([{name:'test1'}, {size: 55}]);

        app.rocketView = new RocketView({
            el: '#rocket',
            model: app.rocketModel,
        });

        $("#toJSON").click(function() {
            console.log(app.rocketCollection.toJSON());
            $("#json").text(app.rocketCollection.toJSON().toString());
        });
    }
);