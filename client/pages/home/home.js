/**
 * Created by Ryan on 8/14/2015.
 */
Template.home.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    var cp = new ReactiveVar();
    var routePath = FlowRouter.current().path.substring(1);
    self.autorun(function(){
        var handle = self.subscribe('pagebyslug', routePath);
        self.ready.set(handle.ready());
        if(handle.ready()){
            //cp = Meta.findOne({ "pages.title": "Home"});
            //var metaInfo = {name: "description", content: cp.pages.desc};
            //DocHead.setTitle(cp.pages.title + " - Planet Stone Marble & Granite");
            //DocHead.addMeta(metaInfo);
        }
    });
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