/**
 * Created by Ryan on 8/9/2015.
 */
//var fullStore = new FS.Store.S3("fr",{bucket: "complanetstonemarbleandgranite"});
Schemas.Product = new SimpleSchema({
    featured: {
        type: Boolean,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "boolean-checkbox"
            }
        }
    },
    assettype: {
        type: String,
        optional: true
    },
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
    },
    color: {
        type: [String]
    },
    type: {
        type: String,
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
    images: {
        type: [String],
        optional: true
    }
});

Products.attachSchema(Schemas.Product);