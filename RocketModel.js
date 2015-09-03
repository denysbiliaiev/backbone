define(['backbone'], function(Backbone){

    var RocketModel = Backbone.Model.extend({
        defaults: {
            name: 'name',
            description: 'description',
            size: 100
        },

        validate: function(attrs) {
            if (attrs.size > 150 || attrs.size < 50) {
                return "size beetwen 50-150";
            }
        }
    });

    return RocketModel;

});
