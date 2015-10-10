/**
 * Created by Ryan on 8/24/2015.
 */
Meteor.publish('frontTestimonials', function(){
    return Testimonials.find();
});
Meteor.publishComposite("testimonials", function() {
    return {
        find: function () {
            return Testimonials.find();
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