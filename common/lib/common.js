/**
 * Created by Ryan on 8/9/2015.
 */
// Constants
Schemas = {};


//ProjectImages = new FS.Collection("projectimages", {
//    stores: [
//        new FS.Store.S3("fr",{
//            bucket: Meteor.settings.private.AWS.bucket,
//            accessKeyId:    Meteor.settings.private.AWS.accessKey,
//            secretAccessKey: Meteor.settings.private.AWS.accessSecret,
//            folder: Meteor.settings.private.AWS.directory + "/fr",
//            ACL: "public-read"
//        }),
//        new FS.Store.S3("menuThumb", {
//            bucket: Meteor.settings.private.AWS.bucket,
//            accessKeyId:    Meteor.settings.private.AWS.accessKey,
//            secretAccessKey: Meteor.settings.private.AWS.accessSecret,
//            folder: Meteor.settings.private.AWS.directory + "/menuThumb",
//            ACL: "public-read",
//            transformWrite: createMenuThumb }),
//        new FS.Store.S3("thmb", {
//            bucket: Meteor.settings.private.AWS.bucket,
//            accessKeyId:    Meteor.settings.private.AWS.accessKey,
//            secretAccessKey: Meteor.settings.private.AWS.accessSecret,
//            folder: Meteor.settings.private.AWS.directory + "/thmb",
//            ACL: "public-read",
//            transformWrite: createThumb }),
//        new FS.Store.S3("galleryThumb", {
//            bucket: Meteor.settings.private.AWS.bucket,
//            accessKeyId:    Meteor.settings.private.AWS.accessKey,
//            secretAccessKey: Meteor.settings.private.AWS.accessSecret,
//            folder: Meteor.settings.private.AWS.directory + "/galleryThumb",
//            ACL: "public-read",
//            transformWrite: createGalleryThumb })
//    ]
//});

// FS Stores

//// Thumb 160x160
//thumbStore = new FS.Store.S3("thmb", {
//    bucket: Meteor.settings.private.AWS.bucket,
//    accessKeyId:    Meteor.settings.private.AWS.accessKey,
//    secretAccessKey: Meteor.settings.private.AWS.accessSecret,
//    folder: Meteor.settings.private.AWS.directory + "/thmb",
//    ACL: "public-read",
//    transformWrite: makeThumb
//});
//
//// Menu Preview 280x210
//menuStore = new FS.Store.S3("menuThumb", {
//    bucket: Meteor.settings.private.AWS.bucket,
//    accessKeyId:    Meteor.settings.private.AWS.accessKey,
//    secretAccessKey: Meteor.settings.private.AWS.accessSecret,
//    folder: Meteor.settings.private.AWS.directory + "/menuThumb",
//    ACL: "public-read",
//    transformWrite: makeMenuThumb
//});
//
//// Gallery Preview 800 x 600
//galleryStore = new FS.Store.S3("galleryThumb", {
//    bucket: Meteor.settings.private.AWS.bucket,
//    accessKeyId:    Meteor.settings.private.AWS.accessKey,
//    secretAccessKey: Meteor.settings.private.AWS.accessSecret,
//    folder: Meteor.settings.private.AWS.directory + "/galleryThumb",
//    ACL: "public-read",
//    transformWrite: makeGalleryThumb
//});
//
//// Fullres
//fullStore = new FS.Store.S3("fr", {
//    bucket: Meteor.settings.private.AWS.bucket,
//    accessKeyId:    Meteor.settings.private.AWS.accessKey,
//    secretAccessKey: Meteor.settings.private.AWS.accessSecret,
//    folder: Meteor.settings.private.AWS.directory + "/fr",
//   // transformWrite: compressFullRes
//});
//
//// Team img stores
//teamMed = new FS.Store.S3("teamMed", {
//    bucket: Meteor.settings.private.AWS.bucket,
//    accessKeyId:    Meteor.settings.private.AWS.accessKey,
//    secretAccessKey: Meteor.settings.private.AWS.accessSecret,
//    folder: Meteor.settings.private.AWS.directory + "/team",
//   transformWrite: teamMedium
//});



// Thumb 160x160
thumbStore = new FS.Store.S3("thmb", {
    bucket: "complanetstonemarbleandgranite",
    //accessKeyId:    Meteor.settings.private.AWS.accessKey,
    //secretAccessKey: Meteor.settings.private.AWS.accessSecret,
    folder: "image-assets/" + "/thmb",
    ACL: "public-read",
    //transformWrite: makeThumb
});

// Menu Preview 280x210
menuStore = new FS.Store.S3("menuThumb", {
    bucket: "complanetstonemarbleandgranite",
    //accessKeyId:    Meteor.settings.private.AWS.accessKey,
    //secretAccessKey: Meteor.settings.private.AWS.accessSecret,
    folder: "image-assets/" + "/menuThumb",
    ACL: "public-read",
    //transformWrite: makeMenuThumb
});

// Gallery Preview 800 x 600
galleryStore = new FS.Store.S3("galleryThumb", {
    bucket: "complanetstonemarbleandgranite",
    //accessKeyId:    Meteor.settings.private.AWS.accessKey,
    //secretAccessKey: Meteor.settings.private.AWS.accessSecret,
    folder: "image-assets/" + "/galleryThumb",
    ACL: "public-read",
    //transformWrite: makeGalleryThumb
});

// Fullres
//var fullStore = new FS.Store.S3("fr",{bucket: "complanetstonemarbleandgranite"});

// Team img stores
teamMed = new FS.Store.S3("teamMed", {
    bucket: "complanetstonemarbleandgranite",
    //accessKeyId:    Meteor.settings.private.AWS.accessKey,
    //secretAccessKey: Meteor.settings.private.AWS.accessSecret,
    folder: "image-assets/" + "/team",
    //transformWrite: teamMedium
});












// Collections
Products = new Mongo.Collection("products");
Projects = new Mongo.Collection("projects");
Testimonials = new Mongo.Collection("testimonials");
Site = new Mongo.Collection("site");
Colors = new Mongo.Collection("colors");
Types = new Mongo.Collection("types");
Categories = new Mongo.Collection("categories");
Teams = new Mongo.Collection("teams");
//Faqs = new Mongo.Collection("faqs");
Leads = new Mongo.Collection("leads");
Meta = new Mongo.Collection("meta");