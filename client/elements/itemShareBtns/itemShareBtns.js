/**
 * Created by Ryan on 8/25/2015.
 */
Template.itemShareBtns.onCreated(function(){
    //var self = this;
    //Template.instance().prodId = new ReactiveVar();
    //Template.instance().prodId.set(this.toString());
    //self.autorun(function(){
    //    var handle = self.subscribe('frontSingleProduct', this.toString());
    //    self.ready.set(handle.ready());
    //});
});

Template.itemShareBtns.onRendered(function(){

});

Template.itemShareBtns.helpers({
   // 'product': function(){
   //     var item = this.toString();
   //     var cursor = Products.findOne({ _id: item });
   //     //console.log(cursor);
   //   return cursor;
   // },
   //'itemImage': function(imageIds){
   //
   //}
    parent: function(){
        var data = Template.parentData(1);
    }
});