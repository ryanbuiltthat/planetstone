/**
 * Created by Ryan on 8/25/2015.
 */
Meteor.publishComposite("frontProjectsIndex", {
    find: function() {
        // Let's go ahead and find those ten newest articles
        return Projects.find({active: true}, {});
    },
    children: [
        //{
        //    find: function(product) {
        //        return Colors.find({});
        //    }
        //},
        //{
        //    find: function(product) {
        //        return Types.find({});
        //    }
        //},
        //{
        //    find: function(product){
        //        return ProductImages.find({});
        //    }
        //}
    ]
});