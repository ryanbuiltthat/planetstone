///**
// * Created by Ryan on 1/20/2016.
// */
//// Fullres
//var fullStore = new FS.Store.S3("fr", {
//    bucket: "complanetstonemarbleandgranite",
//    accessKeyId:    Meteor.settings.private.AWS.accessKey,
//    secretAccessKey: Meteor.settings.private.AWS.accessSecret,
//    folder: "image-assets/" + "/fr",
//    // transformWrite: compressFullRes
//});
////ProjectImages = new FS.Collection("projectimages", {
////    stores: [
////        //thumbStore,
////        //menuStore,
////        //galleryStore,
////        fullStore
////    ]
////});
////ProjectImages.allow({
////    insert: function (userId, doc) {
////        if(userId)
////            return true;
////    },
////    update: function (userId, doc, fieldNames, modifier) {
////        if(userId)
////            return true;
////    },
////    download: function (userId) {
////        return true;
////    }
////});
//imageStoreMenu
// Image processors
//makeMenuThumb = function(fileObj, readStream, writeStream) {
//    var wsize = '280';
//    var hsize = '210';
//    try {
//        gm(readStream, fileObj.name()).resize(wsize, hsize + '^').gravity('SouthEast').extent(wsize, hsize).quality(75).stream().pipe(writeStream);
//
//    }catch(e){
//        throw new Meteor.Error(e);
//    }
//};
//makeGalleryThumb = function(fileObj, readStream, writeStream) {
//    var wsize = '800';
//    var hsize = '600';
//    try {
//        gm(readStream, fileObj.name()).resize(wsize, hsize + '^').gravity('SouthEast').extent(wsize, hsize).quality(65).stream().pipe(writeStream);
//    }catch(e){
//        throw new Meteor.Error(e);
//    }
//};
//makeThumb = function(fileObj, readStream, writeStream) {
//    var size = '150';
//    try {
//        gm(readStream, fileObj.name()).resize(size, size + '^').gravity('SouthEast').extent(size, size).quality(50).stream().pipe(writeStream);
//    }catch(e){
//        throw new Meteor.Error(e);
//    }
//};
//compressFullRes = function(fileObj, readStream, writeStream) {
//    try {
//        gm(readStream, fileObj.name()).quality(65).stream().pipe(writeStream);
//    }catch(e){
//        throw new Meteor.Error(e);
//    }
//};
//teamMedium = function(fileObj, readStream, writeStream) {
//    var wsize = '266';
//    var hsize = '266';
//    try {
//        gm(readStream, fileObj.name()).resize(wsize, hsize + '^').gravity('SouthEast').extent(wsize, hsize).quality(45).stream().pipe(writeStream);
//
//    }catch(e){
//        throw new Meteor.Error(e);
//    }
//};