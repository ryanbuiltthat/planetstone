/**
 * Created by Ryan on 8/27/2015.
 */
Template.frontSingleProject.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        var handle = self.subscribe('frontSingleProject', FlowRouter.getParam('projectSlug'));
        self.ready.set(handle.ready());

    })
});
Template.frontSingleProject.onRendered(function(){
    Meteor.setTimeout(function(){
        $("#gallery").lightGallery();
        (function(d,s,id){if(!d.getElementById(id)){var js=d.createElement(s);js.id=id;js.async=true;js.src="//platform.houzz.com/js/widgets.js?"+(new Date().getTime());var ss=d.getElementsByTagName(s)[0];ss.parentNode.insertBefore(js,ss);}})(document,"script","houzzwidget-js");
        // Init base scripts
        planet_stone.init();
        planet_stone.load();
    }, 850);
});
Template.frontSingleProject.helpers({
    'subsReady': function(){
        return Template.instance().ready.get();
    },
    'project': function() {
        return Projects.find();
    },
    'projectImage': function(pics){
        return ProjectImages.find({ _id: { $in: pics }});
    },
    getTitle:function(){
        var parent = Template.parentData(1);
        return parent.name;
    },
    getDesc: function(){
        var parent = Template.parentData(1);
        return parent.desc;
    },
    getId: function(){
        var parent = Template.parentData(1);
        return parent._id;
    },
    getSharePageURL: function(){
        var parent = Template.parentData(1);
        return encodeURIComponent("http://planet.betabuild.io/projects/"+parent.slug);
    },
    getShareImageURL: function(id, name){
        var parent = Template.parentData(1);
        return encodeURIComponent("https://s3.amazonaws.com/com.planetstonemarblegranite/full/projectimages/"+id+"-"+name);
    },
    getAssociatedProduct: function(id){
        console.log("asscprodid: "+id);
        Template.instance().subscribe('frontSingleProductTitle', id);
        if(id && id!=="undefined") {
            return Products.findOne({_id: {$in: id}});
        }else {
            return false;
        }
    }
});

Template.frontSingleProject.events({
    'click a':function(e,t){
        //e.preventDefault();
    }
});