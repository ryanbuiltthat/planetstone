/**
 * Created by Ryan on 8/14/2015.
 */
Template.defaultLayout.onCreated(function(){
    var page = FlowRouter.getRouteName();
    //$('body').addClass('s-front page-'+page);
});

Template.defaultLayout.onRendered(function() {

    // Init scripts
    planet_stone.init();
    // Load misc
    planet_stone.load();
});
Template.defaultLayout.helpers({
    pageClass: function(){
        var pageName = FlowRouter.getRouteName();
        return pageName;
    }
});