/**
 * Created by Ryan on 8/21/2015.
 */


/**
 * Not found Route
 * @type {{action: Function}}
 */
FlowRouter.notFound = {
    action: function(){
        return FlowRouter.go(FlowRouter.path('not-found'));
    }
};


/**
 * Public route group
 */
nonauth = FlowRouter.group({
    triggersEnter: [
        function(){
            Meteor.setTimeout(function(){
                planet_stone.init();
                planet_stone.load();
            }, 200);
        }
    ]
    //triggersExit: [trackRouteEntry]
});

nonauth.route('/', {
    name: 'index',
    triggersEnter: [function(){
        Meteor.setTimeout(function() {
            var body = document.body;
            var typ = document.createAttribute('class');
            var rname = FlowRouter.getRouteName();
            if(rname == 'index'){
                typ.value = "s-front page-index home";
            }else {
                typ.value = "s-front";
            }
            body.attributes.setNamedItem(typ);
        }, 55);
    }],
    triggersExit: [function(){
        var bodyClasses = document.body.getAttributeNode('class').value;
        return document.body.getAttributeNode('class').value = bodyClasses.replace(/page-index home/i, "");
    }],
    action: function(params) {
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "home", footer: "defaultFooter" });
    }
});

// Products
nonauth.route('/products', {
    name: 'products',
    triggersEnter: [function(){
        Meteor.setTimeout(function() {
            var body = document.body;
            var typ = document.createAttribute('class');
            var rname = FlowRouter.getRouteName();
                typ.value = "s-front";
            body.attributes.setNamedItem(typ);
        }, 55);
    }],
    triggersExit: [function(){
        var bodyClasses = document.body.getAttributeNode('class').value;
        return document.body.getAttributeNode('class').value = bodyClasses.replace(/page-index home/i, "");
    }],
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
        Meteor.setTimeout(function() {
            var body = document.body;
            var typ = document.createAttribute('class');
            var rname = FlowRouter.getRouteName();
                typ.value = "s-front";
            body.attributes.setNamedItem(typ);
        }, 55);
    }],
    triggersExit: [function(){
        var bodyClasses = document.body.getAttributeNode('class').value;
        return document.body.getAttributeNode('class').value = bodyClasses.replace(/page-index home/i, "");
    }],
    action: function(params) {
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "frontSingleProduct", footer: "defaultFooter" });
    }
});

// Projects
nonauth.route('/projects', {
    name: 'projectindex',
    triggersEnter: [function(){
        Meteor.setTimeout(function() {
            var body = document.body;
            var typ = document.createAttribute('class');
            var rname = FlowRouter.getRouteName();
                typ.value = "s-front";
            body.attributes.setNamedItem(typ);
        }, 55);
    }],
    triggersExit: [function(){
        var bodyClasses = document.body.getAttributeNode('class').value;
        return document.body.getAttributeNode('class').value = bodyClasses.replace(/page-index home/i, "");
    }],
    action: function(params) {
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "frontProjectsIndex", footer: "defaultFooter" });
    }
});
nonauth.route('/projects/:category', {
    name: 'projectcategory',
    triggersEnter: [function(){
        Meteor.setTimeout(function() {
            var body = document.body;
            var typ = document.createAttribute('class');
            var rname = FlowRouter.getRouteName();
                typ.value = "s-front";
            body.attributes.setNamedItem(typ);
        }, 55);
    }],
    triggersExit: [function(){
        var bodyClasses = document.body.getAttributeNode('class').value;
        return document.body.getAttributeNode('class').value = bodyClasses.replace(/page-index/i, "");
    }],
    action: function(params) {
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "frontProjectsCategory", footer: "defaultFooter" });
    }
});

nonauth.route('/projects/:category/:projectSlug', {
    name: 'projectsingle',
    triggersEnter: [function(){
        Meteor.setTimeout(function() {
            var body = document.body;
            var typ = document.createAttribute('class');
            var rname = FlowRouter.getRouteName();
                typ.value = "s-front";
            body.attributes.setNamedItem(typ);
            $("#gallery").lightGallery();
        }, 55);
    }],
    triggersExit: [function(){
        var bodyClasses = document.body.getAttributeNode('class').value;
        return document.body.getAttributeNode('class').value = bodyClasses.replace(/page-index/i, "");
    }],
    action: function(params) {
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "frontSingleProject", footer: "defaultFooter" });
    }
});

// About Us
nonauth.route('/about-us', {
    name: 'aboutus',
    triggersEnter: [function(){
        Meteor.setTimeout(function() {
            var body = document.body;
            var typ = document.createAttribute('class');
            var rname = FlowRouter.getRouteName();
            typ.value = "s-front";
            body.attributes.setNamedItem(typ);
        }, 55);
    }],
    triggersExit: [function(){
        var bodyClasses = document.body.getAttributeNode('class').value;
        return document.body.getAttributeNode('class').value = bodyClasses.replace(/page-index home/i, "");
    }],
    action: function(params){
        return BlazeLayout.render('defaultLayout', {
            superHeader: "superHeader",
            header: "defaultHeader",
            main: "aboutus",
            footer: "defaultFooter" });
    }
});

// About Us
nonauth.route('/testimonials', {
    name: 'testimonials',
    triggersEnter: [function(){
        Meteor.setTimeout(function() {
            var body = document.body;
            var typ = document.createAttribute('class');
            var rname = FlowRouter.getRouteName();
            typ.value = "s-front";
            body.attributes.setNamedItem(typ);
        }, 55);
    }],
    triggersExit: [function(){
        var bodyClasses = document.body.getAttributeNode('class').value;
        return document.body.getAttributeNode('class').value = bodyClasses.replace(/page-index home/i, "");
    }],
    action: function(params){
        return BlazeLayout.render('defaultLayout', {
            superHeader: "superHeader",
            header: "defaultHeader",
            main: "testimonialTpl",
            footer: "defaultFooter" });
    }
});

// Sonte Squad
nonauth.route('/about-us/stone-squad', {
    name: 'stonesquad',
    triggersEnter: [function(){
        Meteor.setTimeout(function() {
            var body = document.body;
            var typ = document.createAttribute('class');
            var rname = FlowRouter.getRouteName();
                typ.value = "s-front";
            body.attributes.setNamedItem(typ);
        }, 55);
    }],
    triggersExit: [function(){
        var bodyClasses = document.body.getAttributeNode('class').value;
        return document.body.getAttributeNode('class').value = bodyClasses.replace(/page-index home/i, "");
    }],
    action: function(params){
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "frontstonesquad", footer: "defaultFooter" });
    }
});

nonauth.route('/contact', {
    name: 'contact',
    triggersEnter: [function(){
        Meteor.setTimeout(function() {
            var body = document.body;
            var typ = document.createAttribute('class');
            var rname = FlowRouter.getRouteName();
                typ.value = "s-front";
            body.attributes.setNamedItem(typ);
        }, 55);
    }],
    triggersExit: [function(){
        var bodyClasses = document.body.getAttributeNode('class').value;
        return document.body.getAttributeNode('class').value = bodyClasses.replace(/page-index home/i, "");
    }],
    action: function(params) {
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "contact", footer: "defaultFooter" });
    }
});

// Login
nonauth.route('/login', {
    name: 'login',
    triggersEnter: [function(){
        Meteor.setTimeout(function() {
            var body = document.body;
            var typ = document.createAttribute('class');
            var rname = FlowRouter.getRouteName();
            typ.value = "s-admin signin";
            body.attributes.setNamedItem(typ);
        }, 55);
    }],
    triggersExit: [function(){
        var bodyClasses = document.body.getAttributeNode('class').value;
        return document.body.getAttributeNode('class').value = bodyClasses.replace(/s-admin signin/i, "");
    }],
    action: function() {
        return BlazeLayout.render("nonAuthAdminWrapper", { view: "signin"} );
    }
});

nonauth.route('/404-not-found', {
    name: 'not-found',
    triggersEnter: [function(){
        Meteor.setTimeout(function() {
            var body = document.body;
            var typ = document.createAttribute('class');
            var rname = FlowRouter.getRouteName();
            if(rname == 'index'){
                typ.value = "s-front page-index home";
            }else {
                typ.value = "s-front";
            }
            body.attributes.setNamedItem(typ);
        }, 55);
    }],
    triggersExit: [function(){
        var bodyClasses = document.body.getAttributeNode('class').value;
        return document.body.getAttributeNode('class').value = bodyClasses.replace(/page-index/i, "");
    }],
    action: function(){
        return BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "notfound", footer: "defaultFooter" });
    }
});