/**
 * Created by Ryan on 10/11/2015.
 */
Template.file.helpers({
    isImage( url ) {
        const formats = [ 'jpg', 'jpeg', 'png', 'gif' ];
        //return _.find( formats, ( format ) => url.indexOf( format ) > -1 );
        return true;
    }
});