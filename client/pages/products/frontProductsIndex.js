/**
 * Created by Ryan on 8/24/2015.
 */
Template.frontProductsIndex.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.productsReady = new ReactiveVar();
    self.autorun(function(){
        //self.applyFilters.set({color: ["apu62LNsQKPdDYWHp","RyAPSYhSHtc48HRbK"], type:["4L26WKnhepvCLWh89"] });
        //var filters = Session.get('applyFilters') || null;
        var handle = self.subscribe('frontAllProducts', filters);
        //debug;
        self.ready.set(handle.ready());
        self.subscribe('productColors');
        self.subscribe('productTypes');
    });
});
Template.frontProductsIndex.onRendered(function(){
    // Show loading message
    $(".loaderMsg").delay(50).fadeIn('fast');

    // Reset the loaded image count
    Session.setDefault('imgLoaded', 0);

    // Check whether or not all of our (product) images are loaded
    this.autorun(function(){
        if(Template.instance().ready.get()){

            var imagesLoaded = Session.get('imgLoaded');
            var totalProducts = Session.get('imgCount');
            if( imagesLoaded == totalProducts ){
                return Template.instance().productsReady.set(true);
            }
        }
    });

    // If our product images are loaded, hide the loading message and show
    // the grid
    //Meteor.setTimeout(function() {
        this.autorun(function(){
        if(Template.instance().productsReady.get()){

        // Init base scripts
        planet_stone.init();
        planet_stone.load();

        // Hide the filters to start
        $('aside.fixed').slideUp(500);
        $('.filter-show').show(500);
        $('.offset').css('margin-top', '0');
        // Initialize lightGallery
        $("#products").lightGallery({
            //appendSubHtmlTo: '.lg-item',
            preload: 2,
            currentPagePosition: 'left',
            exThumbImage: 'data-exthumbimage',
            thumbWidth: 120,
            cssEasing: 'easeInOutExpo'
        });

        // Reset loaded image count
        Session.set('imgLoaded', 0);


        // Show results behind loader
        $(".results").show();

        // Isotope
        $("#products").isotope({
            //itemSelector: '.item',
            //layoutMode: 'fitRows',
            //getSortData: {
            //    name: ".name",
            //    type: ".type"
            //},
            //sortBy: "name"
        });

        // Try to load Houzz
        var houzzLaterSync = Meteor.wrapAsync(loadHouzz);
        var result = houzzLaterSync();
        if (result) {
            //noting
        }

        /**
         * TODO: Refine animation hiding loader
         */
        $(".loaderMsg").animate({
            //height: 0,
            opacity: 0
        }, 850, function () {
            $(this).hide();
        });


        // Get the effects running
        new WOW().init();


        }// end if
    });
    //}, 1850);
});
Template.frontProductsIndex.helpers({
    subsReady:function() {
        return Template.instance().ready.get();
    },
    productLoad: function(){
      return Template.instance().productsReady.get();
    },
    product:function(){
        //Template.instance().subscribe('productsplit');
        //var colors = FlowRouter.getQueryParam("colors");
        //var types = FlowRouter.getQueryParam("types");
        //if(colors){

            //var colorArr = [];
            //colorArr = colors.split("|");
            //colorArr.pop();
            //console.log(colorArr);
            //console.log("trying to filter");
            //var cur = SplitProducts.find({color: { $in: colorArr } });
            //var cur = SplitProducts.find("productId",{color: { $in: colorArr}});
            //_.each(cur, function(splitproduct){
            //   console.log(splitproduct.productId);
            //});
            //console.log(cur.count());


        //    Session.set('imgLoaded', cur.count());
        //    Session.set('imgCount', cur.count());
        //}else {
            Session.set('imgCount', Products.find().count());
            console.log("returning all");
            return Products.find();
        //}
    },
    getFilterTypes: function(){
        return Types.find();
    },
    getFilterColors: function(){
        return Colors.find();
    },
    filterTitleHelper: function(str){
        return str.replace(/ /g,"_");
    }
});
filters = [];
Template.frontProductsIndex.events({
    //'change input[type="checkbox"]':function(e){
        //var self = $(e.currentTarget);
        //filters = [];
        // get checked checkboxes values
        /**
         * TODO: exclusionary filter setup for types
         */
    //    $("input:checked").each(function () {
    //        var id = $(this).attr("id").toString();
    //        filters.push( id );
    //    });
    //    console.log("post push filters: "+JSON.stringify(filters));
    //    //console.log(typeof filters);
    //    var out = {};
    //    out["color"] = filters;
    //Session.set('applyFilters', out);
    //},
    'change input[type="checkbox"]':function(e){
        var self = $(e.currentTarget);
        //var qs_color_filters = FlowRouter.getQueryParam("colors") || [];
        //if(FlowRouter.getQueryParam("colors")){
          //  var color_filters = FlowRouter.getQueryParam("colors").split('|');
        //}

        filters = [];
        var filter_string = "";
        // get checked checkboxes values
        /**
         * TODO: exclusionary filter setup for types
         */
        //$("input:checked").each(function () {
        //    var id = $(this).attr("id").toString();
        //    //filters.push( id );
        //    if(id!=="undefined"){
        //        filter_string += id+'|';
        //    }
        //});
            //FlowRouter.setQueryParams({colors: filter_string});
            //console.log(filter_string);
        //console.log("post push filters: "+JSON.stringify(filters));
        //console.log(typeof filters);
        //var out = {};
        //out["color"] = filters;
        //Session.set('applyFilters', out);
    },
    'change .sort-select':function(e){
        var sortValue = e.currentTarget.value;
        //$("#products").isotope({ sortBy: sortValue });
    },
});