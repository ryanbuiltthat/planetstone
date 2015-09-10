/**
 * Created by Ryan on 9/9/2015.
 */
Meteor.publish('singleType', function(typeId){
   return Types.find({ _id: typeId });
});