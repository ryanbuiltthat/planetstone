/**
 * Created by Ryan on 8/14/2015.
 */
Template.home.onCreated(function(){
    //var self = this;
    //self.ready = new ReactiveVar();
    //self.autorun(function(){
     //var handle = self.subscribe('frontTestimonials');
     //self.ready.set(handle.ready());
    //})
});
Template.home.onRendered(function(){
    Meteor.setTimeout(function(){
        // Init scripts
        planet_stone.init();
        // Load misc
        planet_stone.load();
        // Get the effects running

        // featured slider
        $("#lightSliderDeals").lightSlider({
            item:1,
            keyPress:true,
            gallery:false,
            pager:false,
            prevHtml: 'PREVIOUS',
            nextHtml: 'NEXT'
        });

        new WOW().init();
    }, 350);
});

Template.home.events({
    'click #heroCTAab': function(e){
        toggleBottomDrawer( 'bdProductInquire' );
        return false;
    },

});