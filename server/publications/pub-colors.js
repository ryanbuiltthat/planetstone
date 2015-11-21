/**
 * Created by Ryan on 9/1/2015.
 */
Meteor.publish('allColors', function(colors){
    return Colors.find({ _id: { $in: colors } });
});

Meteor.publish('colors', function(colors){
    return Colors.find({});
});