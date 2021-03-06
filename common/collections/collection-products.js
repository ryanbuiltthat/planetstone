/**
 * Created by Ryan on 8/9/2015.
 */
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
    },
    color: {
        type: [String],
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
        autoform: {
            afFieldInput: {
                type: "cfs-files",
                collection: "productimages"
            }
        },
        optional: true
    }
});

/**
 * TODO: Add image manipulation to create specific sizes for displays
 *
 */

Products.attachSchema(Schemas.Product);


///-----------------

