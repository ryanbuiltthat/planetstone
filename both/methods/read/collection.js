/**
 * Created by Ryan on 10/10/2015.
 */
Meteor.methods({
    readMethod( argument ) {
        check( argument, String );

        var document = Collection.findOne( argument );

        if ( !document ) {
            throw new Meteor.Error( 'document-not-found', 'No documents found matching this query.' );
        }

        return document;
    }
});