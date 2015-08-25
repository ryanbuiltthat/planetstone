/**
 * Created by Ryan on 8/22/2015.
 */
Images = new FS.Collection("images", {
    stores: [
        new FS.Store.S3("full",{
            bucket: "com.planetstonemarblegranite",
            accessKeyId:    "AKIAJ4WZIAUZMYFLEGGQ",
            secretAccessKey: "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",
            folder: "/products",
            ACL: "public-read"
        }),
        new FS.Store.S3("menuSize", {
            bucket: "com.planetstonemarblegranite",
            accessKeyId:    "AKIAJ4WZIAUZMYFLEGGQ",
            secretAccessKey: "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",
            folder: "/products/menuSize",
            ACL: "public-read",
            transformWrite: createMenuThumb }),
        new FS.Store.S3("thumbs", {
            bucket: "com.planetstonemarblegranite",
            accessKeyId:    "AKIAJ4WZIAUZMYFLEGGQ",
            secretAccessKey: "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",
            folder: "/products/thumbs",
            ACL: "public-read",
            transformWrite: createThumb }),
        new FS.Store.S3("galleryThumb", {
            bucket: "com.planetstonemarblegranite",
            accessKeyId:    "AKIAJ4WZIAUZMYFLEGGQ",
            secretAccessKey: "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",
            folder: "/products/galleryThumb",
            ACL: "public-read",
            transformWrite: createGalleryThumb }),
    ]
});

Images.allow({
    insert: function (userId, doc) {
        if(userId)
            return true;
    },
    update: function (userId, doc, fieldNames, modifier) {
        if(userId)
            return true;
    },
    download: function (userId) {
        if(userId)
            return true;
    }
});