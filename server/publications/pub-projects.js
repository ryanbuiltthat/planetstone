/**
 * Created by Ryan on 9/6/2015.
 */
Meteor.publishComposite("addProjectView", {
    find: function() {
        return Projects.find({}, {
            sort: { createdAt: -1 }
        });
    },
    children: [
        {
            find: function(product) {
                return Colors.find();
            }
        },
        {
            find: function(product) {
                return Categories.find();
            }
        },
        {
            find: function(product){
                return Products.find();
            }
        },
    //    {
    //        find: function(product){
    //            return ProjectImages.find();
    //        }
    //    }
    ]
});
Meteor.publishComposite("frontProjectsIndex", {
    find: function() {
        // Let's go ahead and find those ten newest articles
        return Projects.find({active: true}, {});
    },
    children: [
        {
            find: function(project) {
                return Categories.find({});
            }
        },
        {
            find: function(project) {
                return Products.find({});
            }
        },
        {
            find: function(project){
                return ProjectImages.find({});
            }
        }
    ]
});

Meteor.publishComposite("frontProjectsCategory", function(categorySlug) {
    return {
        find: function () {
            return Categories.find({ slug: categorySlug});
        },
        children: [
            {
                find: function(category) {
                    return Projects.find({ category: category._id });
                },
                children: [
                    {
                        find: function(project) {
                            return Products.find({ _id: project.asscprod});
                        }
                    },
                    {
                        find: function(project){
                            return ProjectImages.find();
                        }
                    }
                ]
            }
        ]
    }
});
//frontSingleProject
Meteor.publishComposite("frontSingleProject", function(project) {
    return {
        find: function () {
            return Projects.find({ slug: project});
        },
        children: [
            {
                // Get previous project
                collectionName: "previousProject",
                find: function(project){
                    return Projects.find(
                        { createdAt: { $lt: project.createdAt } },
                        { sort: { createdAt: -1 }, limit: 1 });
                },
                children: [
                    {
                        collectionName: "prevcategory",
                        find: function(prevproject){
                            return Categories.find({ _id: prevproject.category})
                        }
                    }
                ]
            },
            {
                // Get next project
                collectionName: "nextProject",
                find: function(project){
                    return Projects.find(
                        { createdAt: { $gt: project.createdAt } },
                        { sort: { createdAt: 1 }, limit: 1 });
                },
                children:[
                    {
                        collectionName: "nextcategory",
                        find: function(nextproject){
                            return Categories.find({ _id: nextproject.category})
                        }
                    }
                ]
            },
            {
                find: function (project) {
                    return Categories.find({_id: project.category});
                }
            },
            {
                find: function (project) {
                    return ProjectImages.find({ _id: { $in: project.images }});
                }
            },
            {
                find: function (project) {
                    return Testimonials.find({ category: { $eq: project.category }});
                }
            }
        ]
    }
});
Meteor.publish('projectTestimonial', function(projectCategoryId){
    return Testimonials.find({ _id: projectCategoryId });
});