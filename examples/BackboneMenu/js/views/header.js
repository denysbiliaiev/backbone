define([
  'backbone',
  'tpl!templates/header'
], function(Backbone, headerTpl) {
  return Backbone.View.extend({
    el: '#tabs',
    template: headerTpl,
    
    events: {
      'click a.js-tab': 'clicked'
    },
    
    clicked: function(e){
      var id = $(e.target).attr('id');
  
      e.preventDefault();
      Backbone.history.navigate(id, {trigger: true});
    },

    render: function(){
      var renderedContent = this.template({
        collection: this.collection.toJSON()
      });

      this.$el.html(renderedContent);
      this.$el.find('a.js-tab').first().addClass('active');
      
      return this;
    },
    
    changeActiveTab: function(id){
      this.$el.find('.active').removeClass('active');
      this.$el.find('#' + id).addClass('active');
    }
  });
});