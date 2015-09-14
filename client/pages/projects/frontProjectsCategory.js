/**
 * Created by Ryan on 8/25/2015.
 */
Template.frontProjectsCategory.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        var handle = self.subscribe('frontProjectsCategory', FlowRouter.getParam('category'));
        self.ready.set(handle.ready());
    })
});
Template.frontProjectsCategory.onRendered(function(){
    // Need to set a small delay for sub to init
    Meteor.setTimeout(function(){
        // Run Houzz script
        //return $('input[type=checkbox]').uniform();
        planet_stone.init();
        planet_stone.load();

    },600);

    // Isotope
    Meteor.setTimeout(function() {
        //$("#projects").isotope({
        //    itemSelector: '.item',
        //    layoutMode: 'fitRows',
        //    getSortData: {
        //        name: ".name",
        //        type: ".type",
        //    },
        //    sortBy: "name",
        //});
    }, 1000);
});
Template.frontProjectsCategory.helpers({
    'subsReady': function(){
        return Template.instance().ready.get();
    },
    'project':function(){
        return Projects.find({ active: true });
    },
    getImages: function (id) {
        return ProjectImages.find({ _id: { $in: id }}, { limit: 1 });
    },
    'getTitle':function(){
        var parent = Template.parentData(1);
        return parent.name;
    },
    'getDesc': function(){
        var parent = Template.parentData(1);
        return parent.desc;
    },
    'getId': function(){
        var parent = Template.parentData(1);
        return parent._id;
    },
    'getDisplayCategory':function(id){
        var projectCategory = Categories.findOne({_id: id});
        return projectCategory.title;
    },
    'getDisplayCategorySlug':function(id){
        var projectCategorySlug = Categories.findOne({_id: id});
        return projectCategorySlug.slug;

    },
    'getDisplayProducts': function(product){
        var out = Products.findOne({_id: product});
        return '<a href="/products">'+out.name+'</a>';
    },
    'getSharePageURL': function(){
        var parent = Template.parentData(1);
        return encodeURIComponent("//planetstone-50636.onmodulus.net/projects/"+parent._id);
    },
    'getShareImageURL': function(id, name){
        var parent = Template.parentData(1);
        var img = ProjectImages.findOne({ _id: id});
        return encodeURIComponent("//planetstone-50636.onmodulus.net"+img.url({store:"galleryThumb",auth:false}));
    },
    'shortText': function(txt){
        return s.truncate(txt, 200);
    }
});
Template.frontProjectsCategory.events({});