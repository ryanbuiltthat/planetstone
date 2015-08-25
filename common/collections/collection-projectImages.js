/**
 * Created by Ryan on 8/25/2015.
 */
ProjectImages = new FS.Collection("projectimages", {
    stores: [
        new FS.Store.S3("project_fullRes",{
            bucket: "com.planetstonemarblegranite",
            accessKeyId:    "AKIAJ4WZIAUZMYFLEGGQ",
            secretAccessKey: "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",
            folder: "/full",
            ACL: "public-read"
        }),
        new FS.Store.S3("project_menuSize", {
            bucket: "com.planetstonemarblegranite",
            accessKeyId:    "AKIAJ4WZIAUZMYFLEGGQ",
            secretAccessKey: "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",
            folder: "/menuSize",
            ACL: "public-read",
            transformWrite: createMenuThumb }),
        new FS.Store.S3("project_thumbs", {
            bucket: "com.planetstonemarblegranite",
            accessKeyId:    "AKIAJ4WZIAUZMYFLEGGQ",
            secretAccessKey: "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",
            folder: "/thumbs",
            ACL: "public-read",
            transformWrite: createThumb }),
        new FS.Store.S3("project_galleryThumb", {
            bucket: "com.planetstonemarblegranite",
            accessKeyId:    "AKIAJ4WZIAUZMYFLEGGQ",
            secretAccessKey: "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",
            folder: "/galleryThumb",
            ACL: "public-read",
            transformWrite: createGalleryThumb })
    ]
});
ProjectImages.allow({
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