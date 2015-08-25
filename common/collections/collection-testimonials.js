/**
 * Created by Ryan on 8/24/2015.
 */
/**
 * Created by Ryan on 8/21/2015.
 */
Schemas.Testimonial = new SimpleSchema({
    title: {
        type: String,
        label: "title",
        optional: true,
    },
    body: {
        type: String,
        label: "Text",
        max: 15000,
        autoform:{
            afFieldInput:{
                type: "textarea"
            }
        }
    },
    author:{
        type: String,
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
                type:"hidden"
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
Testimonials.attachSchema(Schemas.Testimonial);