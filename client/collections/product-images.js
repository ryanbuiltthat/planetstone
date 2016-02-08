///**
// * Created by Ryan on 1/20/2016.
// */
ProductImages = new FS.Collection("productimages", {
    stores: [
        fullResStore, galleryStore, menuStore, thumbStore
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
    remove: function (userId, doc, fieldNames, modifier) {
        if(userId)
            return true;
    },
    download: function (userId) {
        return true;
    }
});