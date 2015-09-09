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
        //{
        //    find: function(product) {
        //        return Colors.find({ _id: { $in: product.color } });
        //    }
        //},
        //{
        //    find: function(product) {
        //        return Types.find({ _id: product.type });
        //    }
        //},
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
Meteor.publishComposite("frontAllProductsFilter", function(filter) {
    //console.log(filter.color);
    return {
        find: function() {
            //if(filter){
            //    if(filter.color !== undefined && filter.type !== undefined){
            //        // both filters
            //        console.log("both filters");
            //        return Products.find({active: true, type: { $in: filter.type }, color: {$in: filter.color }});
            //    }
            //    if(filter.color && filter.color !== "" && filter.type === undefined){
            //        // only color filter
            //        console.log("only color: "+ jQuery.toArray(filter.color));
            //        return Products.find({active: true, color: { $in: filter.color }});
            //    }
            //    if(filter.type && filter.color === undefined){
            //        // only type filter
            //        console.log("only type");
            //        return Products.find({active: true, type: { $in: filter.type }});
            //    }
            //}else {
                // no filters
                //console.log("no filters");
                return Products.find({active: true});
            //}




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



