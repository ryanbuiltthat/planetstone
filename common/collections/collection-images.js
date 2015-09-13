/**
 * Created by Ryan on 8/22/2015.
 */
//Images = new FS.Collection("images", {
//    stores: [
//        new FS.Store.S3("full",{
//            bucket: "com.planetstonemarblegranite",
//            accessKeyId:    "AKIAIFERSOLRDWGKQ2PQ",
//            secretAccessKey: "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",
//            folder: "/products",
//            ACL: "public-read"
//        }),
//        new FS.Store.S3("menuSize", {
//            bucket: "com.planetstonemarblegranite",
//            accessKeyId:    "AKIAIFERSOLRDWGKQ2PQ",
//            secretAccessKey: "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",
//            folder: "/products/menuSize",
//            ACL: "public-read",
//            transformWrite: createMenuThumb }),
//        new FS.Store.S3("thumbs", {
//            bucket: "com.planetstonemarblegranite",
//            accessKeyId:    "AKIAIFERSOLRDWGKQ2PQ",
//            secretAccessKey: "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",
//            folder: "/products/thumbs",
//            ACL: "public-read",
//            transformWrite: createThumb }),
//        new FS.Store.S3("galleryThumb", {
//            bucket: "com.planetstonemarblegranite",
//            accessKeyId:    "AKIAIFERSOLRDWGKQ2PQ",
//            secretAccessKey: "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",
//            folder: "/products/galleryThumb",
//            ACL: "public-read",
//            transformWrite: createGalleryThumb }),
//    ]
//});

//Images.allow({
//    insert: function (userId, doc) {
//        if(userId)
//            return true;
//    },
//    update: function (userId, doc, fieldNames, modifier) {
//        if(userId)
//            return true;
//    },
//    download: function (userId) {
//        if(userId)
//            return true;
//    }
//});

//LocalImages = new FS.Store.FileSystem("localimages", {
//    path: "~/app-files/images", //optional, default is "/cfs/files" path within app container
//    transformWrite: myTransformWriteFunction, //optional
//    transformRead: myTransformReadFunction, //optional
//    maxTries: 1 //optional, default 5
//});
//var localimageStore = new FS.Store.FileSystem("images", {
    //path: "/app-files/images", //optional, default is "/cfs/files" path within app container
    //transformWrite: myTransformWriteFunction, //optional
    //transformRead: myTransformReadFunction, //optional
    //maxTries: 5 //optional, default 5
//});
//LocalImages = new FS.Collection("localimages", {
//    stores: [localimageStore]
//});
//
//LocalImages.allow({
//    insert: function (userId, doc) {
//        //if(userId)
//            return true;
//    },
//    update: function (userId, doc, fieldNames, modifier) {
//        //if(userId)
//            return true;
//    },
//    download: function (userId) {
//        //if(userId)
//            return true;
//    }
//});