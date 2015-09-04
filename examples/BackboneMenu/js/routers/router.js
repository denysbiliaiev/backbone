define(['backbone', 
  'js/collections/tabs',
  'js/views/header',
  'json!content/tabs.json'
], function(Backbone, TabsCollection, HeaderView, tabs) {
  var tabViews = {},
      collection,
      headerView,
      Router;
  
  Router = Backbone.Router.extend({
    initialize: function(){
      collection = new TabsCollection(tabs);
      collection.sort();
      
      headerView = new HeaderView({
        collection: collection
      });

      headerView.render();
    },

    routes: {
      ':id': 'routeTo'
    },

    routeTo: function(id) {
      var model,
          path;
      
      model = collection.find({
        id: id
      });

      if(!model){
        model = collection.first();
        id = model.get('id');
        this.navigate(id);
      }
 
      path = model.get('path');
      
      if(tabViews[path]){
        tabViews[path].render();
      }
      else{
        require([path], function(TabView){
          tabViews[path] = new TabView();
          tabViews[path].render();
        });
      }
      
      headerView.changeActiveTab(id);

      return this;
    },
    
    goFirst: function(){
      var id = collection.first().get('id');
      this.navigate(id, {trigger: true});
      
      return this;
    }
    
  });
  
  return Router;
});