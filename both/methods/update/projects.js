/**
 * Created by Ryan on 10/11/2015.
 */
Meteor.methods({
    setActiveState( options ) {
        check( options, {
            id: String,
            active: Boolean
        });

        try {
            //Roles.setUserRoles( options.user, [ options.role ] );
            //Roles.setUserRoles( options.user, [ options.role ] );
            //Meteor.call('setActiveState', options);
            //var updateDoc = Modules.server.setActiveState(options);
            return Modules.server.setActiveState(options);
        } catch( exception ) {
            return exception;
        }
    }
});