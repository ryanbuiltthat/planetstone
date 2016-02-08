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
    allow: function(userId){
        return userId;
    },
    order: [2, 'asc'],
    sub: new SubsManager(),
    columns: [
        {data: "active", title: "active"},
        {data: "name", title: "Name"},
        {data: "desc", title: "Description"}
    ]
});

TabularTables.Projects = new Tabular.Table({
    name: "ProjectList",
    collection: Projects,
    scrollY: 400,
    autoWidth: false,
    columns: [
        {data: "active", title: "active"},
        {data: "name", title: "Title"}
    ]
});

TabularTables.Pages = new Tabular.Table({
    name: "PageList",
    collection: Meta,
    scrollY: 400,
    autoWidth: false,
    columns: [
        {data: "pages.title", title: "Title"},
        {data: "pages.slug", title: "Path"},
        {data: "pages.keywords", title: "Keywords"},
        {data: "pages.desc", title: "Description"}
    ]
});

TabularTables.Testimonials = new Tabular.Table({
    name: "TestimonialList",
    collection: Testimonials,
    scrollY: 400,
    autoWidth: false,
    columns: [
        {data: "author", title: "Author"},
        {data: "body", title: "Text"}
    ],
    sub: new SubsManager()
});

TabularTables.Squad = new Tabular.Table({
    name: "SquadList",
    collection: Teams,
    scrollY: 400,
    autoWidth: false,
    columns: [
        {data: "name", title: "Name"},
    ],
    sub: new SubsManager()
});