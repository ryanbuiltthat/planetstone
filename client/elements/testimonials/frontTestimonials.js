/**
 * Created by Ryan on 8/25/2015.
 */



Template.frontTestimonials.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        var handle = self.subscribe('frontTestimonials');
        self.ready.set(handle.ready());
    })
});

Template.frontTestimonials.onRendered(function(){
    // Testimonial rotator
    Meteor.setTimeout(function(){
    $( '#cbp-qtrotator' ).cbpQTRotator();
    }, 3200);
});
Template.frontTestimonials.helpers({
    'subsReady': function(){
        return Template.instance().ready.get();
    },
    'testimonial': function(){
        return Testimonials.find({});
    }
});