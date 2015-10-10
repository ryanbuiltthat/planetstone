/**
 * Created by Ryan on 8/22/2015.
 */
Meteor.publish('singleProductImages', function( images ){
   return ProductImages.find();
});