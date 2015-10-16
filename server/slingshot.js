/**
 * Created by Ryan on 10/11/2015.
 */
Slingshot.fileRestrictions( "uploadToAmazonS3", {
    allowedFileTypes: [ "image/png", "image/jpeg", "image/gif" ],
    maxSize: 10 * 1024 * 1024
});

Slingshot.createDirective( "uploadToAmazonS3", Slingshot.S3Storage, {
    bucket: "com.planetstonemarblegranite",
    acl: "public-read",
    /**
     * TODO Integrate cropper to this package
     */
    authorize: function () {
        // Deny uploads if user is not logged in.
        if (!this.userId) {
            var message = "Please login before posting files";
            throw new Meteor.Error("Login Required", message);
        }
        return true;
    },
    key: function(file) {  }
    //key: function ( file ) {
    //    return "assets/images/" + file.name;
    //}
});

CropUploader.init("uploadToAmazonS3", Meteor.settings.S3Directory);
