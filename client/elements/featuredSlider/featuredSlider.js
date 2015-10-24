/**
 * Created by Ryan on 10/15/2015.
 */
Template.featuredSlider.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        var handle = subFeaturedSlider.subscribe('featuredSlider');
        self.ready.set(handle.ready());
    })
});

Template.featuredSlider.onRendered(function(){
    // featured slider
    Meteor.setTimeout(function(){

    }, 850);
});

Template.featuredSlider.helpers({
    subsready: function(){
        return Template.instance().ready.get();
    },
    getfeatured: function(){
        //console.log(Featured.findOne({}));
        return Featured.find();
    },
    getlink: function(){
        var data = Template.currentData();
        if(data.category){
            var category = Categories.findOne({_id:data.category}).slug;
            //if we have a category
            return '/'+data.assettype+'s/'+category+'/'+data.slug;
        }else {
            // no category
            return '/'+data.assettype+'s/';
        }
    },
    getproductname: function(pid){
        return Products.findOne({_id:pid}).name;
    },
    getimageurl: function(iid, collection){
        var data = Template.currentData();
        var col = 'cfs.'+data.assettype+'images.filerecord';
        var img =  Mongo.Collection.get(col).findOne({_id:{$in:iid}},{limit:1});
        return img;
    }
});

Template.featuredSlider.events({
   'load img':function(){

   }
});