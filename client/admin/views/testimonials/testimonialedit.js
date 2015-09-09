/**
 * Created by Ryan on 9/9/2015.
 */
Template.testimonialedit.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.createdAt = new ReactiveVar();
    self.autorun(function () {
        var handle = self.subscribe('editTestimonial', FlowRouter.getParam('itemId'));
        self.ready.set(handle.ready());
    });
});
Template.testimonialedit.helpers({
    subReady: function(){
        return Template.instance().ready.get();
    },
    pullCategories: function(){
        return Categories.find({}, { fields: { _id: 1, title: 1 }}).map(function (c) {
            return {label: c.title, value: c._id};
        });
    },
    testimonial: function(){
        return Testimonials.findOne({_id: FlowRouter.getParam('itemId')});
    }
});