/**
 * Created by Ryan on 8/24/2015.
 */
ProductImages = new FS.Collection("productimages", {
    stores: [
        new FS.Store.S3("product_fullRes",{
            bucket: "com.planetstonemarblegranite",
            accessKeyId:    "AKIAIFERSOLRDWGKQ2PQ",
            secretAccessKey: "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",
            folder: "/full",
            ACL: "public-read"
        }),
        new FS.Store.S3("product_menuSize", {
            bucket: "com.planetstonemarblegranite",
            accessKeyId:    "AKIAIFERSOLRDWGKQ2PQ",
            secretAccessKey: "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",
            folder: "/menuSize",
            ACL: "public-read",
            transformWrite: createMenuThumb }),
        new FS.Store.S3("product_thumbs", {
            bucket: "com.planetstonemarblegranite",
            accessKeyId:    "AKIAIFERSOLRDWGKQ2PQ",
            secretAccessKey: "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",
            folder: "/thumbs",
            ACL: "public-read",
            transformWrite: createThumb }),
        new FS.Store.S3("product_galleryThumb", {
            bucket: "com.planetstonemarblegranite",
            accessKeyId:    "AKIAIFERSOLRDWGKQ2PQ",
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