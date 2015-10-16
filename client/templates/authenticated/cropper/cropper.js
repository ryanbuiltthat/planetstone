/**
 * Created by Ryan on 10/11/2015.
 */
Template.cropper.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function () {
        var handle = self.subscribe('cropUploaderImages', {_id: Session.get('imageid')});
        self.ready.set(handle.ready());
    });
});
Template.cropper.helpers({
    imageid: function() {
        return Session.get('imageid');
    },
    url: function() {
        return CropUploader.images.findOne(Session.get('imageid')).url;
    },
    getOpts: function(){
        return {
            aspectRatio: 4 / 3,
            resizable: true,
            rotatable: true,
            wheelZoomRatio: 0.0375,
            minContainerWidth: 640,
            minContainerHeight: 480
        }
    }
});
Template.cropper.events({
    'click .delete': function(e,t) {
        if(confirm('Delete this image?'))
        {
            var imageid = t.$(e.target).attr('imageid');
            CropUploader.images.remove(imageid);
            // change route away from the image since it no longer exists
        }
    },
    'click .save': function(e,t) {
        // provide the name of the derivative, thumbnail is the default
        CropUploader.crop.save('menu');
    },
    'click .reset': function(e,t){
        CropUploader.crop.reset();
    },
    'click .rotate': function(e,t) {
        CropUploader.crop.rotate();
    }
});