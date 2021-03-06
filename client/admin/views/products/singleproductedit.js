/**
 * Created by Ryan on 8/22/2015.
 */
Template.singleproductedit.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.createdAt = new ReactiveVar();
    self.autorun(function () {
        var handle = self.subscribe('editSingleProduct', FlowRouter.getParam('itemId'));
        self.ready.set(handle.ready());
    });
});

Template.singleproductedit.helpers({
    subReady: function(){
        return Template.instance().ready.get();
    },
    product: function() {
        var product = Products.findOne({_id: FlowRouter.getParam('itemId')});
        if(product)
            Template.instance().createdAt.set(product.createdAt);
        return product;
    },
    getColors: function(id){
        var color = Colors.find({_id: {$in: id }});
        return color;
    },
    getType: function(id){
        var postId = id;
            var post = Types.findOne({_id: postId});
            return post.title;
    },
    getImages: function (id) {
        return ProductImages.find({ _id: { $in: id }});
    },
    showUpdate: function(time){
        return moment.utc(time).calendar();
    },
    prev: function(){
        return PreviousProduct.findOne({ createdAt: { $lt: Template.instance().createdAt.get() } }, {sort: {createdAt: -1}, limit: 1});
    },
    nxt: function(){
        return NextProduct.findOne({ createdAt: { $gt: Template.instance().createdAt.get() } }, {sort: {createdAt: 1}, limit: 1});
    },
    getPrevNxtURL: function(id){
        var params = { category: FlowRouter.getParam('category'), itemId: id};
        var path  = FlowRouter.path("edits", params);
        return path;
    }
});