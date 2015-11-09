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
       return Products.find({ active: true },{ sort: {name: 1}});
    }
});
Template.projectsadd.events({
    'submit #addProjectsForm': function(e,t){
        e.preventDefault();
        // #addProjectsForm
        var act = (e.target.active.value === "true");
        var doc = {
            name: e.target.name.value,
            desc: e.target.desc.value,
            slug: e.target.slug.value,
            category: e.target.category.value,
            asscprod: e.target.asscprod.value,
            createdAt: new Date(),
            active: act
        };
        Meteor.call( "addProject", doc, ( error, response ) => {
            if ( error ) {
                Bert.alert( error.reason, "warning" );
            }else {
                e.target.name.value = "";
                e.target.desc.value = "";
                e.target.slug.value = "";
                return ErminiNotify.add("Project Add", "Item was added successfully");
                //console.log(response);
            }
        });

    },
    'click .btn-reset':function(e){
        e.preventDefault();
        //return ErminiNotify.add("title", "test example");
    },
    'keyup [name="name"]': function() {
        var form  = $("#addProjectsForm"),
            title = form.find("[name='name']"),
            slug  = form.find("[name='slug']");
        var formatted = formatSlug(title.val());
        slug.val(formatted);
    }
});