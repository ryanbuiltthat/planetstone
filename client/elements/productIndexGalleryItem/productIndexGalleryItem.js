/**
 * Created by Ryan on 8/27/2015.
 */
Template.productIndexGalleryItem.onCreated(function(){

});
Template.productIndexGalleryItem.helpers({
    getFullSrc: function(id){
        var fullResSrc = ProductImages.findOne({ _id: { $in: id } } );
        var s3Url = "https://s3.amazonaws.com/com.planetstonemarblegranite/full/productimages/"+fullResSrc._id+"-"+fullResSrc.original.name;
        return s3Url;
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
        return encodeURIComponent("http://planet.betabuild.io/products/"+parent._id);
    },
    getShareImageURL: function(id, name){
        var parent = Template.parentData(1);
        return encodeURIComponent("https://s3.amazonaws.com/com.planetstonemarblegranite/full/productimages/"+id+"-"+name);
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
    }
});