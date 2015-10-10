/**
 * Created by Ryan on 8/15/2015.
 */
Template.adminPreloader.onRendered(function(){
    // Hide preloader on doc load

    jQuery(document).ready(function() {
        "use strict";
        var loader = $(this).find("#preloader");
        //console.log(JSON.stringify(this));
        jQuery(loader).delay(350).fadeOut(function(){
            jQuery('body').delay(350).css({'overflow':'visible'});
        });
    });
 });