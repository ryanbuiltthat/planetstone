/**
 * Created by Ryan on 9/12/2015.
 */
Template.testimonialTpl.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        var handle = self.subscribe('testimonials');
        self.ready.set(handle.ready());
    })
});

Template.testimonialTpl.onRendered(function(){

    Meteor.setTimeout(function(){
    $('.content .tab-content').hide().first().show();
    $('.content .tabs li:first').addClass('current');

    $('.content .tabs a').on('click', function (e) {
        e.preventDefault();
        $(this).closest('li').addClass('current').siblings().removeClass('current');
        $($(this).attr('href')).show().siblings('.tab-content').hide();
    });

    var hash = $.trim( window.location.hash );
    if (hash) $('.content .tabs a[href$="'+hash+'"]').trigger('click');
    },800);
});

Template.testimonialTpl.helpers({
   subsready: function(){
       return Template.instance().ready.get();
   },
    quote:function(catId){
        //console.log(Testimonials.find());
        var catArr=[];
        catArr.push(catId);
        return Testimonials.find({ category: {$in:catArr}}) || {};
    },
    categories: function(){
        //console.log(Categories.find());
        return Categories.find();
    }
});