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
    // TABS
    //$('.content .tab-content').hide().first().show();
    //$('.content .tabs li:first').addClass('current');
    //
    //$('.content .tabs a').on('click', function(e) {
    //    e.preventDefault();
    //    $(this).closest('li').addClass('current').siblings().removeClass('current');
    //    $($(this).attr('href')).show().siblings('.tab-content').hide();
    //});
    //
    //var hash = $.trim(window.location.hash);
    //if (hash) $('.content .tabs a[href$="' + hash + '"]').trigger('click');
    planet_stone.init();
    planet_stone.load();
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