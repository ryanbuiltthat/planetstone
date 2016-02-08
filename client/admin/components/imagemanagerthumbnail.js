Template.imagemanagerthumbnail.helpers({
    //add you helpers here
});

Template.imagemanagerthumbnail.events({
    'mouseenter .thmb':function(e,t){
        var t = jQuery(e.target);
        t.find('.ckbox').show();
        t.find('.fm-group').show();
    },
    'mouseleave .thmb':function(e,t){
        var t = jQuery(e.target);
        if(!t.closest('.thmb').hasClass('checked')) {
            t.find('.ckbox').hide();
            t.find('.fm-group').hide();
        }
    },
    'click .img-delete-btn':function(event,template){
        var fileObj = Template.parentData(fileObj);
        console.log(template.data);
        //var fileObj = template.data.fileObj;
        if (!fileObj) {
            console.log('no fileObj');
            return false;
        }
        fileObj.remove();
        console.log('fileObj');
        return false;
    }
});

Template.imagemanagerthumbnail.onCreated(function () {
    //add your statement here
});

Template.imagemanagerthumbnail.onRendered(function () {
    jQuery('.ckbox').each(function(){
        var t = jQuery(this);
        var parent = t.parent();
        if(t.find('input').is(':checked')) {
            t.show();
            parent.find('.fm-group').show();
            parent.addClass('checked');
        }
    });
    Helpers = {};

// We expose the properties of Helpers on `FS` globally
    Template.registerHelper('FS', Helpers);

// Usage: {{#with FS.GetFile collectionName id}}{{/with}}
    Helpers.GetFile = function cfsGetFile(collectionName, id) {
        var collection = FS._collections[collectionName];
        return collection ? collection.findOne(id) : null;
    };

});

Template.imagemanagerthumbnail.onDestroyed(function () {
    //add your statement here
});

