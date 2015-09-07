/**
 * Created by Ryan on 8/21/2015.
 */
// Public routes
nonauth.route('/', {
    name: 'index',
    triggersEnter: [function(){
    }],
    action: function(params) {
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "home", footer: "defaultFooter" });
    }
});

// Products
nonauth.route('/products', {
    name: 'products',
    action: function(params) {
        return BlazeLayout.render('defaultLayout', {
            superHeader: "superHeader",
            header: "defaultHeader",
            main: "frontProductsIndex",
            footer: "defaultFooter" });
    }
});
nonauth.route('/products/:id', {
    triggersEnter: [function(){
        planet_stone.init();
        planet_stone.load();
    }],
    action: function(params) {
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "frontSingleProduct", footer: "defaultFooter" });
    }
});

// Projects
nonauth.route('/projects', {
    name: 'projectindex',
    action: function(params) {
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "frontProjectsIndex", footer: "defaultFooter" });
    }
});
nonauth.route('/projects/:category', {
    name: 'projectcategory',
    action: function(params) {
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "frontProjectsCategory", footer: "defaultFooter" });
    }
});

nonauth.route('/projects/:category/:projectSlug', {
    name: 'projectsingle',
    triggersEnter: [function(){
        planet_stone.init();
        planet_stone.load();
    }],
    action: function(params) {
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "frontSingleProject", footer: "defaultFooter" });
    }
});

// About Us
nonauth.route('/about-us/stone-squad', {
    name: 'stonesquad',
    action: function(params){
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "frontstonesquad", footer: "defaultFooter" });
    }
});

nonauth.route('/contact', {
    name: 'contact',
    action: function(params) {
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "contact", footer: "defaultFooter" });
    }
});

// Login
nonauth.route('/login', {
    name: 'login',
    action: function() {
        return BlazeLayout.render("nonAuthAdminWrapper", { view: "signin"} );
    }
});

nonauth.route('/404-not-found', {
    name: 'not-found',
    action: function(){
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "notfound", footer: "defaultFooter" });
    }
});