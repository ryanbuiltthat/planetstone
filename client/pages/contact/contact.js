Template.contact.helpers({
    //add you helpers here
});

Template.contact.events({
    //add your events here
});

Template.contact.onCreated(function () {
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

Template.contact.onRendered(function () {
    //add your statement here
});

Template.contact.onDestroyed(function () {
    //add your statement here
});

