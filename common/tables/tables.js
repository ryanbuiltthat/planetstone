/**
 * Created by Ryan on 8/14/2015.
 */
TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Products = new Tabular.Table({
    name: "ProductList",
    collection: Products,
    scrollY: 400,
    autoWidth: false,
    //pub: "tabular_ProductIndex",
    allow: function(userId){
        return userId;
    },
    order: [2, 'asc'],
    sub: new SubsManager(),
    columns: [
        //{data: "active", title: "Active"}
        {data: "active", title: "active"},
        //{data: "active", tmpl: Meteor.isClient && Template.prductActiveCell, title: "Active"},
        //{tmpl: Meteor.isClient && Template.productActionCell, title: "Action"},
        {data: "name", title: "Name"},
        //{data: "type", title: "Type"},
        //{data: "color", title: "Color"},
        {data: "desc", title: "Description"}
    ]
});

TabularTables.Projects = new Tabular.Table({
    name: "ProjectList",
    collection: Projects,
    scrollY: 400,
    columns: [
        {data: "name", title: "Title"},
        {data: "desc", title: "Desc"},
        {data: "category", title: "Category"}
    ],
    //sub: new SubsManager()
});