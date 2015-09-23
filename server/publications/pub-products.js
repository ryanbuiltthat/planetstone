/**
 * Created by Ryan on 8/24/2015.
 */
Meteor.publish('products',function(){
    return Products.find({ active: true },{ sort: { createdAt: -1 }, });
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

Meteor.publish("productsplit",function(){
    self = this;
    prods = Products.aggregate(
        [
            {$project: {color: 1, name: 1, type: 1}},
            { $unwind : "$color" },
            //{ $out: "splitproducts" }
            //{$group: {_id: {email: "$invites.email"}}},
            //{$project: {email: "$_id.email"}}
        ])
    _(prods).each(function(product) {
        if (product.color) {
            //if (!SplitProducts.findOne({color: product.color},{})) {
                self.added('splitproducts', Random.id(), {productId: product._id, name: product.name, color: product.color, type: product.type});
            //}
        }
    });
});


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
