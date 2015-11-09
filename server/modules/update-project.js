/**
 * Created by Ryan on 11/5/2015.
 */
let updateProject = ( options ) => {
    var query = {};
    query[options.k] = options.v;

    //_addUserToRole( user, invite.role );
    _setProjectValue( options, query );

    //return user;
};

let _setProjectValue = ( doc, query ) => {
    Projects.update(doc.id, {
        //$set: { active: doc.active }
        $set: query
    });
};



Modules.server.updateProject = updateProject;