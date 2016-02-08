/**
 * Created by Ryan on 10/7/2015.
 */
Meteor.startup( function() {
    if ( Meteor.settings.private ) {
        process.env.MAIL_URL = Meteor.settings.private.MAIL_URL;
        //process.env.bucket = Meteor.settings.private.AWS.bucket;
        //process.env.folder = Meteor.settings.private.AWS.directory;
        process.env.AWS_ACCESS_KEY_ID = Meteor.settings.private.AWS.accessKey;
        process.env.AWS_SECRET_ACCESS_KEY = Meteor.settings.private.AWS.accessSecret;
    }
    Modules.server.startup()
});