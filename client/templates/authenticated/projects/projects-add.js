/**
 * Created by Ryan on 10/11/2015.
 */
Template.projectsadd.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function () {
        var assetType = FlowRouter.getParam('group');
        var handle = self.subscribe(assetType);
        self.ready.set(handle.ready());
    });
});
Template.projectsadd.onRendered(function(){
    // Init Toggles
    $('.toggle').toggles({
        on: true,
        checkbox: $('.toggle-active')
    });

    // Init Select2
    $(".select2").select2({
        width: '100%'
    });


});

Template.projectsadd.nba = function(){
    console.log(Tags.find().fetch().map(function(it){ return it.name; }));
};

Template.projectsadd.helpers({
    getCategories: function(){
        return Categories.find({},{ sort: {title: 1} });
    },
    getProducts: function(){
       return Products.find({},{ sort: {name: 1}});
    }
});
Template.projectsadd.events({
    'submit #addProjectsForm': function(e,t){
        e.preventDefault();
    },
    'click .btn-reset':function(e){
        e.preventDefault();
        return ErminiNotify.add("title", "test example");
    }
});