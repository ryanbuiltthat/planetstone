/**
 * Created by Ryan on 10/11/2015.
 */
TabularTables = {};

TabularTables.Projects = new Tabular.Table({
    name: "Projects",
    collection: Projects,
    columns: [
        {
            data: "active",
            title: "Active",
            tmpl: Meteor.isClient && Template.projectactivecell
        },
        {data: "name", title: "Name"},
        {
            data: "category",
            title: "Category",
            tmpl: Meteor.isClient && Template.projectcategorycell
        },
        //{data: "author", title: "Author"},
        //{data: "copies", title: "Copies Available"},
        {
            data: "createdAt",
            title: "Created",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).calendar();
                } else {
                    return "";
                }
            }
        },
        //{data: "summary", title: "Summary"},
        //{
        //    tmpl: Meteor.isClient && Template.bookCheckOutCell
        //}
    ]
});