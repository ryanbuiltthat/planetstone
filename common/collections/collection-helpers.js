/**
 * Created by Ryan on 8/22/2015.
 */
createMenuThumb = function(fileObj, readStream, writeStream) {
    var wsize = '270';
    var hsize = '187';
    try {
        gm(readStream, fileObj.name()).resize(wsize, hsize).gravity('Center').stream().pipe(writeStream);

    }catch(e){
        throw new Meteor.Error(e);
    }
};
createGalleryThumb = function(fileObj, readStream, writeStream) {
    var wsize = '800';
    var hsize = '600';
    try {
        gm(readStream, fileObj.name()).resize(wsize, hsize + '^').gravity('Center').extent(wsize, hsize).quality(55).stream().pipe(writeStream);
    }catch(e){
        throw new Meteor.Error(e);
    }
};
createThumb = function(fileObj, readStream, writeStream) {
    var size = '120';
    try {
        gm(readStream, fileObj.name()).resize(size, size + '^').gravity('Center').extent(size, size).quality(40).stream().pipe(writeStream);
    }catch(e){
        throw new Meteor.Error(e);
    }
};