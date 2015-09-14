/**
 * Created by Ryan on 8/14/2015.
 */
Template.home.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
     var handle = self.subscribe('frontTestimonials');
     self.ready.set(handle.ready());
    })
});
Template.home.onRendered(function(){
    // Init scripts
    planet_stone.init();

    // Load misc
    planet_stone.load();

    // Get the effects running
    new WOW().init();

});

Template.home.events({
    'click #heroCTAab': function(e){
        toggleBottomDrawer( 'cbp-spmenu-s4' );
        return false;
    },

});