/**
 * Created by Ryan on 8/15/2015.
 */
Template.sideNavigation.onCreated(function(){
    var self = this;
    self.autorun(function(){
        //self.subscribe('allProducts');
    })
});
Template.sideNavigation.events({


});

Template.sideNavigation.helpers({
    getCols: function(){
        console.log(Mongo.Collection.getAll());
        return true;
    }

});


Template.sideNavigation.onRendered(function(){
    // Menu Toggle
    //jQuery('.menutoggle').click(function(){
    //
    //
    //
    //});
});