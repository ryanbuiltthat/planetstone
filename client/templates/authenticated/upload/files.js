/**
 * Created by Ryan on 10/11/2015.
 */
//Template.files.onCreated( () =>
    //Template.instance().subscribe( 'files' )
//);

Template.files.onRendered(function() {
    // Grab the image publication
    this.subscribe( 'cropUploaderImages' );

    // Hide preview
    this.$('.preview').addClass('hidden');

    // Filemanager calls
    $('.ckbox').each(function (i, v) {
        var t = $(this);
        var parent = t.parent();
        if (t.find('input').is(':checked')) {
            t.show();
            parent.find('.fm-group').show();
            parent.addClass('checked');
        }
    });

    $('#selectall').click(function(){
        if($(this).is(':checked')) {
            $('.thmb').each(function(){
                $(this).find('input').attr('checked',true);
                $(this).addClass('checked');
                $(this).find('.ckbox, .fm-group').show();
            });
            enable_itemopt(true);
        } else {
            $('.thmb').each(function(){
                $(this).find('input').attr('checked',false);
                $(this).removeClass('checked');
                $(this).find('.ckbox, .fm-group').hide();
            });
            enable_itemopt(false);
        }
    });
});

Template.files.helpers({
    images: function() {
        return CropUploader.images.find( {}, { sort: { "created": -1 } } );
    },
    //files() {
    //    //var files = Files.find( {}, { sort: { "created": -1 } } );
    //    var files = CropUploader.images.find( {}, { sort: { "created": -1 } } );
    //    if ( files ) {
    //        return files;
    //    }
    //}
});

Template.files.events({
    'click .ckbox': function(e,tpl){
        var t = $(e.currentTarget);
        if(!t.find('input').is(':checked')) {
            t.find('input').attr('checked',false);
            t.closest('.thmb').removeClass('checked');
            enable_itemopt(false);
        } else {
            t.find('input').attr('checked',true);
            t.closest('.thmb').addClass('checked');
            enable_itemopt(true);
        }
    },
    'mouseenter .thmb': function(e,tpl){
        var t = $(e.currentTarget);
        t.find('.ckbox').show();
        t.find('.fm-group').show();
    },
    'mouseleave .thmb': function(e,tpl){
        var t = $(e.currentTarget);
        if(!t.closest('.thmb').hasClass('checked')) {
            t.find('.ckbox').hide();
            t.find('.fm-group').hide();
        }
    },
    'click .btn-file-delete':function(e,t){
        e.preventDefault();
        if(confirm('Delete this image?'))
        {
            var imageid = t.$(e.target).data('imgid');
            CropUploader.images.remove(imageid);
            // change route away from the image since it no longer exists
        }
    },
    'click .btn-file-edit':function(e){
        e.preventDefault();
        Session.set('imageid', $(e.currentTarget).data('imgid'));
    },
    'click .btn-file-download':function(e){
        e.preventDefault();
    }
});