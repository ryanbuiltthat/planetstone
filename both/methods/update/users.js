/**
 * Created by Ryan on 10/10/2015.
 */
Meteor.methods({
    setRoleOnUser( options ) {
        check( options, {
            user: String,
            role: String
        });

        try {
            Roles.setUserRoles( options.user, [ options.role ] );
        } catch( exception ) {
            return exception;
        }
    }
});