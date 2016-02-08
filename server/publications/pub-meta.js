/**
 * Created by Ryan on 11/19/2015.
 */
Meteor.publish('pages', function(){
   return Meta.find();
});

Meteor.publish('page', function(pageId){
   return Meta.find({ _id: pageId });
});

Meteor.publish('metas', function(){
   return Meta.find();
});

Meteor.publish('pagebyslug', function(pageSlug){
   return Meta.find({ "pages.slug": pageSlug });
});