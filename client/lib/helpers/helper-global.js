/**
 * Created by Ryan on 8/25/2015.
 */

// Constants
rtime = new Date('1', '1', '2000', '12', '0', '0');
timeout = false;
delta = 200;

// Resize event
resizeEnd = function() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeEnd, delta);
    } else {
        timeout = false;
        planet_stone.rebind_menu_events();
    }
};

planet_stone = {
    rebind_menu_events: function() {
        //$('.advanced-search').hide();
        //$('.search-trigger').off('click');
        //$('.search-trigger').on('click', function () {
        //    $('.advanced-search').slideToggle(500);
        //});
        //$('.houzz-share-button').on('click', function(){
        //    alert('test');
        //});
    },
    init: function () {
        //console.log("ps init");
        //SEARCH FILTER
        //$('.filter-show').hide(500);

        $('.filter-hide').on('click', function () {
            $('aside.fixed').slideUp(500);
            $('.filter-show').show(500);
            $('.offset').css('margin-top','0');
        });

        $('.filter-show').on('click', function () {
            $('aside.fixed').slideDown(500);
            $('.filter-show').hide(500);
            $('.offset').css('margin-top','197px');
        });

        //ADVANCED SEARCH
        //$('.advanced-search').hide();
        //$('.search-trigger').off('click');
        //$('.search-trigger').on('click', function () {
        //    $('.advanced-search').slideToggle(500);
        //});

        //$('.search-hide').on('click', function () {
        //    $('.advanced-search').hide(500);
        //});

        //$('#startDate').datepicker();
        //
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
        //$('.accordion dt').on('click', function () {
        //    $(this).next('.accordion dd').slideToggle(500);
        //    $(this).toggleClass('expanded');
        //});

        //$('.accordion .next-step').on('click', function (e) {
        //    $(this).closest('.accordion dd').next('.accordion dt').next('.accordion dd').slideToggle(500);
        //    $(this).closest('.accordion dd').next('.accordion dt').toggleClass('expanded');
        //    e.preventDefault();
        //});

        //$('.bookingSteps .thank-you-note').hide();
        //$('.accordion .submit-step').on('click', function (e) {
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
        //$('.availability .button').on('click', function () {
        //    $('.availability').hide();
        //    $('.selectDates').show(500);
        //});
        //
        //$('.selectDates .button').on('click', function () {
        //    $('.selectDates').hide();
        //    $('.bookingSteps').show(500);
        //});

        // TABS
        $('.content .tab-content').hide().first().show();
        $('.content .tabs li:first').addClass('current');

        $('.content .tabs a').on('click', function (e) {
            e.preventDefault();
            $(this).closest('li').addClass('current').siblings().removeClass('current');
            $($(this).attr('href')).show().siblings('.tab-content').hide();
        });

        var hash = $.trim( window.location.hash );
        if (hash) $('.content .tabs a[href$="'+hash+'"]').trigger('click');


        // SMOOTH ANCHOR SCROLLING
        var $root = $('html, body');
        $('.intro .button, .anchor').on('click', function(e) {
            var href = $.attr(this, 'href');
            if (typeof ($(href)) != 'undefined' && $(href).length > 0) {
                var anchor = '';

                if(href.indexOf("#") != -1) {
                    anchor = href.substring(href.lastIndexOf("#"));
                }

                var scrollToPosition = $(anchor).offset().top - 80;

                if (anchor.length > 0) {
                    $root.animate({
                        scrollTop: scrollToPosition
                    }, 500, function () {
                        window.location.hash = anchor;
                        // This hash change will jump the page to the top of the div with the same id
                        // so we need to force the page to back to the end of the animation
                        $('html').animate({ 'scrollTop': scrollToPosition }, 0);
                    });
                    e.preventDefault();
                }
            }
        });

        //MAIN MENU
        //$().jetmenu();
    },
    load: function () {
        //console.log("ps load");

        // Pinterest
        (function(d){
            var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');
            p.type = 'text/javascript';
            p.async = true;
            p.src = '//assets.pinterest.com/js/pinit.js';
            f.parentNode.insertBefore(p, f);
        }(document));


        // UNIFY HEIGHT
        var maxHeight = 0;

        $('.heightfix').each(function(){
            if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
        });
        $('.heightfix').height(maxHeight);

        // PRELOADER
        $('.preloader').fadeOut();
    }
};