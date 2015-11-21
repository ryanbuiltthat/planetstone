/**
 * Created by Ryan on 8/22/2015.
 */
Template.projectsadd.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        var handle = self.subscribe('addProjectView');
        //self.subscribe('colors');
        //self.subscribe('cats');
        //self.subscribe('pros');
        self.ready.set(handle.ready());
    })
});
Template.projectsadd.helpers({
    subsReady: function(){
      return Template.instance().ready.get();
    },
    projects: function(){
        return Projects.find({});
    },
    colors: function(){
        return Colors.find({}, { fields: { _id: 1, title: 1 }, sort: { name: 1 }}).map(function (c) {
            return {label: c.title, value: c._id};
        });
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
    //images: function () {
    //    return ProjectImages.find(); // Where Images is an FS.Collection instance
    //}
});

Template.projectsadd.events({
    'keyup [name="name"]': function() {
        var form  = $("#addProjectForm"),
            title = form.find("[name='name']"),
            slug  = form.find("[name='slug']");
        var formatted = formatSlug(title.val());
        slug.val(formatted);
    }
});