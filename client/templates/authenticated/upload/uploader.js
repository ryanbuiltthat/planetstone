/**
 * Created by Ryan on 10/11/2015.
 */
Template.upload.onCreated(function(){
    // Get our slingshot directive going
    Modules.client.startup();
});
Template.uploader.events({
    'change input[type="file"]' ( event, template ) {
        Modules.client.uploadToAmazonS3( { event: event, template: template } );
    }
});

Template.uploader.helpers({
    progress: function () {
        return Math.round(this.uploader.progress() * 100);
    }
});