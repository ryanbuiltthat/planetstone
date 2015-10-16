/**
 * Created by Ryan on 10/11/2015.
 */
Template.projectsindex.onCreated(function(){
    var self = this;
    self.autorun(function() {
        var postId = FlowRouter.getParam('group');
        //console.log(postId);
        self.subscribe('projects');
    });
});

Template.projectsindex.onRendered(function(){

});

Template.projectsindex.helpers({

});

Template.projectsindex.events({

});