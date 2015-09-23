/**
 * Created by Ryan on 8/9/2015.
 */
// Constants
Schemas = {};

// Image processors
makeMenuThumb = function(fileObj, readStream, writeStream) {
    var wsize = '280';
    var hsize = '210';
    try {
        gm(readStream, fileObj.name()).resize(wsize, hsize + '^').gravity('SouthEast').extent(wsize, hsize).quality(45).stream().pipe(writeStream);

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
        gm(readStream, fileObj.name()).resize(size, size + '^').gravity('SouthEast').extent(size, size).quality(30).stream().pipe(writeStream);
    }catch(e){
        throw new Meteor.Error(e);
    }
};
compressFullRes = function(fileObj, readStream, writeStream) {
    try {
        gm(readStream, fileObj.name()).quality(50).stream().pipe(writeStream);
    }catch(e){
        throw new Meteor.Error(e);
    }
};

// Medium team image
teamMedium = function(fileObj, readStream, writeStream) {
    var wsize = '266';
    var hsize = '266';
    try {
        gm(readStream, fileObj.name()).resize(wsize, hsize + '^').gravity('SouthEast').extent(wsize, hsize).quality(45).stream().pipe(writeStream);

    }catch(e){
        throw new Meteor.Error(e);
    }
};


// FS Stores

// Thumb 160x160
thumbStore = new FS.Store.GridFS("thmb", {
    transformWrite: makeThumb
});

// Menu Preview 280x210
menuStore = new FS.Store.GridFS("menuThumb", {
    transformWrite: makeMenuThumb
});

// Gallery Preview 800 x 600
galleryStore = new FS.Store.GridFS("galleryThumb", {
    transformWrite: makeGalleryThumb
});

// Fullres
fullStore = new FS.Store.GridFS("fr", {
   // transformWrite: compressFullRes
});

// Team img stores
teamMed = new FS.Store.GridFS("teamMed", {
   transformWrite: teamMedium
});

// Collections
Products = new Mongo.Collection("products");
Projects = new Mongo.Collection("projects");
Testimonials = new Mongo.Collection("testimonials");
Site = new Mongo.Collection("site");
Colors = new Mongo.Collection("colors");
Types = new Mongo.Collection("types");
Categories = new Mongo.Collection("categories");
Teams = new Mongo.Collection("teams");
Faqs = new Mongo.Collection("faqs");

SplitProducts = new Meteor.Collection("splitproducts");