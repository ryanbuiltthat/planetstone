/**
 * Created by Ryan on 8/25/2015.
 */

// Bracket Helpers
closeVisibleSubMenu = function() {
    $('.leftpanel .nav-parent').each(function() {
        var t = $(this);
        if(t.hasClass('nav-active')) {
            t.find('> ul').slideUp(200, function(){
                t.removeClass('nav-active');
            });
        }
    });
};

adjustmainpanelheight = function() {
    // Adjust mainpanel height
    var docHeight = $(document).height();
    if(docHeight > $('.mainpanel').height())
        $('.mainpanel').height(docHeight);
};


reposition_searchform = function() {
    if($('.searchform').css('position') == 'relative') {
        $('.searchform').insertBefore('.leftpanelinner .userlogged');
    } else {
        $('.searchform').insertBefore('.header-right');
    }
};

reposition_topnav = function() {
    if($('.nav-horizontal').length > 0) {

        // top navigation move to left nav
        // .nav-horizontal will set position to relative when viewed in screen below 1024
        if($('.nav-horizontal').css('position') == 'relative') {

            if($('.leftpanel .nav-bracket').length == 2) {
                $('.nav-horizontal').insertAfter('.nav-bracket:eq(1)');
            } else {
                // only add to bottom if .nav-horizontal is not yet in the left panel
                if($('.leftpanel .nav-horizontal').length == 0)
                    $('.nav-horizontal').appendTo('.leftpanelinner');
            }

            $('.nav-horizontal').css({display: 'block'})
                .addClass('nav-pills nav-stacked nav-bracket');

            $('.nav-horizontal .children').removeClass('dropdown-menu');
            $('.nav-horizontal > li').each(function() {

                $(this).removeClass('open');
                $(this).find('a').removeAttr('class');
                $(this).find('a').removeAttr('data-toggle');

            });

            if($('.nav-horizontal li:last-child').has('form')) {
                $('.nav-horizontal li:last-child form').addClass('searchform').appendTo('.topnav');
                $('.nav-horizontal li:last-child').hide();
            }

        } else {
            // move nav only when .nav-horizontal is currently from leftpanel
            // that is viewed from screen size above 1024
            if($('.leftpanel .nav-horizontal').length > 0) {

                $('.nav-horizontal').removeClass('nav-pills nav-stacked nav-bracket')
                    .appendTo('.topnav');
                $('.nav-horizontal .children').addClass('dropdown-menu').removeAttr('style');
                $('.nav-horizontal li:last-child').show();
                $('.searchform').removeClass('searchform').appendTo('.nav-horizontal li:last-child .dropdown-menu');
                $('.nav-horizontal > li > a').each(function() {

                    $(this).parent().removeClass('nav-active');

                    if($(this).parent().find('.dropdown-menu').length > 0) {
                        $(this).attr('class','dropdown-toggle');
                        $(this).attr('data-toggle','dropdown');
                    }

                });
            }

        }

    }
};

// UI Helpers
updateBracketUI = function() {
    if($('body').css('position') == 'relative') {
        $('body').removeClass('leftpanel-collapsed chat-view');
    } else {
        $('body').removeClass('chat-relative-view');
        $('body').css({left: '', marginRight: ''});
    }
    reposition_searchform();
    reposition_topnav();
};

window.addEventListener("resize", updateBracketUI);



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

    },
    init: function () {
        // Try FB
        try {
            FB.XFBML.parse();
        }catch(e) {
            //console.log(e);
        }
    },
    load: function () {

    }
};

// flatten object by concatting values
concatVal = function( obj ) {
    var value = '';
    for ( var prop in obj ) {
        value += obj[ prop ];
        //value.replace(/(^,)|(,$)/g, "")
        //value = value.join(', ');
    }
    console.log("[concatVal] "+value);
    return value;
};