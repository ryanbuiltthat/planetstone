/**
 * Created by Ryan on 8/24/2015.
 */
Meteor.publishComposite("frontAllProducts", {
    find: function() {
        // Let's go ahead and find those ten newest articles
        return Products.find({active: true}, {});
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
        {
            find: function(product){
                return ProductImages.find({});
            }
        }
    ]
});