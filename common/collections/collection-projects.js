/**
 * Created by Ryan on 8/9/2015.
 */
Schemas.Project = new SimpleSchema({

    name:{
        type: String,
        label: "Project Title"
    },
    slug: {
        type: String,
        label: "Slug",
        max: 200,
    },
    asscprod: {
        type: [String],
        label: "Associated Products",
        optional: true
    },
    assccolor: {
        type: [String],
        label: "Asssociated Colors",
        optional: true
    },
    category: {
        label: "Category",
        type: String,
        optional: true
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
        autoform: {
            afFieldInput: {
                type: "boolean-checkbox"
            }
        }
    },
    createdAt: {
        type: Date,
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
    images: {
        type: [String],
        autoform: {
            afFieldInput: {
                type: "cfs-files",
                collection: "projectimages"
            }
        },
        optional: true
    }
});
Projects.attachSchema(Schemas.Project);