/**
 * Created by Ryan on 8/17/2015.
 */
Template.authAdminWrapper.onCreated(function() {
    jQuery('body').removeClass('signin');
    jQuery('body').addClass('stickyheader s-admin');
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function () {
        //var postId = FlowRouter.getParam('postId');
        var handle = adminSubs.subscribe('allAdmin');
        self.ready.set(handle.ready());
        self.subscribe('userStatus');
    });
});

Template.authAdminWrapper.onRendered(function(){
    //-------------------------------------
    jQuery(document).ready(function() {
        console.log("doc ready");
        "use strict";


        adjustmainpanelheight();
        // Tooltip
        jQuery('.tooltips').tooltip({ container: 'body'});

        // Popover
        jQuery('.popovers').popover();

        // Close Button in Panels
        jQuery('.panel .panel-close').click(function(){
            jQuery(this).closest('.panel').fadeOut(200);
            return false;
        });

        // Form Toggles
        jQuery('.toggle').toggles({on: true});

        jQuery('.toggle-chat1').toggles({on: false});

        // Minimize Button in Panels
        jQuery('.minimize').click(function(){
            var t = jQuery(this);
            var p = t.closest('.panel');
            if(!jQuery(this).hasClass('maximize')) {
                p.find('.panel-body, .panel-footer').slideUp(200);
                t.addClass('maximize');
                t.html('&plus;');
            } else {
                p.find('.panel-body, .panel-footer').slideDown(200);
                t.removeClass('maximize');
                t.html('&minus;');
            }
            return false;
        });


        // Add class everytime a mouse pointer hover over it
        jQuery('.nav-bracket > li').hover(function(){
            jQuery(this).addClass('nav-hover');
        }, function(){
            jQuery(this).removeClass('nav-hover');
        });


        // Menu Toggle
        jQuery('.menutoggle').click(function(){

            var body = jQuery('body');
            var bodypos = body.css('position');

            if(bodypos != 'relative') {

                if(!body.hasClass('leftpanel-collapsed')) {
                    body.addClass('leftpanel-collapsed');
                    jQuery('.nav-bracket ul').attr('style','');

                    jQuery(this).addClass('menu-collapsed');

                } else {
                    body.removeClass('leftpanel-collapsed chat-view');
                    jQuery('.nav-bracket li.active ul').css({display: 'block'});

                    jQuery(this).removeClass('menu-collapsed');

                }
            } else {

                if(body.hasClass('leftpanel-show'))
                    body.removeClass('leftpanel-show');
                else
                    body.addClass('leftpanel-show');

                adjustmainpanelheight();
            }

        });

        // Chat View
        jQuery('#chatview').click(function(){

            var body = jQuery('body');
            var bodypos = body.css('position');

            if(bodypos != 'relative') {

                if(!body.hasClass('chat-view')) {
                    body.addClass('leftpanel-collapsed chat-view');
                    jQuery('.nav-bracket ul').attr('style','');

                } else {

                    body.removeClass('chat-view');

                    if(!jQuery('.menutoggle').hasClass('menu-collapsed')) {
                        jQuery('body').removeClass('leftpanel-collapsed');
                        jQuery('.nav-bracket li.active ul').css({display: 'block'});
                    } else {

                    }
                }

            } else {

                if(!body.hasClass('chat-relative-view')) {

                    body.addClass('chat-relative-view');
                    body.css({left: ''});

                } else {
                    body.removeClass('chat-relative-view');
                }
            }

        });

        reposition_topnav();
        reposition_searchform();

        jQuery(window).resize(function(){

            if(jQuery('body').css('position') == 'relative') {

                jQuery('body').removeClass('leftpanel-collapsed chat-view');

            } else {

                jQuery('body').removeClass('chat-relative-view');
                jQuery('body').css({left: '', marginRight: ''});
            }


            reposition_searchform();
            reposition_topnav();

        });



        /* This function will reposition search form to the left panel when viewed
         * in screens smaller than 767px and will return to top when viewed higher
         * than 767px
         */
        function reposition_searchform() {
            if(jQuery('.searchform').css('position') == 'relative') {
                jQuery('.searchform').insertBefore('.leftpanelinner .userlogged');
            } else {
                jQuery('.searchform').insertBefore('.header-right');
            }
        }



        /* This function allows top navigation menu to move to left navigation menu
         * when viewed in screens lower than 1024px and will move it back when viewed
         * higher than 1024px
         */
        function reposition_topnav() {
            if(jQuery('.nav-horizontal').length > 0) {

                // top navigation move to left nav
                // .nav-horizontal will set position to relative when viewed in screen below 1024
                if(jQuery('.nav-horizontal').css('position') == 'relative') {

                    if(jQuery('.leftpanel .nav-bracket').length == 2) {
                        jQuery('.nav-horizontal').insertAfter('.nav-bracket:eq(1)');
                    } else {
                        // only add to bottom if .nav-horizontal is not yet in the left panel
                        if(jQuery('.leftpanel .nav-horizontal').length == 0)
                            jQuery('.nav-horizontal').appendTo('.leftpanelinner');
                    }

                    jQuery('.nav-horizontal').css({display: 'block'})
                        .addClass('nav-pills nav-stacked nav-bracket');

                    jQuery('.nav-horizontal .children').removeClass('dropdown-menu');
                    jQuery('.nav-horizontal > li').each(function() {

                        jQuery(this).removeClass('open');
                        jQuery(this).find('a').removeAttr('class');
                        jQuery(this).find('a').removeAttr('data-toggle');

                    });

                    if(jQuery('.nav-horizontal li:last-child').has('form')) {
                        jQuery('.nav-horizontal li:last-child form').addClass('searchform').appendTo('.topnav');
                        jQuery('.nav-horizontal li:last-child').hide();
                    }

                } else {
                    // move nav only when .nav-horizontal is currently from leftpanel
                    // that is viewed from screen size above 1024
                    if(jQuery('.leftpanel .nav-horizontal').length > 0) {

                        jQuery('.nav-horizontal').removeClass('nav-pills nav-stacked nav-bracket')
                            .appendTo('.topnav');
                        jQuery('.nav-horizontal .children').addClass('dropdown-menu').removeAttr('style');
                        jQuery('.nav-horizontal li:last-child').show();
                        jQuery('.searchform').removeClass('searchform').appendTo('.nav-horizontal li:last-child .dropdown-menu');
                        jQuery('.nav-horizontal > li > a').each(function() {

                            jQuery(this).parent().removeClass('nav-active');

                            if(jQuery(this).parent().find('.dropdown-menu').length > 0) {
                                jQuery(this).attr('class','dropdown-toggle');
                                jQuery(this).attr('data-toggle','dropdown');
                            }

                        });
                    }

                }

            }
        }


        // Sticky Header
        if(jQuery.cookie('sticky-header'))

            jQuery('body').addClass('stickyheader');

        // Sticky Left Panel
        if(jQuery.cookie('sticky-leftpanel')) {
            jQuery('body').addClass('stickyheader');
            jQuery('.leftpanel').addClass('sticky-leftpanel');
        }

        // Left Panel Collapsed
        if(jQuery.cookie('leftpanel-collapsed')) {
            jQuery('body').addClass('leftpanel-collapsed');
            jQuery('.menutoggle').addClass('menu-collapsed');
        }

        // Check if leftpanel is collapsed
        if(jQuery('body').hasClass('leftpanel-collapsed'))
            jQuery('.nav-bracket .children').css({display: ''});


        // Handles form inside of dropdown
        jQuery('.dropdown-menu').find('form').click(function (e) {
            e.stopPropagation();
        });
    });
    //-------------------------------------
});

Template.authAdminWrapper.events({
    //'click #goToSignUp': function(e){
    //    Session.set("formState", "signup");
    //},
    'click .logoutLink': function(e){
        Meteor.logout(function(){
            FlowRouter.go('/manage');
        });
    }
});

Template.authAdminWrapper.helpers({
    onlineusers: function(){
        var users =  Meteor.users.find({ "status.online": true }).count();
        if( users <= 0 ) {
            return 0;
        }else {
            /**
             * TODO make a reactiveVar for online users - array and test if change push new count as new element
             */
            return users;
        }
    },
    getsess: function(){
        return Session.get('users');
    },
    nonAuthForm: function(){
        if(!Meteor.userId()){
            return Session.get("formState");
        }
    },
    subsReady: function(){
        return Template.instance().ready.get();
    }
});