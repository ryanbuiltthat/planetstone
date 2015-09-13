/**
 * Created by Ryan on 8/24/2015.
 */
//Meteor.publish('frontAllProducts', function(products){
//    if(products.color != ''){
//        return Products.find({ active: true, color: { $in: products.color }});
//    }
// return Products.find({active: true});
//});
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
    //Meteor.publish('frontAllProductsFilter', function(filter){
    //    if(filter){
    //        if(filter.color !== undefined && filter.type !== undefined){
    //            console.log("both filters");
    //            // need to build this query after I can get a single filter working!
    //        }
    //        if(filter.color && filter.color !== "" && filter.type === undefined){
    //            console.log("only color: "+ filter['color']);
    //            return Products.find({active: true, color: { $in: filter.color }});
    //        }
    //        if(filter.type && filter.color === undefined){
    //            console.log("only type");
    //            return Products.find({active: true, type: { $in: filter.type }});
    //        }
    //    }else{
    //        return Products.find({active: true});
    //    }
    //});
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



