/**
 * Created by Ryan on 8/21/2015.
 */
// Public routes
nonauth.route('/', {
    name: 'index',
    action: function(params) {
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "home", footer: "defaultFooter" });
    }
});
nonauth.route('/products', {
    name: 'products',
    action: function(params) {
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "frontProductsIndex", footer: "defaultFooter" });
    }
});
nonauth.route('/projects', {
    name: 'projects',
    action: function(params) {
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "frontProjectsIndex", footer: "defaultFooter" });
    }
});
nonauth.route('/contact', {
    name: 'contact',
    action: function(params) {
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "contact", footer: "defaultFooter" });
    }
});
nonauth.route('/login', {
    name: 'login',
    action: function() {
        return BlazeLayout.render("nonAuthAdminWrapper", { view: "signin"} );
    }
});

nonauth.route('/signup', {
    name: 'signup',
    action: function() {
        return BlazeLayout.render("nonAuthAdminWrapper", { view: "signup"} );
    }
});
nonauth.route('/404-not-found', {
    name: 'not-found',
    action: function(){
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "notfound", footer: "defaultFooter" });
    }
});