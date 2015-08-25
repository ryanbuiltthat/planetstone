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
    // Need to set a small delay for sub to init
    Meteor.setTimeout(function(){
        return $('input[type=checkbox]').uniform();
    },800);

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
    this.$('select').uniform();

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
    'getDisplayColors': function(colors){
        //console.log(JSON.stringify(color));
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
    'types': function(){
        return Types.find();
    },
    'filterColors': function(){
        //console.log("product "+product);
        return Colors.find();
    },
    filterTitleHelper: function(str){
        return str.replace(/ /g,"_");
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
        //$checkboxes = $(".search-filter").find("input[type='checkbox']");
        self.change(function(){
            var filters = [];
            // get checked checkboxes values
            self.filter(':checked').each(function(){
                var filterValue = self.attr("data-filter");
                /**
                 * TODO: exclusionary filter setup for types
                 */
                filters.push( self.attr("data-filter") );
            });
            filters = filters.join(', ');
            $("#products").isotope({ filter: filters });
        });
    },
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