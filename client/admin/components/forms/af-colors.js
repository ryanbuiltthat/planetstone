/**
 * Created by Ryan on 11/9/2015.
 */
Template.colorsindex.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        var handle = self.subscribe('colors');
        self.ready.set(handle.ready());
    })
});

Template.colorsindex.helpers({
    subsReady: function(){
        //return Template.instance().ready.get();
        return true;
    },

    colors: function(){
        return Colors.find({},{ fields: { title: 1 }});
    }
});