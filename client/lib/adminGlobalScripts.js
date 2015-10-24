/**
 * Created by Ryan on 8/15/2015.
 */

closeVisibleSubMenu = function() {
    jQuery('.leftpanel .nav-parent').each(function() {
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
    console.log("[adjustmainpanelheight]");
    var docHeight = $(document).height();
    if(docHeight > $('.mainpanel').height())
        $('.mainpanel').height(docHeight);
};