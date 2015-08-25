/**
 * Created by Ryan on 8/15/2015.
 */
Template.logo.helpers({
    getHomeLink: function(){
        var lindexPath = FlowRouter.path("index");
        return lindexPath;
    }
})