/**
 * Created by Ryan on 8/25/2015.
 */
Template.frontSingleProduct.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        var handle = self.subscribe('frontSingleProduct', FlowRouter.getParam('id'));
        self.ready.set(handle.ready());
    });
});

Template.frontSingleProduct.onRendered(function(){

    Meteor.setTimeout(function(){
        // Run Houzz script
        //return $('input[type=checkbox]').uniform();
        planet_stone.init();
        planet_stone.load();

    },250);
});

Template.frontSingleProduct.helpers({
   'subsReady': function(){
       return Template.instance().ready.get();
   },
    'product': function(){
        return Products.find({});
    },
    'getType': function(){
        return Types.find();
    },
    'getColors': function(){
        return Colors.find();
    },
    getProductImage: function (id) {
        var imageOut = ProductImages.find({ _id: { $in: id }});
        return imageOut;
    },
});