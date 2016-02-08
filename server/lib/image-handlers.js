/**
 * Created by Ryan on 1/21/2016.
 */
makeMenuThumb = function(fileObj, readStream, writeStream) {
    var wsize = '280';
    var hsize = '210';
    try {
        gm(readStream, fileObj.name()).resize(wsize, hsize + '^').gravity('SouthEast').extent(wsize, hsize).quality(75).stream().pipe(writeStream);

    }catch(e){
        throw new Meteor.Error(e);
    }
};
makeGalleryThumb = function(fileObj, readStream, writeStream) {
    var wsize = '800';
    var hsize = '600';
    try {
        gm(readStream, fileObj.name()).resize(wsize, hsize + '^').gravity('SouthEast').extent(wsize, hsize).quality(65).stream().pipe(writeStream);
    }catch(e){
        throw new Meteor.Error(e);
    }
};
makeThumb = function(fileObj, readStream, writeStream) {
    var size = '150';
    try {
        gm(readStream, fileObj.name()).resize(size, size + '^').gravity('SouthEast').extent(size, size).quality(50).stream().pipe(writeStream);
    }catch(e){
        throw new Meteor.Error(e);
    }
};
compressFullRes = function(fileObj, readStream, writeStream) {
    try {
        gm(readStream, fileObj.name()).quality(65).stream().pipe(writeStream);
    }catch(e){
        throw new Meteor.Error(e);
    }
};
teamMedium = function(fileObj, readStream, writeStream) {
    var wsize = '266';
    var hsize = '266';
    try {
        gm(readStream, fileObj.name()).resize(wsize, hsize + '^').gravity('SouthEast').extent(wsize, hsize).quality(45).stream().pipe(writeStream);

    }catch(e){
        throw new Meteor.Error(e);
    }
};

fullResStore = new FS.Store.S3("full-res",{
    bucket: "complanetstonemarbleandgranite",
    accessKeyId:    "AKIAJ5SPXKHCH5FNVSKA",
    secretAccessKey: "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",
    folder: "image-assets/full-res",
    ACL: "public-read",
    transformWrite: compressFullRes });
galleryStore = new FS.Store.S3("gallery-crop", {
    bucket: "complanetstonemarbleandgranite",
    accessKeyId:    "AKIAJ5SPXKHCH5FNVSKA",
    secretAccessKey: "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",
    folder: "image-assets/gallery-crop",
    ACL: "public-read",
    transformWrite: makeGalleryThumb });
menuStore = new FS.Store.S3("menu-crop", {
    bucket: "complanetstonemarbleandgranite",
    accessKeyId:    "AKIAJ5SPXKHCH5FNVSKA",
    secretAccessKey: "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",
    folder: "image-assets/menu-crop",
    ACL: "public-read",
    transformWrite: makeMenuThumb });
thumbStore =  new FS.Store.S3("thumbnails", {
    bucket: "complanetstonemarbleandgranite",
    accessKeyId:    "AKIAJ5SPXKHCH5FNVSKA",
    secretAccessKey: "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",
    folder: "image-assets/thumbnails",
    ACL: "public-read",
    transformWrite: makeThumb });