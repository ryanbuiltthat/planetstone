/**
 * Created by Ryan on 9/1/2015.
 */
Meteor.publish('allColors', function(colors){
    return Colors.find({ _id: { $in: colors } });
});