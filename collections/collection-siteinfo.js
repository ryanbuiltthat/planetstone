/**
 * Created by Ryan on 8/9/2015.
 */
Schemas.Info = new SimpleSchema({
    title: {
        type: String,
        label: "Site Name",
        max: 200,
        optional: true,
    },
    desc: {
        type: String,
        label: "Site Description",
        max: 250,
        optional: true,
    },
    phone: {
        type: String,
        label: "Phone",
        optional: true,
    },
    address:{
        label: "Physical Address",
        type: AddressSchema,
        optional: true,
    },
    email: {
        label: "Site Contact",
        type: String,
        optional: true,
        //regex: SimpleSchema.RegEx.Email
    },
    socials: {
        label: "Social Media Accounts",
        type: Array,
        optional: true,
        minCount: 0,
        maxCount: 8
    },
    "socials.$": {
        type: Object,
        optional: true
    },
    "socials.$.name": {
        type: String
    },
    "socials.$.url": {
        type: String
    },
    "socials.$.icon": {
        type: String
    }
});
Site.attachSchema(Schemas.Info);