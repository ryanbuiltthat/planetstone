/**
 * Created by Ryan on 8/24/2015.
 */
Meteor.publishComposite("frontAllProducts", {
    find: function() {
        //
        return Products.find({active: true}, {});
    },
    children: [
        {
            find: function(product) {
                return Colors.find({ _id: { $in: product.color } });
            }
        },
        {
            find: function(product) {
                return Types.find({ _id: product.type });
            }
        },
        {
            find: function(product){
                return ProductImages.find({ _id: { $in: product.images } });
            }
        }
    ]
});

Meteor.publish('frontSingleProductTitle', function(product){
    return Products.find({_id: product});
});

//Meteor.publishComposite("frontAllProducts", function(filters) {
//    return {
//        find: function() {
//            return Products.find();
//        },
//        children: [
//            //{
//            //    collectionName: "previousProduct",
//            //    find: function(product){
//            //        return Products.find({ createdAt: { $lt: product.createdAt } }, {sort: {createdAt: -1}, limit: 1});
//            //    }
//            //},
//            //{
//            //    collectionName: "nextProduct",
//            //    find: function(product){
//            //        return Products.find({ createdAt: { $gt: product.createdAt } }, {sort: {createdAt: 1}, limit: 1});
//            //    }
//            //},
//            {
//                find: function(product) {
//                    return Colors.find({ _id: { $in: product.color }});
//                }
//            },
//            {
//                find: function(product) {
//                    return Types.find({ _id: product.type});
//                }
//            },
//            {
//                find: function(product){
//                    return ProductImages.find({ _id: { $in: product.images }}, { limit: 1});
//                }
//            }
//        ]
//    };
//});



