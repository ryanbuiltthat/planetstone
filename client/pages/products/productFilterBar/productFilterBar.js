/**
 * Created by Ryan on 9/14/2015.
 */
Template.productFilterBar.onCreated(function(){
    var self = this;
    Session.setDefault('typeFilter', '');
    self.autorun(function() {
        self.subscribe('productTypes');
        self.subscribe('productColors');
        self.subscribe('productNotType', Session.get('typeFilter'));
    });
});
Template.productFilterBar.onRendered(function(){
});
Template.productFilterBar.helpers({
    getFilterTypes: function(){
        // need to get oposite filters
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
f = {};
Template.productFilterBar.events({
    'change .type-select':function(e){
        var $this = e.currentTarget;
        f[ "type" ] = $this.value;
        // combine filters
        var filterValue = concatVal( f );
        $("#products").isotope({ filter: filterValue });
    },
    'change input[type="checkbox"]':function(e){
        var self = $(e.currentTarget);
        var filters = [];
        f["color"] = "";
        $checkboxes = $(".search-filter").find("input[type='checkbox']");
            $checkboxes.filter(':checked').each(function(){
                var filterValue = self.attr("data-filter");
                /**
                 * TODO: exclusionary filter setup for types
                 */

                filters.push( self.attr("data-filter") );
                //console.log("filters in each: "+filters);
            });
            filters = filters.join(', ');
            console.log("filters are: "+filters);
            f["color"] = filters;
            var filterValue = concatVal( f );
            $("#products").isotope({ filter: filterValue });
            //console.log("filter go: "+filters);
        //});
        //console.log("filter go: "+filters);
    },
    'change .sort-select':function(e){
        //console.log("sort-select: "+ e.currentTarget.value);
        var sortValue = e.currentTarget.value;
        $("#products").isotope({ sortBy: sortValue });
    },
});