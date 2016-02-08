/**
 * Created by Ryan on 1/21/2016.
 */
ProjectImages = new FS.Collection("projectimages", {
    stores: [
        fullResStore, galleryStore, menuStore, thumbStore
    ]
});


ProjectImages.on('stored', function (fileObj, storeName) {
    // do something
    console.log('stored!!');
    //console.log(fileObj);
    //console.log(storeName);
});
ProjectImages.on('uploaded', function (fileObj) {
    // do something
    console.log('uploaded!!');
    //console.log(fileObj);
});
ProjectImages.on('error', function (error, fileObj) {
    // this will be an upload error; to listen for store errors, listen on the stores themselves});
    console.log('error!!');
    //console.log(error);
    //console.log(fileObj);
});




/**
 * Security for cfs collection
 */
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
    download: function () {
        return true;
    }
});