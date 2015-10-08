/**
 * Created by Ryan on 10/7/2015.
 */
Template.inlinePgForm.onCreated(function(){});
Template.inlinePgForm.onRendered(function(){
    $('#inlinePageForm').validate();
});
Template.inlinePgForm.helpers({});
Template.inlinePgForm.events({
    'submit form': function(e,t){
        e.preventDefault();
        var cxt = Template.currentData();
        //console.log(cxt._id);
        var customer = t.find("[id='name']").value;
        var email = t.find("[id='email']").value;
        var phone = t.find("[id='phone']").value;
        var question = t.find("[id='question']").value;
        var optout = t.find("[id='emailOptOut']").value;
        var lead = {
            name: customer,
            email: email,
            phone: phone,
            msg: question,
            optout: optout,
            route: FlowRouter.getRouteName(),
            item: cxt.name || cxt._id
        };
        Meteor.call('contactForm', lead, function(error,result){
            if(error){
                toastr.error(" :( We hit a snag with this request. Please try again later or call our showroom.\n"+error);
            }else {
                // Show success message, re-enable input, hide modal
                toastr.success("Thank you. We will be in touch shortly.", "Success!");
                t.find("[id='name']").value = '';
                t.find("[id='email']").value = '';
                t.find("[id='phone']").value = '';
                t.find("[id='question']").value = '';
                t.find("[id='emailOptOut']").value = '';
            }
        })

    }
});