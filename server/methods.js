/**
 * Created by Ryan on 8/15/2015.
 */
if(Meteor.isServer){
    Meteor.methods({
        addProject: function(doc){
            if(!Meteor.userId())
                throw new Meteor.Error("403 Forbidden");
            //console.log(doc);
            //Schemas.Project = new SimpleSchema({
            //
            //    name:{
            //        type: String,
            //        label: "Project Title"
            //    },
            //    slug: {
            //        type: String,
            //        label: "Slug",
            //        max: 200,
            //    },
            //    asscprod: {
            //        type: [String],
            //        label: "Associated Products",
            //        optional: true
            //    },
            //    assccolor: {
            //        type: [String],
            //        label: "Asssociated Colors",
            //        optional: true
            //    },
            //    category: {
            //        label: "Category",
            //        type: String,
            //    },
            //    desc: {
            //        type: String,
            //        label: "Description",
            //        autoform: {
            //            afFieldInput: {
            //                type: "textarea",
            //                rows: 8
            //            }
            //        },
            //        max: 5000
            //    },
            //    active: {
            //        type: Boolean,
            //        autoform: {
            //            afFieldInput: {
            //                type: "boolean-checkbox"
            //            }
            //        }
            //    },
            //    createdAt: {
            //        type: Date,
            //        autoValue: function() {
            //            if (this.isInsert) {
            //                return new Date;
            //            } else if (this.isUpsert) {
            //                return {$setOnInsert: new Date};
            //            } else {
            //                this.unset();
            //            }
            //        }
            //    },
            //    updatedAt: {
            //        type: Date,
            //        autoValue: function() {
            //            if (this.isUpdate) {
            //                return new Date();
            //            }
            //        },
            //        denyInsert: true,
            //        optional: true
            //    },
            //    images: {
            //        type: [String],
            //        autoform: {
            //            afFieldInput: {
            //                type: "cfs-files",
            //                collection: "images"
            //            }
            //        },
            //        optional: true
            //    }
            //});
            //Projects.attachSchema(Schemas.Project);

            try {
                //check(doc,Schemas.Project);
                return Projects.insert(doc);
            }catch(e){
                throw new Meteor.Error(e);
            }
            //return Projects.insert(doc);

        },
        addProduct: function(doc){
            if(!Meteor.userId())
                throw new Meteor.Error("403 Forbidden");
            Schemas.Product = new SimpleSchema({
                name: {
                    type: String,
                    label: "Name",
                    max: 200,
                    optional: false
                },
                slug: {
                    type: String,
                    label: "Slug",
                    max: 200,
                    optional: false
                },
                color: {
                    type: [String],
                    autoform: {
                        //afFieldInput: {
                        // type: "select-checkbox-inline"
                        //}
                    },
                },
                type: {
                    type: String,
                    //autoform: {
                    //    afFieldInput: {
                    //        type: "bracketRadioSuccess"
                    //    }
                    //},
                },
                desc: {
                    type: String,
                    label: "Description",
                    autoform: {
                        afFieldInput: {
                            type: "textarea",
                            rows: 8
                        }
                    },
                    max: 5000
                },
                active: {
                    type: Boolean,
                    //label: "",
                    //allowedValues: ['true', 'false'],
                    autoform: {
                        afFieldInput: {
                            type: "boolean-checkbox"
                        }
                    }
                },
                createdAt: {
                    type: Date,
                    optional: true,
                    autoValue: function() {
                        if (this.isInsert) {
                            return new Date;
                        } else if (this.isUpsert) {
                            return {$setOnInsert: new Date};
                        } else {
                            this.unset();
                        }
                    }
                },
                updatedAt: {
                    type: Date,
                    autoValue: function() {
                        if (this.isUpdate) {
                            return new Date();
                        }
                    },
                    denyInsert: true,
                    optional: true
                },
                // Need to get file info from cfs
                images: {
                    type: [String],
                    autoform: {
                        afFieldInput: {
                            type: "cfs-files",
                            collection: "images"
                        }
                    },
                    optional: true,
                }
            });
            Products.attachSchema(Schemas.Product);
            try {
                Products.insert(doc, {validate: true, autoConvert: false, filter: false});
            }catch(e){
                throw new Meteor.Error(e);
            }


        },
        quickSend: function(contact){
            var customer = contact.customer;
            var interest = contact.interest;
            var subroute = contact.route;
            check(subroute, String);
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
                to: "brooke.keck@gmail.com",
                cc: "planetstone1@gmail.com",
                bcc: "risforryan@gmail.com",
                from: "Planet Stone Web <noreply@planetstone.com>",
                subject: "NEW Contact Received",
                html: SSR.render( 'newlead', pgForm )
            });
        },
        drawer: function(lead){
            check(lead,{
                name: String,
                emailphone: String,
                helpwith: Match.Optional(String),
                startdate: Match.Optional(String)
            });
            lead.createdAt = new Date();
            lead.type = "quickdrawer";
            this.unblock();
            Leads.insert(lead);
            SSR.compileTemplate( 'drawerlead', Assets.getText( 'drawerlead.html' ) );
            Email.send({
                to: "info@ryanbuiltthat.com",
                cc: "rharris@condronandcosgrove.com",
                from: "Planet Stone Web <noreply@planetstone.com>",
                subject: "NEW Contact Received",
                html: SSR.render( 'drawerlead', lead )
            });

        }
    });
}