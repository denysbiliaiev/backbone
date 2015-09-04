requirejs.config({
	baseUrl: '',
	paths: {
		backbone: 'http://backbonejs.org/backbone-min',
		jquery: 'http://code.jquery.com/jquery-2.1.4.min',
		underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
    text: 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text',
    json: 'https://cdnjs.cloudflare.com/ajax/libs/requirejs-plugins/1.0.3/json',
    tpl: 'https://cdnjs.cloudflare.com/ajax/libs/requirejs-tpl/0.0.2/tpl.min'
	},
	
	shim: {  
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['jquery', 'underscore', 'json'],
			exports: 'Backbone'
		}
	}
});

require(['backbone', 'js/routers/router'], function(Backbone, Router){
  var router = new Router();
  
  Backbone.history.start();
  if(!Backbone.history.fragment){
    router.goFirst();
  }
}); 