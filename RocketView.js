define(['backbone'], function(Backbone){
    var RocketView = Backbone.View.extend({
        events: {
            "click .changeSize": "changeSize",
            "click .deleteRow": "deleteRow",
            "blur .size .name .description": "editSize"
        },

        initialize: function() {
            this.template = _.template($("#viewRocket").html());
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
            this.render();
        },

        render: function () {
            console.log(this.model.changedAttributes());
            var json = this.model.toJSON();
            var view = this.template(json);
            this.$el.html(view);
        },

        changeSize: function(e) {
            var inc = parseInt($(e.target).attr('data-rel'));
            var size = this.model.get('size');
            var valid =this.model.set({
                size: size + inc
            }, {validate: true});

            if (!valid) this.render();
        },

        editSize: function() {
            this.model.set({
                name: this.$(".name").text(),
                description: this.$(".description").text(),
                size: parseInt(this.$("input.size").attr('value'))
            });
        },

        deleteRow: function() {
            this.model.destroy();
        }
    });

    return RocketView;
});