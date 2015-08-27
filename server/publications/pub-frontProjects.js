/**
 * Created by Ryan on 8/25/2015.
 */
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

Meteor.publishComposite("frontProjectsCategory", function(categoryId) {
    return {
        find: function () {
            return Categories.find({ slug: categoryId});
        },
        children: [
            {
                find: function(category) {
                    return Projects.find({ category: category._id });
                },
                children: [
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
                find: function (project) {
                    return Categories.find({_id: project.category});
                }
            },
            {
                find: function (project) {
                    return Products.find({});
                }
            },
            {
                find: function (project) {
                    return ProjectImages.find({});
                }
            }
        ]
    }
});