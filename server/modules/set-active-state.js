/**
 * Created by Ryan on 10/11/2015.
 */
let setActive = ( options ) => {
    var user = options.user;
    var active = options.active;

    //_addUserToRole( user, invite.role );
    _setActiveState( options );

    //return user;
};

let _setActiveState = ( doc ) => {
  Projects.update(doc.id, {
      $set: { active: doc.active }
  });
};



Modules.server.setActiveState = setActive;