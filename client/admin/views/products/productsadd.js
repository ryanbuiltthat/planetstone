/**
 * Created by Ryan on 8/16/2015.
 */
Template.productsadd.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.colorCount = new ReactiveVar();
    self.colorCount.set(-1);
    self.autorun(function(){
        var handle = self.subscribe('allAdmin');
        self.ready.set(handle.ready());
    })


});
Template.productsadd.helpers({
    subsReady: function(){
        return Template.instance().ready.get();
    },
    colors: function(){
        //return Colors.find().map(function (c) {
        //    return {label: c.title, value: c._id};
        //});
    },
    types: function(){
        //return Types.find().map(function (c) {
        //    return {label: c.title, value: c._id};
        //});
    },
    colorCount:function(){
        //var x = Template.instance().colorCount.get();
        //return (x+1);
    }
});
Template.productsadd.events({
    'keyup [name="name"]': function() {
        var form  = $("#addProductForm"),
            title = form.find("[name='name']"),
            slug  = form.find("[name='slug']");
       // var isValid = title.valid();
       // if (isValid) {
            var formatted = formatSlug(title.val());
            slug.val(formatted);
        //} else {
           // slug.val("");
       // }
    },
});