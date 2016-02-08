/**
 * Created by Ryan on 1/27/2016.
 */
ProductImages = new FS.Collection("productimages", {
    stores: [
        fullResStore, galleryStore, menuStore, thumbStore
    ]
});


ProductImages.on('stored', function (fileObj, storeName) {
    // do something
    console.log('stored!!');
    //console.log(fileObj);
    //console.log(storeName);
});
ProductImages.on('uploaded', function (fileObj) {
    // do something
    console.log('uploaded!!');
    //console.log(fileObj);
});
ProductImages.on('error', function (error, fileObj) {
    // this will be an upload error; to listen for store errors, listen on the stores themselves});
    console.log('error!!');
    //console.log(error);
    //console.log(fileObj);
});




/**
 * Security for cfs collection
 */
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
    download: function () {
        return true;
    }
});