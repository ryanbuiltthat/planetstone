/**
 * Created by Ryan on 8/15/2015.
 */
if(Meteor.isServer){
    Meteor.methods({
        quickSend: function(contact){
            var customer = contact.customer;
            var interest = contact.interest;
            check(customer, String);
            check(interest, String);
            contact.type = "quicksend";
            contact.createdAt = new Date();
            this.unblock();
            Leads.insert(contact);
            SSR.compileTemplate( 'quickrequest', Assets.getText( 'quickrequest.html' ) );
            Email.send({
                to: "info@ryanbuiltthat.com",
                from: "Planet Stone Web <noreply@planetstone.com>",
                subject: "NEW Quick Request",
                html: SSR.render( 'quickrequest', contact )
                //html: "<p>A new lead has come through the Quick Request form on the Planet Stone Website.<br />Contact "+customer+" about "+interest+"</p>"
            });
        },
        contactForm: function(pgForm){
           check(pgForm,{
               name: String,
               phone: Match.Optional(String),
               email: String,
               msg: String,
               optout: Match.Optional(String),
               route: Match.Optional(String),
               item: Match.Optional(String)
           });
            pgForm.type = "pageform";
            this.unblock();
            Leads.insert(pgForm);
            SSR.compileTemplate( 'newlead', Assets.getText( 'newlead.html' ) );
            Email.send({
                to: "info@ryanbuiltthat.com",
                from: "Planet Stone Web <noreply@planetstone.com>",
                subject: "NEW Contact Received",
                html: SSR.render( 'newlead', pgForm )
            });
        }
    });
}