/**
 * Created by Ryan on 10/14/2015.
 */
Meteor.publishComposite("featuredSlider", {
    find: function() {
        return Projects.find({ featured: true }, {
            sort: { createdAt: -1 }
        });
    },
    children: [
        {
            find: function(product) {
                return Products.find({ featured: true }, {
                    sort: { createdAt: -1 }
                });
            }
        },
        {
            find: function(product) {
                return Categories.find();
            }
        },
        {
            find: function(product){
                return Colors.find();
            }
        },
        {
            find: function(product){
                return Types.find();
            }
        },
        {
            find: function(product){
                return ProjectImages.find();
            }
        },
        {
            find: function(product){
                return ProductImages.find();
            }
        },
    ]
});