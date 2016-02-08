Template.projectsedit.helpers({
    //add you helpers here
    project: function() {
        var project = Projects.findOne({_id: FlowRouter.getParam('itemId')});
        if(project)
            Template.instance().imgCount.set(project.images.length);
            //Template.instance().createdAt.set(project.createdAt);
        return project;
    },
    colors: function(){
        return Colors.find({}, { fields: { _id: 1, title: 1 }, sort: { name: 1 }}).map(function (c) {
            return {label: c.title, value: c._id};
        });
    },
    getImgCount: function(){
        return 'null';
        //return Template.instance().imgCount.get();
    },
    products: function(){
        return Products.find({active: true},{fields:{_id:1,name:1}, sort: {name: 1 }}).map(function (c) {
            return {label: c.name, value: c._id};
        });
    },
    categories: function() {
        return Categories.find({}, {sort: {name: 1}}).map(function (c){
            return {label: c.title, value: c._id};
        });
    },
    'getimages': function(pics){
        var imgs = ProjectImages.find({ _id: { $in: pics }});
        var imgcount = imgs.count();
        //Template.instance().imgCount.set(imgcount);
        return imgs;
    }//,
    //showUpdate: function(time){
    //    return moment.utc(time).calendar();
    //},
});

Template.projectsedit.events({
    //add your events here
});

Template.projectsedit.onCreated(function () {
    var self = this;
    self.ready = new ReactiveVar();
    self.createdAt = new ReactiveVar();
    self.imgCount = new ReactiveVar();
    self.autorun(function () {
        var handle = self.subscribe('editSingleProject', FlowRouter.getParam('itemId'));
        self.ready.set(handle.ready());
        self.imgCount.set(ProjectImages.find().count());
    });
});

Template.projectsedit.onRendered(function () {
    //add your statement here
});

Template.projectsedit.onDestroyed(function () {
    //add your statement here
});

