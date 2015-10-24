/**
 * Created by Ryan on 8/9/2015.
 */
Schemas.Project = new SimpleSchema({

    active: {
        type: Boolean,
        autoform: {
            afFieldInput: {
                type: "boolean-checkbox"
            }
        }
    },
    featured: {
        type: Boolean,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "boolean-checkbox"
            }
        }
    },
    assettype: {
        type: String,
        optional: true,
        //blackbox: true
    },
    name:{
        type: String,
        label: "Project Title"
    },
    slug: {
        type: String,
        label: "Slug",
        max: 200,
    },
    asscprod: {
        type: String,
        label: "Associated Products",
        optional: true
    },
    assccolor: {
        type: [String],
        label: "Asssociated Colors",
        optional: true
    },
    category: {
        label: "Category",
        type: String,
        optional: true
    },
    desc: {
        type: String,
        label: "Description",
        autoform: {
            afFieldInput: {
                type: "textarea",
                rows: 8
            }
        },
        max: 5000
    },
    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date};
            } else {
                this.unset();
            }
        }
    },
    updatedAt: {
        type: Date,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    },
    images: {
        type: [String],
        //autoform: {
        //    afFieldInput: {
        //        type: "cfs-files",
        //        collection: "projectimages"
        //    }
        //},
        optional: true
    },
});
Projects.attachSchema(Schemas.Project);

//ProjectImages = new FS.Collection("projectimages", {
//    stores: [
//        new FS.Store.S3("project_fullRes",{
//            bucket: "com.planetstonemarblegranite",
//            accessKeyId:    "AKIAIFERSOLRDWGKQ2PQ",
//            secretAccessKey: "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",
//            folder: "/full",
//            ACL: "public-read"
//        }),
//        new FS.Store.S3("project_menuSize", {
//            bucket: "com.planetstonemarblegranite",
//            accessKeyId:    "AKIAIFERSOLRDWGKQ2PQ",
//            secretAccessKey: "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",
//            folder: "/menuSize",
//            ACL: "public-read",
//            transformWrite: createMenuThumb }),
//        new FS.Store.S3("project_thumbs", {
//            bucket: "com.planetstonemarblegranite",
//            accessKeyId:    "AKIAIFERSOLRDWGKQ2PQ",
//            secretAccessKey: "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",
//            folder: "/thumbs",
//            ACL: "public-read",
//            transformWrite: createThumb }),
//        new FS.Store.S3("project_galleryThumb", {
//            bucket: "com.planetstonemarblegranite",
//            accessKeyId:    "AKIAIFERSOLRDWGKQ2PQ",
//            secretAccessKey: "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",
//            folder: "/galleryThumb",
//            ACL: "public-read",
//            transformWrite: createGalleryThumb })
//    ]
//});
//Meteor.startup(function() {
//    return Meteor.call('config/filesystem/path', function(err, filesPath) {
//        var cfsPath, fileSystemArgs;
//        fileSystemArgs = {};
//        if (filesPath != null) {
//            cfsPath = filesPath + '/cfs';
//            fileSystemArgs.path = cfsPath;
//            console.log('Using ' + cfsPath + ' for cfs directory.');
//        } else {
//            console.log('Using default cfs directory.');
//        }
//        return this.MFiles = new FS.Collection('mfiles', {
//            stores: [new FS.Store.FileSystem('files', fileSystemArgs)]
//        });
//    });
//});
ProjectImages = new FS.Collection("projectimages", {
    stores: [
        thumbStore,
        menuStore,
        galleryStore,
        fullStore
    ]
});
ProjectImages.allow({
    insert: function (userId, doc) {
        if(userId)
            return true;
    },
    update: function (userId, doc, fieldNames, modifier) {
        if(userId)
            return true;
    },
    download: function (userId) {
            return true;
    }
});