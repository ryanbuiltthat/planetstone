/**
 * Created by Ryan on 8/15/2015.
 */
Template.default.onCreated(function () {
    //jQuery('body').removeClass('signin');
    jQuery('body').addClass('stickyheader s-admin');
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function () {
        //var postId = FlowRouter.getParam('postId');
        //var handle = self.subscribe('allAdmin');
        //self.ready.set(handle.ready());
        //self.subscribe('userStatus');
    });
});
Template.default.onRendered(function () {
//-------------------------------------
    // Page Preloader
    $('#preloader').delay(350).fadeOut(function () {
        $('body').delay(350).css({'overflow': 'visible'});
    });

    adjustmainpanelheight();

    // Tooltip
    //$('.tooltips').tooltip({ container: 'body'});

    // Popover
    //$('.popovers').popover();

    //
    //$('.toggle-chat1').toggles({on: false});
    //

    reposition_topnav();
    reposition_searchform();

    // Sticky Header
    if ($.cookie('sticky-header'))
        $('body').addClass('stickyheader');

    // Sticky Left Panel
    if ($.cookie('sticky-leftpanel')) {
        $('body').addClass('stickyheader');
        $('.leftpanel').addClass('sticky-leftpanel');
    }

    // Left Panel Collapsed
    if ($.cookie('leftpanel-collapsed')) {
        $('body').addClass('leftpanel-collapsed');
        $('.menutoggle').addClass('menu-collapsed');
    }

    // Check if leftpanel is collapsed
    if ($('body').hasClass('leftpanel-collapsed'))
        $('.nav-bracket .children').css({display: ''});


    // Handles form inside of dropdown
    $('.dropdown-menu').find('form').click(function (e) {
        e.stopPropagation();
    });
    //-------------------------------------
});

Template.default.events({
    'click .leftpanel>.leftpanelinner>ul>.nav-parent>a': function(e,t){
        var parent = $(e.currentTarget).parent();
        var sub = parent.find('> ul');
        // Dropdown works only when leftpanel is not collapsed
        if(!$('body').hasClass('leftpanel-collapsed')) {
            if(sub.is(':visible')) {
                sub.slideUp(200, function(){
                    parent.removeClass('nav-active');
                    $('.mainpanel').css({height: ''});
                    adjustmainpanelheight();
                });
            } else {
                closeVisibleSubMenu();
                parent.addClass('nav-active');
                sub.slideDown(200, function(){
                    adjustmainpanelheight();
                });
            }
        }
        return false;
    },
    'click .menutoggle': function (e, t) {
        console.log("[menutoggle] click");
        var body = $('body');
        var bodypos = body.css('position');
        if (bodypos != 'relative') {
            if (!body.hasClass('leftpanel-collapsed')) {
                body.addClass('leftpanel-collapsed');
                $('.nav-bracket ul').attr('style', '');

                $(e.currentTarget).addClass('menu-collapsed');

            } else {
                body.removeClass('leftpanel-collapsed chat-view');
                $('.nav-bracket li.active ul').css({display: 'block'});
                $(e.currentTarget).removeClass('menu-collapsed');
            }
        } else {
            if (body.hasClass('leftpanel-show'))
                body.removeClass('leftpanel-show');
            else
                body.addClass('leftpanel-show');
            adjustmainpanelheight();
        }
    },
    'mouseenter .nav-bracket > li': function (e, t) {
        $(e.currentTarget).addClass('nav-hover');
    },
    'mouseleave .nav-bracket > li': function (e, t) {
        $(e.currentTarget).removeClass('nav-hover');
    },
    'click .panel .panel-close': function (e, t) {
        $(e.currentTarget).closest('.panel').fadeOut(200);
        return false;
    },
    'click #chatview': function (e, t) {
        var body = $('body');
        var bodypos = body.css('position');
        if (bodypos != 'relative') {
            if (!body.hasClass('chat-view')) {
                body.addClass('leftpanel-collapsed chat-view');
                $('.nav-bracket ul').attr('style', '');
            } else {
                body.removeClass('chat-view');
                if (!$('.menutoggle').hasClass('menu-collapsed')) {
                    $('body').removeClass('leftpanel-collapsed');
                    $('.nav-bracket li.active ul').css({display: 'block'});
                } else {
                }
            }

        } else {
            if (!body.hasClass('chat-relative-view')) {
                body.addClass('chat-relative-view');
                body.css({left: ''});
            } else {
                body.removeClass('chat-relative-view');
            }
        }
    },
    'click .logout' () {
        Meteor.logout((error) => {
            if (error) {
                Bert.alert(error.reason, 'warning');
            } else {
                Bert.alert('Logged out!', 'success');
            }
        });
    },
    'click .panel .minimize': function(e){
            var t = jQuery(e.currentTarget);
            var p = t.closest('.panel');
            if(!jQuery(e.currentTarget).hasClass('maximize')) {
                p.find('.panel-body, .panel-footer').slideUp(200);
                t.addClass('maximize');
                t.html('&plus;');
            } else {
                p.find('.panel-body, .panel-footer').slideDown(200);
                t.removeClass('maximize');
                t.html('&minus;');
            }
            return false;
    }
});
Template.default.helpers({
    subsReady: function () {
        //return Template.instance().ready.get();
        return true;
    },
    getRtName: function(){
        var rtname = FlowRouter.getRouteName();
        if(rtname) {
            return FlowRouter.getRouteName();
        }else {
            return FlowRouter.current().route.group.name;
        }
    }
});