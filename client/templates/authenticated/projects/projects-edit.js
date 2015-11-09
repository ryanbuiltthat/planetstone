/**
 * Created by Ryan on 11/5/2015.
 */
Template.projectsedit.onCreated(function(){
    var self = this;
    self.autorun(function() {
        var postId = FlowRouter.getParam('assetId');
        self.subscribe('project', postId);
    });
});
Template.projectsedit.onRendered(function(){

    // Get Select2 up and running....
    var self = this;

    self.autorun(function(){
        var products = Session.get('productList');
        var d = [];
        _.each(products, function(product){
            var p = {};
            //console.log(product._id);
            p.id = product._id;
            p.text = product.name;
            d.push(p);
        });

        $(".select2").select2({
            data: d
        });


    });

    //var dd = this.$.find(".select2");
    //console.log(d);
    //if(d.length>0){
    //    Meteor.setTimeout(function(){
    //        $(".select2").select2({
    //            data: Session.get('productList')
    //        });
    //    }, 550);
    //
    //}



});
Template.projectsedit.events({
    'blur input': function(e,t){
        var doc = {};
        doc.id = FlowRouter.getParam('assetId');
        doc.k = e.target.name;
        doc.v = e.target.value;
        Meteor.call('updateProject', doc, function(error,result){
            if(error){
                Bert.alert(error.message, "warning");
            }else {
                // success
                $('.panel-title').append('<span class="label label-success" style="margin:2em;">Saving</span>').fadeIn(200, function(){
                   $('.panel-title .label').delay(1000).fadeOut(200);
                });
            }
        });
    }
});
Template.projectsedit.helpers({
    project: function(){
        return Projects.findOne( { _id: FlowRouter.getParam('assetId') } );
    },
    getProductList: function(){
        var products = Products.find({},{fields:{_id:1,name:1}});
        var t = products.fetch();
        return Session.set('productList', t);
    },
    getProductName: function(productId){
        var product = Products.findOne( { _id: productId });
        return product.name;
    }
});