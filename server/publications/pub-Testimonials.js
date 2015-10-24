/**
 * Created by Ryan on 8/24/2015.
 */
Meteor.publish('addTestimonial', function(){
    return Testimonials.find(
        {},
        {
            $sort: { createdAt: -1 }
        });
});
Meteor.publish('frontTestimonials', function(){
    return Testimonials.find({},
        {
            sort: { createdAt: -1 }
        });
});
Meteor.publish('editTestimonial', function(testimonial){
    return Testimonials.find({_id: testimonial}, {sort: {createdAt: -1}});
});

Meteor.publishComposite("testimonials", function() {
    return {
        find: function () {
            return Testimonials.find({},{sort:{createdAt: -1}});
        },
        children: [
            {
                find: function (quote) {
                    return Categories.find({_id: {$in:quote.category}});
                }
            },
        ]
    }
});