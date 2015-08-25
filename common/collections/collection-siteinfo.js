/**
 * Created by Ryan on 8/9/2015.
 */
Schemas.Info = new SimpleSchema({
    title: {
        type: String,
        label: "Site Name",
        max: 200
    },
    desc: {
        type: String,
        label: "Site Description",
        max: 250,
    },
    phone: {
        type: String,
        label: "Type"
    },
    address:{
        label: "Physical Address",
        type: AddressSchema
    },
    email: {
        label: "Site Contact",
        type: String,
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