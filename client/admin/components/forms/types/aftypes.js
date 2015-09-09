/**
 * Created by Ryan on 8/21/2015.
 */
Template.typesindex.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        var handle = self.subscribe('types');
        self.ready.set(handle.ready());
    })
});
Template.typesindex.helpers({
    subsReady: function(){
        //return Template.instance().ready.get();
        return true;
    },

    types: function(){
        return Types.find({},{ fields: { title: 1 }});
    }
});