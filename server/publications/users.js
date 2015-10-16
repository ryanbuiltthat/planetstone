Meteor.publish( 'users', function() {
  let isAdmin = Roles.userIsInRole( this.userId, 'admin' );

  if ( isAdmin ) {
    return [
      Meteor.users.find( {}, { fields: { "emails.address": 1, "profile.name.first": 1, "profile.name.last": 1, "roles": 1 } } ),
      //Meteor.users.find(),
      Invitations.find( {}, { fields: { "email": 1, "role": 1, "date": 1 } } )
    ];
  } else {
    return null;
  }
});

