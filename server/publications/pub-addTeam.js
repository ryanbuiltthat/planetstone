/**
 * Created by Ryan on 8/24/2015.
 */
Meteor.publish('addTeams', function(){
    return Teams.find();
});
Meteor.publish('frontTeam', function(){
    return Teams.find();
});