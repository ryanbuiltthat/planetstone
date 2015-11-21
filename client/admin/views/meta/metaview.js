/**
 * Created by Ryan on 11/19/2015.
 */
Template.metaindex.onCreated(function(){
    var self = this;
    self.autorun(function(){
        //self.subscribe('pages');
    });
});
Template.metaindex.onRendered(function(){

});

Template.metaindex.helpers({
    pages: function(){
        //return Meta.find();
    }
});
Template.metaindex.events({
    'click tbody > tr': function (event) {
        var dataTable = $(event.target).closest('table').DataTable();
        var rowData = dataTable.row(event.currentTarget).data();
        if (!rowData) return; // Won't be data if a placeholder row is clicked
        // Your click handler logic here
        FlowRouter.go("/manage/meta/edit/"+rowData._id);
    }
});