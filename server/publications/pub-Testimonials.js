/**
 * Created by Ryan on 8/24/2015.
 */
Meteor.publish('addTestimonial', function(){
    return Testimonials.find();
});
Meteor.publish('frontTestimonials', function(){
    return Testimonials.find();
});
Meteor.publish('editTestimonial', function(testimonial){
    return Testimonials.find({_id: testimonial});
});