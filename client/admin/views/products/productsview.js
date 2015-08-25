/**
 * Created by Ryan on 8/16/2015.
 */
Template.productsindex.onCreated(function(){
   var self = this;
   //self.ready = new ReactiveVar();
    //self.autorun(function() {
        //var postId = FlowRouter.getParam('category');
       // var handle = ProductsSub.subscribe('productIndex');
        //self.ready.set(handle.ready());
        //self.subscribe('productCount');
    //});


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
    //'click .toggle': function(e,t){
    //    e.preventDefault();
    //    var cell = $(e.target).closest('.toggle').parent();
    //    var tblRow = cell.parent();
    //    var dataTable = tblRow.closest('table').DataTable();
    //    var rowData = dataTable.row(tblRow).data();
    //    console.log(rowData);
    //},
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

Template.singleproductedit.onCreated(function(){
    //var self = this;
    //self.autorun(function() {
    //    var postId = FlowRouter.getParam('itemId');
    //    self.subscribe('singleProduct', postId);
    //    self.subscribe('appImages');
    //});
});

Template.singleproductedit.helpers({
    //selectedProduct: function() {
    //    var postId = FlowRouter.getParam('itemId');
    //    var post = Products.findOne({_id: postId}) || {};
    //    if(post){
    //        Session.set("itemActiveState", post.active);
    //    }
    //    return post;
    //},
    //findOut: function(){
    //    if(Session.get("itemActiveState")==='TRUE'){
    //        return "checked";
    //    }
    //}
});
Template.singleproductedit.onRendered(function(){

});