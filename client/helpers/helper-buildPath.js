/**
 * Created by Ryan on 8/16/2015.
 */
Template.registerHelper("buildPathFor", function(name, view){

    var pathDef = "/manage/:category/:view";
    var params = {category: name, view: view};
    var path = FlowRouter.path(pathDef, params);
    //console.log("[buildPathFor] "+path);
    return path;
});