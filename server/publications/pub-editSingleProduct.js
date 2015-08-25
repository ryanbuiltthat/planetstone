/**
 * Created by Ryan on 8/22/2015.
 */
Meteor.publishComposite("editSingleProduct", function(id){
    return {
        find: function () {
            // Let's go ahead and find those ten newest articles
            return Products.find({_id: id}, {});
        },
        children: [
            {
                collectionName: "previousProduct",
                find: function(product){
                    return Products.find({ createdAt: { $lt: product.createdAt } }, {sort: {createdAt: -1}, limit: 1});
                }
            },
            {
                collectionName: "nextProduct",
                find: function(product){
                    return Products.find({ createdAt: { $gt: product.createdAt } }, {sort: {createdAt: 1}, limit: 1});
                }
            },
            {
                find: function (product) {
                    return Colors.find({_id: {$in: product.color}});
                    //return Colors.find();
                }
            },
            {
                find: function (product) {
                    return Types.find({ _id: product.type  } );
                    //return Types.find();
                }
            },
            {
                find: function(product){
                    return ProductImages.find({_id: {$in: product.images} });
                }
            }
        ]
    };
});