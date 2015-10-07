/**
 * Created by Ryan on 8/27/2015.
 */
Template.productIndexGalleryItem.onCreated(function(){
    var self = this;
    self.autorun(function() {
        self.subscribe('productTypes');
        self.subscribe('productColors');
    });
});
Template.productIndexGalleryItem.helpers({
    getFullSrc: function(id){
        var fullResSrc = ProductImages.findOne({ _id: { $in: id } } );
        return fullResSrc.url({store: "fr"});
    },
    getThumbSrc: function(id){
        var fullResSrc = ProductImages.findOne({ _id: { $in: id } } );
        return fullResSrc.url({store: "thmb"});
    },
    getImages: function (id) {
        return ProductImages.findOne({ _id: { $in: id }});
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
    getDisplayColors: function(colors){
        var out = "";
        var colorOut = "";
        _.each(colors, function (color) {
            colorOut = Colors.findOne({_id: color}, {fields: {title: 1}});
            out += ", "+colorOut.title;
        });
        out = out.replace(/^,/, '');
        return out;
    },
    getClassColors: function(colors){
        var out = "";
        var colorOut = "";
        _.each(colors, function (color) {
            colorOut = Colors.findOne({_id: color}, {fields: {title: 1}});
            out += colorOut.title.replace(/ /g,"_")+" ";
        });
        return out;
    },
    getDisplayType:function(id){
        var productType = Types.findOne({_id: id});
        return productType.title;
    },
    getSharePageURL: function(){
        var parent = Template.parentData(1);
        return encodeURIComponent("//planetstone-52463.onmodulus.net//products/");
    },
    getShareImageURL: function(id, name){
        var parent = Template.parentData(1);
        var img = ProductImages.findOne({ _id: id});
        return encodeURIComponent("//planetstone-52463.onmodulus.net/"+img.url({store:"galleryThumb",auth:false}));
    }
});

Template.productIndexGalleryItem.onRendered(function(){
    planet_stone.init();
    //planet_stone.load();
});

Template.productIndexGalleryItem.events({
    'load img.productThumb': function(){
        //
        var il = Session.get('imgLoaded');
        il++;
        Session.set('imgLoaded', il);
    },
    'click':function(e){
        console.log("click");
    }
});