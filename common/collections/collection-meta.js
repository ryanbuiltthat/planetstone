/**
 * Created by Ryan on 11/19/2015.
 */
Schemas.Page = new SimpleSchema({
    "pages": {
        type: Object,
        optional: true
    },
    "pages.title": {
        type: String
    },
    "pages.slug": {
        type: String,
        optional: true
    },
    "pages.keywords": {
        type: String,
        optional: true
    },
    "pages.desc": {
        type: String,
        optional: true
    }
});
Meta.attachSchema(Schemas.Page);