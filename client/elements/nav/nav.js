/**
 * Created by Ryan on 8/14/2015.
 */
Template.nav.onRendered(function(){
    $().jetmenu();
});


Template.nav.events({
    /**
     * Need to hide the megamenu after click. Pages load so fast and with the size
     * of the galleryThumbs you may not notice the page is loaded.
     * @param e
     * @param t
     */
    'click a':function(e,t){
        //$('.megamenu').css({display: 'none'});
        $('.megamenu').fadeOut('fast');
    },
    'submit form': function (e,t){
        alert('Thank you, your note has been sent');
        return false;
    }


});