/**
 * Created by Ryan on 8/13/2015.
 */

// Set BlazeLayout root to body
BlazeLayout.setRoot('body');

// Enable autoform debugging
AutoForm.debug();
AutoForm.addHooks(
    ["addProductForm", "addProjectForm","afUpdateProduct"],
    {
        before   : {
            method: CfsAutoForm.Hooks.beforeInsert
        },
        after    : {
            method: CfsAutoForm.Hooks.afterInsert
        }
    }
);
// Set a global pseudo helper for strings
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

// Slug formatter
formatSlug = function(value) {
    var formatted = value
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[-]+/g, '-')
        .replace(/[^\w\x80-\xFF-]+/g,'');
    return formatted;
};

// Setup Sub Manager
//adminSubs = new SubsManager();
//adminProducts = new SubsManager();
ap = new SubsManager();
//adminTestimonials = new SubsManager();
//adminSite = new SubsManager();
//adminUsers = new SubsManager();



// client Side collections
PreviousProduct = new Meteor.Collection("previousProduct");
NextProduct = new Meteor.Collection("nextProduct");