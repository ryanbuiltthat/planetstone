/**
 * Created by Ryan on 8/14/2015.
 */
Template.registerHelper("getPathFor", function(name){
    var path = FlowRouter.path(name);
    return path;
});