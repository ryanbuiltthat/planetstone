/**
 * Created by Ryan on 8/24/2015.
 */
Template.frontProductsIndex.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        var handle = self.subscribe('frontAllProducts');
        self.ready.set(handle.ready());
    });
});
Template.frontProductsIndex.onRendered(function(){

    // Need to set a small delay for sub to init
    Meteor.setTimeout(function(){
        // Run Houzz script
        //return $('input[type=checkbox]').uniform();
        planet_stone.init();
        planet_stone.load();

    },600);

    // Isotope
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
        }, 2500);

    // Style select
    //this.$('select').uniform();

    // Hide Filter show button
    $('.filter-show').hide(500);

    // Get the effects running
    new WOW().init();


});
Template.frontProductsIndex.helpers({
    getImages: function (id) {
        var imageOut = ProductImages.find({ _id: { $in: id }});
        return imageOut;
    },
    'subsReady':function() {
        return Template.instance().ready.get();
    },
    'getTitle':function(){
        var parent = Template.parentData(1);
        return parent.name;
    },
    'getDesc': function(){
        var parent = Template.parentData(1);
        return parent.desc;
    },
    'getId': function(){
      var parent = Template.parentData(1);
        return parent._id;
    },
    'getDisplayColors': function(colors){
        var out = "";
        var colorOut = "";
        _.each(colors, function (color) {
            colorOut = Colors.findOne({_id: color}, {fields: {title: 1}});
            out += ", "+colorOut.title;
        });
        out = out.replace(/^,/, '');
        return out;
    },
    getClassColors: function(colors){
        var out = "";
        var colorOut = "";
        _.each(colors, function (color) {
            colorOut = Colors.findOne({_id: color}, {fields: {title: 1}});
            out += colorOut.title.replace(/ /g,"_")+" ";
        });
        //out = out.replace(/^,/, '');
        return out;
    },
    'product':function(){
        return Products.find();
    },
    'filterTypes': function(){
        return Types.find();
    },
    'filterColors': function(){
        //console.log("product "+product);
        return Colors.find();
    },
    filterTitleHelper: function(str){
        return str.replace(/ /g,"_");
    },
    'getDisplayType':function(id){
        var productType = Types.findOne({_id: id});
        var out = productType.title;
        return out;
    },
    // Get the product types that do NOT match
    'excludeTypes': function(id){
        var out = "";
        var ex =  Types.find( { _id: { $ne: id } }).map(function(c){
            out += ":not(."+ c._id+")";
        });
        if(ex)
        return out;
    },
    'getSharePageURL': function(){
        var parent = Template.parentData(1);
        var pageURL = encodeURIComponent("http://planet.betabuild.io/products/"+parent._id);
        return pageURL;
    },
    'getShareImageURL': function(id, name){
        var parent = Template.parentData(1);
        var imgURL = encodeURIComponent("https://s3.amazonaws.com/com.planetstonemarblegranite/full/productimages/"+id+"-"+name);
        return imgURL;
    }
});
filters = [];
Template.frontProductsIndex.events({
    'change input[type="checkbox"]':function(e){
        var self = $(e.currentTarget);
            filters = [];
            // get checked checkboxes values
            self.filter(':checked').each(function(){
                var filterValue = self.attr("data-filter");
                /**
                 * TODO: exclusionary filter setup for types
                 */
                filters.push( self.attr("data-filter") );
            });
            //filters.push ( Session.get("excludedFilter" ) );
            filters = filters.join(', ');
            console.log(filters);
            $("#products").isotope({ filter: filters });
    },
    'change .sort-select':function(e){
        var sortValue = e.currentTarget.value;
        $("#products").isotope({ sortBy: sortValue });
    }
});