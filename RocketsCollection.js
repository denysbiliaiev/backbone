define(['backbone', './RocketModel'], function(Backbone, RocketModel) {
    var RocketsCollection = Bacbone.Collection.extend({
        model: RocketModel,
        sortParam: 'size',
        sortMode: 1,

        comparator: function(a, b) {
            if (a.get(this.sortParam > b.get(this.sortParam))) {
                return -1 * this.sortMode;
            }

            if (a.get(this.sortParam < b.get(this.sortParam))) {
                return 1 * this.sortMode;
            }

            return 0;
        }

    });
});