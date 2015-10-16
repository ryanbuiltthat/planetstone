/**
 * Created by Ryan on 8/13/2015.
 */

// Set BlazeLayout root to body
BlazeLayout.setRoot('body');

//filters = {};
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
ProductsSub = new SubsManager();
//adminSite = new SubsManager();
//adminUsers = new SubsManager();

// FB sdk
if(Meteor.isClient) {
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '1480455812257733',
            status     : true,
            version    : 'v2.4',
            xfbml      : true
        });
    };
}


// client Side collections
PreviousProject = new Meteor.Collection("previousProject");
NextProject = new Meteor.Collection("nextProject");
PrevCategory = new Meteor.Collection("prevcategory");
NextCategory = new Meteor.Collection("nextcategory");
