/**
 * Created by Ryan on 10/6/2015.
 */
Template.infoModal.onRendered(function(){
    $('#infoModal').on('shown', function() {
        $(document).off('focusin.modal');
    });
});