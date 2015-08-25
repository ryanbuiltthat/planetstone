/**
 * Created by Ryan on 8/21/2015.
 */

loggedIn.route('/dashboard', {
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
        BlazeLayout.render('defaultAdminLayout', { main: "singleproductedit" });
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