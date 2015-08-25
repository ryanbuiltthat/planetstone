/**
 * Created by Ryan on 8/17/2015.
 */
Template.nonAuthAdminWrapper.onCreated(function(){
    jQuery('body').removeClass('stickyheader');
    jQuery('body').addClass('signin s-admin');
    var self = this;
    self.autorun(function(){

    });
});


Template.nonAuthAdminWrapper.onRendered(function(){
   // Blaze.remove('defaultAdminLayout');
});