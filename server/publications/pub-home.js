/**
 * Created by Ryan on 10/15/2015.
 */
Meteor.publishComposite("featuredSlider", {
    collectionName: "featured",
    find: function(){
        return Projects.find({
            active: true,
            featured: true }, {
            sort: { createdAt: -1 },
            limit: 2
        });
    },
    children: [
        {
            find: function(project){
                return Categories.find({ _id: project.category });
            }
        },
        {
            find: function(project){
                return Products.find({ _id: project.asscprod });
            },
            children: [
                {
                    find: function(product){
                        return ProductImages.find({ _id: { $in: product.images } }, { limit: 1});
                    }
                }
            ]
        },
        {
            find: function(project){
                return ProjectImages.find({
                    _id: { $in: project.images }
                },{
                    limit: 1
                });
            }
        },
        {
            collectionName: "featured",
            find: function(){
                return Products.find({
                    active: true,
                    featured: true },{
                    sort: { createdAt: -1 },
                    limit: 2
                });
            },
            children: [
                {
                    find: function(product){
                        return Colors.find({
                            _id: { $in: product.color }
                        });
                    }
                },
                {
                    find: function(product){
                        return Types.find({
                            _id: product.type
                        });
                    }
                },
                {
                    find: function(product){
                        return ProductImages.find(
                        {
                            _id: {
                                $in: product.images
                            }
                        },
                        {
                            limit: 1
                       });
                    }
                }
            ]
        }

    ]
});