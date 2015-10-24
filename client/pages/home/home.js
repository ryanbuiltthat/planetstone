/**
 * Created by Ryan on 8/14/2015.
 */
Template.home.onCreated(function(){

});
Template.home.onRendered(function(){
    Meteor.setTimeout(function(){
        // Init scripts
        planet_stone.init();
        // Load misc
        planet_stone.load();
        // Get the effects running

        new WOW().init();

        // Analytics.js misses the first page load so let's trigger it manually
        analytics.page('index')
    }, 350);
});

Template.home.events({
    'click #heroCTAab': function(e){
        toggleBottomDrawer( 'bdProductInquire' );

        // Track this event
        analytics.track("Drawer Triggered", {
            eventName:  "Contact Drawer Toggled"
        });

        return false;
    }
});