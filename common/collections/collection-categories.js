/**
 * Created by Ryan on 8/21/2015.
 */
Schemas.Category = new SimpleSchema({
    title: {
        type: String,
        label: "Product Category",
        optional: true,
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
    }
});
Categories.attachSchema(Schemas.Category);