/**
 * Created by Ryan on 9/12/2015.
 */
Template.associatedProduct.onCreated(function(){
    var data = this.data;
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        var handle = self.subscribe('singleProduct', data);
        self.ready.set(handle.ready());
    });
});

Template.associatedProduct.helpers({
    subReady: function(){
        return Template.instance().ready.get();
    },
    product: function(){
        return Products.findOne({ _id: Template.instance().data });
    },
    productThumb: function(imgs){
        return ProductImages.find({ _id: { $in: imgs }})
    },
    getParentName: function(){
        var parent = Template.parentData(1);
        return parent.name;
    },
    getParentType: function(){
        var parent = Template.parentData(1);
        var material = Types.findOne({ _id: parent.type });
        return material.title;
    },
    getType: function(typeId){
        var out = Types.findOne({_id: typeId});
        return out.title;
    },
    getProductColors: function(colors){
        return Colors.find({ _id: { $in: colors } });
    },
    parentId:function(){
        var data = Template.parentData(1);
        return data._id;
    }
});

Template.associatedProduct.events({
    'click figure':function(e,t){
        console.log(t);
        var data = t.data;
        var self = e.currentTarget;
        $(self).lightGallery({
           dynamic: true,
            dynamicEl: [{
                src: $("#"+data).data("src")
            }]
        });
    }
});