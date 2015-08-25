/**
 * Created by Ryan on 8/24/2015.
 */
Schemas.Team = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
    },
    position: {
        type: String,
        label: "Position",
        optional: true,
    },
    bio: {
        type: String,
        label: "Bio",
        optional: true,
        max: 15000,
        autoform:{
            afFieldInput:{
                type: "textarea",
                rows: 10
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
        },
        autoform:{
            afFieldInput:{
                type: "hidden"
            }
        },
        optional: true,
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
                type: "cfs-file",
                collection: "images"
            }
        },
        optional: true
    }
});
Teams.attachSchema(Schemas.Team);