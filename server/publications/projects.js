/**
 * Created by Ryan on 10/11/2015.
 */
Meteor.publish( 'projects', function() {
    let isAdmin = Roles.userIsInRole( this.userId, 'admin' );

    if ( isAdmin ) {
        return [
            Projects.find(),
            Categories.find(),
            Products.find()
        ];
    } else {
        return null;
    }
});

Meteor.publish( 'project', function(projectId) {
    let isAdmin = Roles.userIsInRole( this.userId, 'admin' );
    let isManager = Roles.userIsInRole( this.userId, 'manager' );
    if ( isAdmin || isManager ) {
        return [
            Projects.find( { _id: projectId } ),
            Categories.find(),
            Products.find()
        ];
    } else {
        return null;
    }
});