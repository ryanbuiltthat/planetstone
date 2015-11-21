/**
 * Created by Ryan on 8/16/2015.
 */
Template.productsindex.onCreated(function(){
   var self = this;
});

Template.productsindex.onRendered(function(){
    // Track this event
    analytics.track("Admin", {
        eventName:  "Product Index Loaded"
    });
});

Template.productsindex.helpers({
    // Get sub ready state
    prodCountReady: function() {
        //console.log("[prodCountReady] "+Counts.has('products-counter'));
       // return Counts.has('products-counter');
        return true;
    },
    prodCount: function() {
        //console.log("[prodCount] "+Counts.get('products-counter'));
        return Counts.get('products-counter');
    }
});

Template.productsindex.events({
    'click tbody > tr > td + td': function (event) {
        var cell = $(event.target).parent();
        var dataTable = cell.closest('table').DataTable();
        var rowData = dataTable.row(cell).data();
        //console.log("click: "+rowData._id);
        FlowRouter.go("/manage/products/edit/"+rowData._id);
    },
    'change .autosave-toggle': function () {
        //Session.set("autoSaveMode", !Session.get("autoSaveMode"));
    },
    'click .addProduct': function(e,t){
        console.log('click');
        //FlowRouter.setParams({main: 'products', view: 'add'});
        FlowRouter.go('/manage/products/add');
        return false;
        //e.preventDefault();
    },
});