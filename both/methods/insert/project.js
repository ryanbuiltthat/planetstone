/**
 * Created by Ryan on 11/9/2015.
 */
Meteor.methods({
    addProject( doc ) {
        //console.log(doc);
        check( doc, {
            name: String,
            desc: String,
            slug: String,
            active: Boolean,
            asscprod: Match.Optional(String),
            category: String,
            createdAt: Date
        });

        try {
            var docId = Modules.server.addProject( doc );
            return docId;
        } catch( exception ) {
            return exception;
        }
    }
});