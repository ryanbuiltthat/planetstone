Template.projectsindex.helpers({
    //add you helpers here
});

Template.projectsindex.events({
    'click tbody > tr > td + td': function (event) {
        var cell = $(event.target).parent();
        var dataTable = cell.closest('table').DataTable();
        var rowData = dataTable.row(cell).data();
        //console.log("click: "+rowData._id);
        FlowRouter.go("/manage/projects/edit/"+rowData._id);
    },
});

Template.projectsindex.onCreated(function () {
    //add your statement here
});

Template.projectsindex.onRendered(function () {
    //add your statement here
});

Template.projectsindex.onDestroyed(function () {
    //add your statement here
});

