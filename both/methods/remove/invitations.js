/**
 * Created by Ryan on 10/10/2015.
 */
Meteor.methods({
    revokeInvitation( inviteId ) {
        check( inviteId, String );

        try {
            Invitations.remove( inviteId );
        } catch( exception ) {
            return exception;
        }
    }
});