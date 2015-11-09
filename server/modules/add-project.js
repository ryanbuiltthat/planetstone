/**
 * Created by Ryan on 11/9/2015.
 */
let addProject = ( options ) => {

    _addProjectValue( options );
};

let _addProjectValue = ( doc ) => {
    console.log("[_addProjectValue]");
    console.log(doc);
    Projects.insert(doc, function(err){
        console.log(err);
        return err;
    });
};

Modules.server.addProject = addProject;