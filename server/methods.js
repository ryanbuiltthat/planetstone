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
                Projects.insert(doc);
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


        }
    });
}