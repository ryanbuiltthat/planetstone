/**
 * Created by Ryan on 8/25/2015.
 */
Template.frontProjectsIndex.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        var handle = self.subscribe('frontProjectsIndex');
        self.ready.set(handle.ready());
    })
});
Template.frontProjectsIndex.onRendered(function(){});
Template.frontProjectsIndex.helpers({
    'subsReady': function(){
        return Template.instance().ready.get();
    }
});
Template.frontProjectsIndex.events({});