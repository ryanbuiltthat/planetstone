/**
 * Created by Ryan on 10/11/2015.
 */
Template.projectsindex.onCreated(function(){
    var page = "All Projects";
    var title = page + " - "+Meteor.settings.public.siteInfo.siteName;
    DocHead.setTitle(title);

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
    'click tbody > tr': function (event) {
        var dataTable = $(event.target).closest('table').DataTable();
        var rowData = dataTable.row(event.currentTarget).data();
        if (!rowData) return; // Won't be data if a placeholder row is clicked
        // Your click handler logic here
        //console.log(rowData);
        FlowRouter.go("/assets/projects/edit/" + rowData._id);
    }
});