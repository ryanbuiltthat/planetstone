/**
 * Created by Ryan on 8/21/2015.
 */
Schemas.Color = new SimpleSchema({
    title: {
        type: String,
        label: "Product Colors",
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
Colors.attachSchema(Schemas.Color);