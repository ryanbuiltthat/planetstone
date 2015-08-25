/**
 * Created by Ryan on 8/21/2015.
 */
Accounts.onLogin(function() {
    var redirect;
    redirect = Session.get('redirectAfterLogin');
    if (redirect != null) {
        if (redirect !== '/login') {
            return FlowRouter.go(redirect);
        }
    }
    // logout other clients
    Meteor.logoutOtherClients();
    return Session.set('loggedIn', true);


});