/**
 * Created by Ryan on 8/24/2015.
 */
Template.frontProductsIndex.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        var handle = self.subscribe('frontAllProducts');
        self.ready.set(handle.ready());
    })
});
Template.frontProductsIndex.onRendered(function(){
       Meteor.setTimeout(function() {
            $("#products").isotope({
                itemSelector: '.item',
                layoutMode: 'fitRows',
                getSortData: {
                    name: ".name",
                    type: ".type",
                },
                sortBy: "name",
            });
        }, 5500);
    //});

    // Hide Filter show button
    $('.filter-show').hide(500);





});
Template.frontProductsIndex.helpers({
    getImages: function (id) {
        return ProductImages.find({ _id: { $in: id }});
    },
    'subsReady':function() {

        return Template.instance().ready.get();
    },
    'getColors': function(colors){
        //console.log(JSON.stringify(color));
        var out = "";
        var colorOut = "";
        _.each(colors, function (color) {
            colorOut = Colors.findOne({_id: color}, {fields: {title: 1}});
            out += ", "+colorOut.title;
        });
        return out;
    },
    'product':function(){
        return Products.find();
    },
    'types': function(){
        return Types.find();
    },
    'productColors': function(product){
        //console.log("product "+product);
        return Colors.find({_id: product.color},{fields: {title: 1}});
    },
    'productType':function(id){
        var productType = Types.findOne({_id: id});
        var out = productType.title;
        return out;
    }
});

Template.frontProductsIndex.events({

    'change [type="checkbox"]':function(e){
        var self = $(e.currentTarget);
        //console.log(self.attr("data-filter"));
        $checkboxes = $(".search-filter").find("input[type='checkbox']");
        $checkboxes.change(function(){
            var filters = [];
            // get checked checkboxes values
            $checkboxes.filter(':checked').each(function(){
                filters.push( self.attr("data-filter") );
            });
            // ['.red', '.blue'] -> '.red, .blue'
            filters = filters.join(', ');
            $("#products").isotope({ filter: filters });
        });
    },
    //'load #products':function(e){
        //var self = $(e.currentTarget);
        //self.isotope({
        //    // options
        //    itemSelector: '.item',
        //    layoutMode: 'fitRows',
        //    getSortData: {
        //        name: ".name",
        //        type: ".type",
        //    },
        //    sortBy: "name",
        //
        //    // slow transitions
        //    transitionDuration: '0.45s',
        //    hiddenStyle: {
        //        opacity: 0,
        //        //transform: 'scale(0.5)'
        //    },
        //    visibleStyle: {
        //        opacity: 1,
        //        //transform: 'scale(1)'
        //    }
        //});
        //self.isotope('layout');
        //console.log("grid loaded");
    //},
    'change .sort-select':function(e){
        //console.log("sort-select: "+ e.currentTarget.value);
        var sortValue = e.currentTarget.value;
        $("#products").isotope({ sortBy: sortValue });
    },
    'click .filter-hide':function(e){
        e.preventDefault();
        $('aside.fixed').slideUp(500);
        $('.filter-show').show(500);
        $('.offset').css('margin-top', '0');
    },
    'click .filter-show': function(e){
        e.preventDefault();
        $('aside.fixed').slideDown(500);
        $('.filter-show').hide(500);
        $('.offset').css('margin-top', '197px');
    }
});