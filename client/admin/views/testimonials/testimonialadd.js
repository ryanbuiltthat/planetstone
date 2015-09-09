/**
 * Created by Ryan on 8/24/2015.
 */
Template.testimonialsadd.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        //var handle = self.subscribe('addTestimonial');
        //self.subscribe('cats');
        //self.ready.set(handle.ready());
    })
});
Template.testimonialsadd.onRendered(function(){

});
Template.testimonialsadd.helpers({
   subsReady: function(){
        //return Template.instance().ready.get();
   },
    pullCategories: function() {
        return Categories.find({}).map(function (c){
            return {label: c.title, value: c._id};
        });
    }
});