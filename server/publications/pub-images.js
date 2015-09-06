/**
 * Created by Ryan on 8/22/2015.
 */
Meteor.publish('productImages', function () {
    // `this` provides a context similar to Meteor.publish
    return ProductImages.find();
});

Meteor.publish('singleProductImages', function( images ){
   return ProductImages.find( { _id: { $in: images } } );
});