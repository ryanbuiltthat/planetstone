/**
 * Created by Ryan on 8/21/2015.
 */

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
            Meteor.setTimeout(function() {
                var body = document.body;
                var typ = document.createAttribute('class');
                var rname = FlowRouter.getRouteName();
                //if(rname == 'index'){
                typ.value = "s-admin";
                //}else {
                //    typ.value = "s-front";
                //}
                body.attributes.setNamedItem(typ);
            }, 55);
        }
    ],
    triggersExit: [function(){
       var bodyClasses;
        Meteor.setTimeout(function(){
           bodyClasses = document.body.getAttributeNode('class').value;
       }, 55);
        return bodyClasses;
    }]
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
loggedIn.route('/', {
    name: 'dashboard',
    action: function() {
        return BlazeLayout.render('defaultAdminLayout', { main: '' });
    }
});

loggedIn.route('/:category', {
    action: function(params, queryParams){
        var adminView = params.category;
       return BlazeLayout.render('defaultAdminLayout', { main: adminView+'index' });
    }
});

/**
 * Route for various category views
 */
loggedIn.route('/:category/:view', {
    action: function(params, queryParams){
        //console.log(params.category+params.view);
        return BlazeLayout.render('defaultAdminLayout', { main: params.category+params.view });
    }
});

/**
 * Route for category item edits
 */
loggedIn.route('/:category/edit/:itemId', {
    name: 'edits',
    action: function(params, queryParams){
        BlazeLayout.render('defaultAdminLayout', { main: params.category+"edit" });
    }
});

//loggedIn.route('/settings', {
//    name: 'settings',
//    action: function() {
//        return BlazeLayout.render('settings');
//    }
//});

loggedIn.route('/logout',{
    name: 'logout',
    action: function(){
        Meteor.logout(function(){
            return FlowRouter.go(FlowRouter.path('login'));
        })
    }
});