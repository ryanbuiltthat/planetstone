Template.metaedit.helpers({
    //add you helpers here
    page: function(){
        return Meta.findOne({ _id: FlowRouter.getParam("itemId") });
    }
});

Template.metaedit.events({
    //add your events here
});

Template.metaedit.onCreated(function () {
    //add your statement here
    var self = this;
    self.autorun(function(){
        var pageId = FlowRouter.getParam("itemId");
       self.subscribe('page', pageId);
    });
});

Template.metaedit.onRendered(function () {
    //add your statement here
});

Template.metaedit.onDestroyed(function () {
    //add your statement here
});

