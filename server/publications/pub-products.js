/**
 * Created by Ryan on 8/24/2015.
 */
Meteor.publish('products',function(){
    return Products.find({ active: true },{ sort: { createdAt: -1 }, });
});

Meteor.publish('productNotType', function(productId){
    return Types.find({
        _id: { $ne: productId }
    });
});

Meteor.publishComposite("frontAllProducts", {
    find: function() {
        //
        return Products.find({active: true}, {});
    },
    children: [
        {
            find: function(product){
                return ProductImages.find({ _id: { $in: product.images } });
            }
        }
    ]
});
Meteor.publish('productColors', function(){
    return Colors.find();
});
Meteor.publish('productTypes', function(){
    return Types.find();
});
Meteor.publish('frontSingleProductTitle', function(product){
    return Products.find({_id: product});
});
Meteor.publishComposite("singleProduct", function(product) {
    return {
        find: function() {
                return Products.find({ _id: product });
        },
        children: [
            {
                find: function(product) {
                    return Colors.find({ _id: { $in: product.color }});
                }
            },
            {
                find: function(product) {
                    return Types.find({ _id: product.type});
                }
            },
            {
                find: function(product){
                    return ProductImages.find({ _id: { $in: product.images }}, { limit: 1});
                }
            }
        ]
    };
});