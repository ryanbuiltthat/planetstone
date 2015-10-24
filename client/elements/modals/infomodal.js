/**
 * Created by Ryan on 10/6/2015.
 */

Template.infoModal.helpers({
   getSess: function(){
       return Session.get("userInfo") || "";
   }
});

Template.infoModal.onRendered(function(){

    // Auto set modal field to any previous info
    var field = $("input[name='infoReqText']");
    field.value = Session.get("userInfo") || "";

    this.autorun(function(){
        // Need to prep the modal as soon as the user clicks the heart icon
        $('#infoModal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget);
            var item = button.data('item');
            var modal = $(this);
            //var customer = Session.get('userInfo');
            modal.find('.modal-title span').text(item);
            modal.find("[id='targetProduct']").text(item);
            //modal.find("[name='infoReqText']").value = customer;

        });
    });

    // Just do a quick check that the field has a value
    $("#userRequestForm").validate();

});

Template.infoModal.events({
    'submit form': function(e,t){
        // Prevent the form from submitting
        e.preventDefault();

        // Disable user input
        var customerInput = t.find("[name='infoReqText']");
        $(customerInput).prop('disabled', function(i, v) { return !v; });

        // Set our data object
        var info = {
            customer : t.find("[name='infoReqText']").value,
            interest : t.find("[id='targetProduct']").innerText,
            route: FlowRouter.getRouteName()
        };

        // Set our session variable for potential future quick requests
        Session.set("userInfo", e.target.infoReqText.value);

        // Send email
        Meteor.call('quickSend', info, function(error){
            if(error){
                toastr.error(" :( We hit a snag with this request. Please try again later or call our showroom.", "");
            }else {
                // Show success message, re-enable input, hide modal
                toastr.success("Thank you. We will be in touch shortly.", "");

                // Track this event
                analytics.track("Submitted Quick Request: ", {
                    eventName:  "Lead Captured: "+info.route
                });


                $('#infoModal').modal('toggle');
                $(customerInput).prop('disabled', function(i, v) { return !v; });


            }
        })
    }
});