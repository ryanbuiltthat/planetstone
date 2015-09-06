/**
 * Created by Ryan on 8/24/2015.
 */
Template.frontProductsIndex.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.productsReady = new ReactiveVar();
    self.autorun(function(){
        var handle = self.subscribe('frontAllProducts');
        self.ready.set(handle.ready());
    });
});
Template.frontProductsIndex.onRendered(function(){
    Session.setDefault('imgLoaded', 0);
    this.autorun(function(){
        if(Template.instance().ready.get()){
            Session.set('imgCount', Products.find().count());
            var imagesLoaded = Session.get('imgLoaded');
            var totalProducts = Session.get('imgCount');
            if( imagesLoaded == totalProducts ){
                return Template.instance().productsReady.set(true);
            }
        }
    });


    this.autorun(function(){
        if(Template.instance().productsReady.get()){
            Session.set('imgLoaded', 0);
            $("#products").lightGallery({
                //selector: this + ' figcaption button'
            });
            // Houzz script
            (function(d,s,id){if(!d.getElementById(id)){var js=d.createElement(s);js.id=id;js.async=true;js.src="//platform.houzz.com/js/widgets.js?"+(new Date().getTime());var ss=d.getElementsByTagName(s)[0];ss.parentNode.insertBefore(js,ss);}})(document,"script","houzzwidget-js");
        }
    });
    Meteor.setTimeout(function(){
        // Init Light Gallery
        //$("#products").lightGallery({
            //selector: this + ' figcaption button'
        //});

        // Init base scripts
        planet_stone.init();
        planet_stone.load();

    }, 1500);

    // Isotope
    //$("#products").isotope({
    //    itemSelector: '.item',
    //    layoutMode: 'fitRows',
    //    getSortData: {
    //        name: ".name",
    //        type: ".type"
    //    },
    //    sortBy: "name"
    //});

    // Houzz


    // Hide Filter show button
    $('.filter-show').hide(500);

    // Get the effects running
    new WOW().init();


});
Template.frontProductsIndex.helpers({
    subsReady:function() {
        return Template.instance().ready.get();
    },
    product:function(){
        return Products.find();
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
    },

});