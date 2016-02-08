///**
// * Created by Ryan on 1/20/2016.
// */
//var imageStoreFullRes = new FS.Store.S3("image_full_res");
//var imageStoreMenu = new FS.Store.S3("image_menu_crop");
ProjectImages = new FS.Collection("projectimages", {
    stores: [
        fullResStore, galleryStore, menuStore, thumbStore
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
    remove: function (userId, doc, fieldNames, modifier) {
        if(userId)
            return true;
    },
    download: function (userId) {
        return true;
    }
});