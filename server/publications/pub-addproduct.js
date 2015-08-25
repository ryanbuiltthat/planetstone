/**
 * Created by Ryan on 8/21/2015.
 */
Meteor.publishComposite("addProduct", {
    find: function() {
        // Let's go ahead and find those ten newest articles
        return Products.find({}, {});
    },
    children: [
        {
            find: function(product) {
                return Colors.find({});
            }
        },
        {
            find: function(product) {
                return Types.find({});
            }
        },
    ]
});