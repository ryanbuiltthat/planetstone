/**
 * Created by Ryan on 10/11/2015.
 */
Template.projectcategorycell.helpers({
    prettyCategory: function(cid){
        return Categories.findOne({_id: cid},{fields:{title:1}}).title;
    }
});