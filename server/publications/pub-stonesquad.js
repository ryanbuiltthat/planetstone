/**
 * Created by Ryan on 8/24/2015.
 */
Meteor.publish('frontTeam', function(){
    return Teams.find();
});