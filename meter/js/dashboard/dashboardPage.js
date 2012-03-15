/*--
--*/

var DashboardPageView = Backbone.View.extend({
    initialize: function() {
        this.$el.html($('#tpl-dashboard').html());
    }
})