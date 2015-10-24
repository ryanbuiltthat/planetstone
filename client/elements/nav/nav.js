/**
 * Created by Ryan on 8/14/2015.
 */
Template.nav.onRendered(function(){
    //

    Meteor.setTimeout(function(){
        $().jetmenu();
    }, 200);

    // Get datepicker moving
    //$('#startDate').datepicker();

    // Fire up the validator
    $('#drawerForm').validate();

    $('#startdate').datepicker();
    // CUSTOM FORM ELEMENTS
    $('input[type=radio], input[type=checkbox],input[type=number],select').uniform();

});


Template.nav.events({
    /**
     * Need to hide the megamenu after click. Pages load so fast and with the size
     * of the galleryThumbs you may not notice the page is loaded.
     * @param e
     * @param t
     */
    'click a':function(e,t){
        //$('.megamenu').css({display: 'none'});
        $('.megamenu').hide('fast');
        //$().jetmenu('hide');
    },
    'submit form': function (e,t){
        e.preventDefault();
        var customer = t.find("[id='name']").value;
        var emailphone = t.find("[id='emailphone']").value;
        var helpwith = t.find("[id='helpwith']").value;
        var startdate = t.find("[id='startdate']").value;
        var lead = {
            name: customer,
            emailphone: emailphone,
            helpwith: helpwith,
            startdate: startdate
        };
        Meteor.call('drawer', lead, function(error,result){
            if(error){
                toastr.error(" :( We hit a snag with this request. Please try again later or call our showroom.\n"+error);
            }else {
                // Show success message, re-enable input, hide modal
                toastr.success("Thank you. We will be in touch shortly.", "Success!");

                // Track this event
                analytics.track("Lead Captured", {
                    eventName:  "Homepage Drawer Capture"
                });

                // Clear Form
                t.find("[id='name']").value = '';
                t.find("[id='emailphone']").value = '';
                t.find("[id='helpwith']").selectedIndex = 0;
                t.find("[id='startdate']").value = '';
            }
        })

    }


});