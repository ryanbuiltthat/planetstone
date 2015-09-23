/**
 * Created by Ryan on 8/15/2015.
 */
Template.sideNavigation.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('allProducts');
    })
});
Template.sideNavigation.events({

    'click ': function(e) {
        //console.log(e.currentTarget);
        var parent = jQuery(e.currentTarget).parent();
        var sub = parent.find('> ul');

        // Dropdown works only when leftpanel is not collapsed
        if (!$('body').hasClass('leftpanel-collapsed')) {
            if (sub.is(':visible')) {
                sub.slideUp(200, function () {
                    parent.removeClass('nav-active');
                    $('.mainpanel').css({height: ''});
                    adjustmainpanelheight();
                });
            } else {
                closeVisibleSubMenu();
                parent.addClass('nav-active');
                sub.slideDown(200, function () {
                    adjustmainpanelheight();
                });
            }
        }
        //return false;
    }
});
Template.sideNavigation.onRendered(function(){
    // Menu Toggle
    jQuery('.menutoggle').click(function(){



    });
});