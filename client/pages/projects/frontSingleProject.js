/**
 * Created by Ryan on 8/27/2015.
 */
Template.frontSingleProject.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        var handle = self.subscribe('frontSingleProject', FlowRouter.getParam('projectSlug'));
        self.ready.set(handle.ready());
    })
});
Template.frontSingleProject.onRendered(function(){
    Meteor.setTimeout(function(){
        $("#gallery").lightGallery();
    }, 550);
});
Template.frontSingleProject.helpers({
    'subsReady': function(){
        return Template.instance().ready.get();
    },
    'project': function() {
        return Projects.find();
    },
    'projectImage': function(pics){
        return ProjectImages.find({ _id: { $in: pics }});
    }
});

Template.frontSingleProject.events({});