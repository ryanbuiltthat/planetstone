/**
 * Created by Ryan on 8/14/2015.
 */
Template.home.onRendered(function(){



    // Tabs
    // TABS
    $('.content .tab-content').hide().first().show();
    $('.content .c-tabs li:first').addClass('current');

    $('.content .c-tabs a').on('click', function(e) {
        e.preventDefault();
        $(this).closest('li').addClass('current').siblings().removeClass('current');
        $($(this).attr('href')).show().siblings('.tab-content').hide();
    });

    var hash = $.trim(window.location.hash);
    if (hash) $('.content .tabs a[href$="' + hash + '"]').trigger('click');
});