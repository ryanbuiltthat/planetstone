/**
 * Created by Ryan on 8/17/2015.
 */
Template.prductActiveCell.onCreated(function(){

});
Template.prductActiveCell.events({
    //'click .toggle-inner': function(e){
    //    console.log("i'm clicked!");
    //    //$(e.target).closest('.toggle').toggles();
    //}
});
Template.prductActiveCell.helpers({
    isActive: function(){
        var self = this;
        //console.log(self);
        var out = '';
        if(self.active === 'TRUE'){
            out = 'true';
        }else{
            out = 'false'
        }
        return out.toLowerCase();
    }
});
Template.prductActiveCell.onRendered(function(){
    $('.toggle').toggles();
    $('.toggle').data('toggle-active');



    /*
    'click tbody > tr': function (event) {
        var dataTable = $(event.target).closest('table').DataTable();
        var rowData = dataTable.row(event.currentTarget).data();
    }
    */
    //var tblRow = $("tbody > tr");
    //_.each(tblRow, function (tbl) {
        //var dataTable = $(tbl).closest('table').DataTable();
        //var rowData = dataTable.row(tbl).data();
        //console.log(rowData._id);
    //});

    //console.log(this._id);
});