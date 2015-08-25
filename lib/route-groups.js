/**
 * Created by Ryan on 8/9/2015.
 */
//FlowRouter.route('/', {
//    name: 'index',
//    action: function(params) {
//        BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "home", footer: "defaultFooter" });
//    }
//});

/**
 * Public route group
 */
nonauth = FlowRouter.group({});

/**
 * Route group for authenticated users
 */
loggedIn = FlowRouter.group({
    prefix: '/manage',
    triggersEnter: [
        function() {
            var route;
            if (!(Meteor.loggingIn() || Meteor.userId())) {
                route = FlowRouter.current();
                if (route.route.name !== 'login') {
                    Session.set('redirectAfterLogin', route.path);
                }
                return FlowRouter.go(FlowRouter.path('login'));
            }
        }
    ]
});
// Admin group
admin = loggedIn.group({
    prefix: '/admin',
    triggersEnter: [
        function(){
            if (!Roles.userIsInRole(Meteor.user(), ['admin'])){
                return FlowRouter.go(FlowRouter.path('dashboard'))
            }
        }
    ]
});

/**
 * Not found Route
 * @type {{action: Function}}
 */
FlowRouter.notFound = {
    action: function(){
       return FlowRouter.go(FlowRouter.path('not-found'));
    }
};

//
//var adminSection = FlowRouter.group({
//    prefix: "/manage"
//});
//
//// Dashboard
//adminSection.route('/', {
//    name: "dashboard",
//    action: function(){
//        BlazeLayout.render('defaultAdminLayout', { wrapper: 'authAdminWrapper' });
//    }
//});
//
//
//
//// User Authentication Routes
//adminSection.route('/signin', {
//    name: 'signin',
//    action: function () {
//        BlazeLayout.render('defaultAdminLayout', { nawrapper: 'nonAuthAdminWrapper', view: 'signin' });
//    }
//});
//adminSection.route('/signup', {
//    name: 'signup',
//    action: function () {
//        BlazeLayout.render('defaultAdminLayout', { nawrapper: 'nonAuthAdminWrapper', view: 'signup' });
//    }
//});
//adminSection.route('/forgotpassword', {
//    name: 'forgotpassword',
//    action: function () {
//        BlazeLayout.render('defaultAdminLayout', { nawrapper: 'nonAuthAdminWrapper', view: 'forgotpassword' });
//    }
//});
//
//
//// Category Index ( eg Projects Top Level Page )
//adminSection.route('/:category', {
//    action: function(params, queryParams){
//        var adminView = params.category;
//        BlazeLayout.render('defaultAdminLayout', { wrapper: 'authAdminWrapper', main: adminView+'index' });
//    }
//});
//
//// category admin views ( add, edit, delete, )
//adminSection.route('/:category/:view', {
//    action: function(params, queryParams){
//        console.log(params.category+params.view);
//        BlazeLayout.render('defaultAdminLayout', { wrapper: 'authAdminWrapper', main: params.category+params.view });
//    }
//});
//
//// Admin action
//adminSection.route('/:category/edit/:itemId', {
//    action: function(params, queryParams){
//        BlazeLayout.render('defaultAdminLayout', { wrapper: 'authAdminWrapper', main: "singleproductedit" });
//    }
//});




//adminSection.route('/', {
//    name: 'dashboard',
//    action: function(params){
//        BlazeLayout.render('defaultAdminLayout', {});
//    }
//});
// Projects
//adminSection.route('/projects', {
//    name: 'projectIndex',
//    action: function(params){
//        BlazeLayout.render('defaultAdminLayout', { main: 'projectIndex' });
//    }
//});
//adminSection.route('/projects/add', {
//    name: 'addProject',
//    action: function(params){
//        BlazeLayout.render('defaultAdminLayout', { main: 'addProject' });
//    }
//});

// -----------------
//adminSection.route('/:category/:view', {
//    name: 'adminScreen',
//    action: function(params) {
//        var tpl = params.category+'/'+params.view;
//        BlazeLayout.render('defaultAdminLayout', {
//                                                main: tpl
//                                            });
//    }
//});
//
//adminSection.route('/products/addImages', {
//    name: 'addProductImages',
//    action: function(params) {
//        BlazeLayout.render('defaultLayout', { superHeader: "superHeader", header: "defaultHeader", main: "addProductImage", footer: "defaultFooter" });
//    }
//});