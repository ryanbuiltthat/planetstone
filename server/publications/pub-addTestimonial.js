/**
 * Created by Ryan on 8/24/2015.
 */
Meteor.publish('addTestimonial', function(){
    return Testimonials.find();
});