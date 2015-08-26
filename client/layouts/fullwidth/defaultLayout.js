/**
 * Created by Ryan on 8/14/2015.
 */
Template.defaultLayout.onCreated(function(){
    var page = FlowRouter.getRouteName();
    $('body').addClass('s-front page-'+page);
});
Template.defaultLayout.onRendered(function() {
    // Smooth scrolling....
    var $root = $('html, body');
    if (window.location.hash && window.location.hash == '#tab-navigation') {
        var scrollToPosition = $('#tab-navigation').offset().top - 80;

        $root.animate({
            scrollTop: scrollToPosition
        }, 500, function () {
            window.location.hash = 'tab-navigation';
            // This hash change will jump the page to the top of the div with the same id
            // so we need to force the page to back to the end of the animation
            $('html').animate({ 'scrollTop': scrollToPosition }, 0);
        });
    }

    // Bind the resize event
    $(window).resize(function () {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(resizeEnd, delta);
        }
    });

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