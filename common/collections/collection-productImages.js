/**
 * Created by Ryan on 8/24/2015.
 */
ProductImages = new FS.Collection("productimages", {
    stores: [
        new FS.Store.S3("product_fullRes",{
            bucket: "com.planetstonemarblegranite",
            accessKeyId:    "AKIAJ4WZIAUZMYFLEGGQ",
            secretAccessKey: "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",
            folder: "/full",
            ACL: "public-read"
        }),
        new FS.Store.S3("product_menuSize", {
            bucket: "com.planetstonemarblegranite",
            accessKeyId:    "AKIAJ4WZIAUZMYFLEGGQ",
            secretAccessKey: "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",
            folder: "/menuSize",
            ACL: "public-read",
            transformWrite: createMenuThumb }),
        new FS.Store.S3("product_thumbs", {
            bucket: "com.planetstonemarblegranite",
            accessKeyId:    "AKIAJ4WZIAUZMYFLEGGQ",
            secretAccessKey: "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",
            folder: "/thumbs",
            ACL: "public-read",
            transformWrite: createThumb }),
        new FS.Store.S3("product_galleryThumb", {
            bucket: "com.planetstonemarblegranite",
            accessKeyId:    "AKIAJ4WZIAUZMYFLEGGQ",
            secretAccessKey: "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",
            folder: "/galleryThumb",
            ACL: "public-read",
            transformWrite: createGalleryThumb })
    ]
});
ProductImages.allow({
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