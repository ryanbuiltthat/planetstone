/**
 * Created by Ryan on 9/9/2015.
 */
Template.testimonialsindex.events({
    'click tbody > tr > td + td': function (event) {
        var cell = $(event.target).parent();
        console.log(cell);
        var dataTable = cell.closest('table').DataTable();
        var rowData = dataTable.row(cell).data();
        FlowRouter.go("/manage/testimonial/edit/"+rowData._id);
    },
});