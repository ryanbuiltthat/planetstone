/**
 * Created by Ryan on 8/16/2015.
 */
Template.breadcrumbs.onRendered(function(){
    Tracker.autorun(function() {
        FlowRouter.watchPathChange();
        var oRoute = FlowRouter.current();
        var oParams = oRoute.params; // grab the URL params
        var iParams = Object.keys(oParams).length; //number of params
        var counter = 0;
        for ( x in oParams ){
            counter++;
            if ( counter == iParams ){

                //$('ol.breadcrumb').append('<li class="active">'+oParams[x].capitalize()+'</li>')
            }else {

                //$('ol.breadcrumb').append('<li><a  href="#">'+oParams[x].capitalize()+'</a></li>')
            }

        }
    });
});