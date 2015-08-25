/**
 * Created by Ryan on 8/14/2015.
 */
Template.defaultLayout.onCreated(function(){
    var page = FlowRouter.getRouteName();
    $('body').addClass('s-front page-'+page);
});
Template.defaultLayout.onRendered(function() {
    //
    sailor.load();

    // Hide preloader
    //$(document).on('ready', function(){
    //    $(this+" .preloader").fadeOut();
    //});
});
Template.defaultLayout.helpers({
    pageClass: function(){
        var pageName = FlowRouter.getRouteName();
        return pageName;
    }
});