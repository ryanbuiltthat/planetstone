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
        // not really needed since tabular is already publishing/subscribing to this data
        //return Meta.find();
    },
    getMetaEditId: function(){
        //return Session.get("metaEditId");
        return Meta.findOne(Session.get("metaEditId"));
    }
});
Template.metaindex.events({
    'click tbody > tr': function (event) {
        var dataTable = $(event.target).closest('table').DataTable();
        var rowData = dataTable.row(event.currentTarget).data();
        if (!rowData) return; // Won't be data if a placeholder row is clicked
        // Your click handler logic here
        //FlowRouter.go("/manage/meta/edit/"+rowData._id);
        Session.set("metaEditId", rowData._id);
    }
});