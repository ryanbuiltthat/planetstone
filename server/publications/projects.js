/**
 * Created by Ryan on 10/11/2015.
 */
Meteor.publish( 'projects', function() {
    let isAdmin = Roles.userIsInRole( this.userId, 'admin' );

    if ( isAdmin ) {
        return [
            Projects.find(),
            Categories.find(),
            Products.find(),
        ];
    } else {
        return null;
    }
});