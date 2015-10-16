/**
 * Created by Ryan on 9/13/2015.
 */
Template.stoneProductList.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        //var handle = self.subscribe('types');
        //self.ready.set(handle.ready());
    })
});

Template.stoneProductList.helpers({
    'subready': function(){
        return Template.instance().ready.get();
    },
    gettypes: function(){
        return Types.find();
    }
});