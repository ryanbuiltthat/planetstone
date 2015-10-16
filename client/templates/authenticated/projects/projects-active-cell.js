/**
 * Created by Ryan on 10/11/2015.
 */
Template.projectactivecell.onCreated(function(){

});

Template.projectactivecell.onRendered(function(){
    //var context = Template.currentData();
    //var myToggle = $('.toggle').data();

    // Form Toggles
    $('.toggle').toggles();

    /**
     * TODO: Troubleshoot latency on active update....
     */

    /**
     * TODO: refactor active cell for dynamic names
     */

    //$('.toggle').on('click', function (e, active) {
    //    console.log(e.target);
    //
    //});
});

Template.projectactivecell.events({
   //'toggle .control-label>.toggle':function(e,t){
   //    console.log("toggled!");
   //    console.log(e.currentTarget);
   //    console.log(t);
   //}
    'click':function(e,t){
        var toggle = $(e.currentTarget).closest('.toggle');
        var activeTarget = toggle.find('.active');
        var doc = {
            id: $(toggle).data("doc")
        };
        if(activeTarget.text()=="ON"){
            doc.active = true;
        }else {
            doc.active = false;
        }
        Meteor.call('setActiveState', doc, function(error,result){
            if(error){
                Bert.alert(error.message, "warning");
            }else {
                Bert.alert(result, "success");
            }
        });

    }
});