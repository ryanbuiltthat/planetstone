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
        $("#projects").isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows',
            getSortData: {
                name: ".name",
                type: ".type",
            },
            sortBy: "name",
        });
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
    'getDisplayProducts': function(products){
        var out = "";
        var productOut = "";
        _.each(products, function (product) {
            productOut = Products.findOne({_id: product});
            out += ', '+'<a href="/products/'+productOut._id+'">'+productOut.name+'</a>'
        });
        out = out.replace(/^,/, '');
        return out;
    },
    'getSharePageURL': function(){
        var parent = Template.parentData(1);
        return encodeURIComponent("http://planet.betabuild.io/projects/"+parent._id);
    },
    'getShareImageURL': function(id, name){
        var parent = Template.parentData(1);
        return encodeURIComponent("https://s3.amazonaws.com/com.planetstonemarblegranite/full/projectimages/"+id+"-"+name);
    },
    'shortText': function(txt){
        return s.truncate(txt, 250);
    }
});
Template.frontProjectsCategory.events({});