/**
 * Created by Ryan on 10/11/2015.
 */
Template.progressBar.helpers({
    progress: function () {
        return Math.round(this.uploader.progress() * 100);
    }
});