Template.aboutus.helpers({
    //add you helpers here
});

Template.aboutus.events({
    //add your events here
});

Template.aboutus.onCreated(function () {
    //add your statement here

    var self = this;
    self.ready = new ReactiveVar();
    var cp = new ReactiveVar();
    var routePath = FlowRouter.current().path.substring(1);
    self.autorun(function(){
        var handle = self.subscribe('pagebyslug', routePath);
        self.ready.set(handle.ready());
        if(handle.ready()){
            cp = Meta.findOne({ "pages.slug": routePath});
            var metaInfo = {name: "description", content: cp.pages.desc};
            DocHead.setTitle(cp.pages.title + " - Planet Stone Marble & Granite");
            DocHead.addMeta(metaInfo);
        }
    });
});

Template.aboutus.onRendered(function () {
    //add your statement here

});

Template.aboutus.onDestroyed(function () {
    //add your statement here
});

