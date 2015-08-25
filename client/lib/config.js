/**
 * Created by Ryan on 8/13/2015.
 */

// Set BlazeLayout root to body
BlazeLayout.setRoot('body');

// Enable autoform debugging
AutoForm.debug();
AutoForm.addHooks(
    ["addProductForm", "addProjectForm","afUpdateProduct"],
    {
        before   : {
            method: CfsAutoForm.Hooks.beforeInsert
        },
        after    : {
            method: CfsAutoForm.Hooks.afterInsert
        }
    }
);
// Set a global pseudo helper for strings
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

// Slug formatter
formatSlug = function(value) {
    var formatted = value
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[-]+/g, '-')
        .replace(/[^\w\x80-\xFF-]+/g,'');
    return formatted;
};

// Setup Sub Manager
//adminSubs = new SubsManager();
//adminProducts = new SubsManager();
ap = new SubsManager();
//adminTestimonials = new SubsManager();
//adminSite = new SubsManager();
//adminUsers = new SubsManager();


resizeEnd = function() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeEnd, delta);
    } else {
        timeout = false;
        sailor.rebind_menu_events();
    }
};

sailor = {

    rebind_menu_events: function() {
        $('.advanced-search').hide();
        $('.search-trigger').off('click');
        $('.search-trigger').on('click', function() {
            $('.advanced-search').slideToggle(500);
        });
    },
    init: function() {

        //SEARCH FILTER
        //$('.filter-show').hide(500);

        //$('.filter-hide').on('click', function() {
        //    $('aside.fixed').slideUp(500);
        //    $('.filter-show').show(500);
        //    $('.offset').css('margin-top', '0');
        //});

        //$('.filter-show').on('click', function() {
        //    $('aside.fixed').slideDown(500);
        //    $('.filter-show').hide(500);
        //    $('.offset').css('margin-top', '197px');
        //});


        //ADVANCED SEARCH
        $('.advanced-search').hide();
        $('.search-trigger').off('click');
        $('.search-trigger').on('click', function() {
            $('.advanced-search').slideToggle(500);
        });

        $('.search-hide').on('click', function() {
            $('.advanced-search').hide(500);
        });

        //$('#startDate').datepicker();

        //$('#birthDate').datepicker({
        //    changeMonth: true,
        //    changeYear: true,
        //    yearRange: '1920:2000',
        //    minDate: new Date(1920, 1 - 1, 25),
        //    maxDate: '+80Y'
        //});

        // CUSTOM FORM ELEMENTS
        $('input[type=radio], input[type=checkbox],input[type=number],select').uniform();

        // ACCORDION
        //$('.accordion dd').hide();
        //$('.accordion dt').on('click', function() {
        //    $(this).next('.accordion dd').slideToggle(500);
        //    $(this).toggleClass('expanded');
        //});

        //$('.accordion .next-step').on('click', function(e) {
        //    $(this).closest('.accordion dd').next('.accordion dt').next('.accordion dd').slideToggle(500);
        //    $(this).closest('.accordion dd').next('.accordion dt').toggleClass('expanded');
        //    e.preventDefault();
        //});

        //$('.bookingSteps .thank-you-note').hide();
        //$('.accordion .submit-step').on('click', function(e) {
        //    $(this).closest('.accordion').slideToggle(500);
        //    $('.bookingSteps .thank-you-note').slideToggle(500);
        //
        //    $('html, body').animate({
        //        scrollTop: parseInt($("#tab-navigation").position().top, 10)
        //    }, 1000);
        //
        //    e.preventDefault();
        //});

        // BOOKING STEPS
        //$('.booking').hide();
        //$('.availability .button').on('click', function() {
        //    $('.availability').hide();
        //    $('.selectDates').show(500);
        //});
        //
        //$('.selectDates .button').on('click', function() {
        //    $('.selectDates').hide();
        //    $('.bookingSteps').show(500);
        //});


        // CONTACT FORM
        //$('#contactform').submit(function() {
        //    var action = $(this).attr('action');
        //    $("#message").show(500, function() {
        //        $('#message').hide();
        //        $('#submit')
        //            .after('<img src="images/contact-ajax-loader.gif" class="loader" />')
        //            .attr('disabled', 'disabled');
        //
        //        $.post(action, {
        //                name: $('#name').val(),
        //                email: $('#email').val(),
        //                phone: $('#phone').val(),
        //                comments: $('#comments').val()
        //            },
        //            function(data) {
        //                document.getElementById('message').innerHTML = data;
        //                $('#message').slideDown('slow');
        //                $('#contactform img.loader').fadeOut('slow', function() {
        //                    $(this).remove()
        //                });
        //                $('#submit').removeAttr('disabled');
        //            });
        //
        //    });
        //    return false;
        //});

        // TABS
        //$('.content .tab-content').hide().first().show();
        //$('.content .c-tabs li:first').addClass('current');
        //
        //$('.content .c-tabs a').on('click', function(e) {
        //    e.preventDefault();
        //    $(this).closest('li').addClass('current').siblings().removeClass('current');
        //    $($(this).attr('href')).show().siblings('.tab-content').hide();
        //});

        var hash = $.trim(window.location.hash);
        if (hash) $('.content .tabs a[href$="' + hash + '"]').trigger('click');


        // SMOOTH ANCHOR SCROLLING
        var $root = $('html, body');
        $('.intro .button, .anchor').on('click', function(e) {
            var href = $.attr(this, 'href');
            if (typeof($(href)) != 'undefined' && $(href).length > 0) {
                var anchor = '';

                if (href.indexOf("#") != -1) {
                    anchor = href.substring(href.lastIndexOf("#"));
                }

                var scrollToPosition = $(anchor).offset().top - 80;

                if (anchor.length > 0) {
                    $root.animate({
                        scrollTop: scrollToPosition
                    }, 500, function() {
                        window.location.hash = anchor;
                        // This hash change will jump the page to the top of the div with the same id
                        // so we need to force the page to back to the end of the animation
                        $('html').animate({
                            'scrollTop': scrollToPosition
                        }, 0);
                    });
                    e.preventDefault();
                }
            }
        });



        //MAIN MENU
        $().jetmenu();

    },
    load: function() {
        // UNIFY HEIGHT
        var maxHeight = 0;

        $('.heightfix').each(function() {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });
        $('.heightfix').height(maxHeight);

        // PRELOADER
        $('.preloader').fadeOut();
    }
};


// client Side collections
PreviousProduct = new Meteor.Collection("previousProduct");
NextProduct = new Meteor.Collection("nextProduct");