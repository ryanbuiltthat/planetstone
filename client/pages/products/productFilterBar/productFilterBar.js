/**
 * Created by Ryan on 9/14/2015.
 */
Template.productFilterBar.onCreated(function(){
    var self = this;
    Session.setDefault('productTypeFilters', '');
    Session.setDefault('productColorFilters', '');
    self.autorun(function() {
        self.subscribe('productTypes');
        self.subscribe('productColors');
        self.subscribe('productNotType', Session.get('typeFilter'));
    });
});
Template.productFilterBar.onRendered(function(){
    Tracker.autorun(function(){
        var types = Session.get('productTypeFilters') || '';
        var colors = Session.get('productColorFilters') || '';
        var merged = types+colors;
        Session.set('productFilters', merged);
        console.log("current filters are: " + merged);
    })
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
//var filters = [];
fstr = "";
f = {};


Template.productFilterBar.events({
    'change .type-select':function(e){
        fstr = Session.get('productFilters');
        var $this = e.currentTarget;
        //f[ "type" ] = $this.value;
        // combine filters
        var filterValue = fstr + $this.value;
        Session.set('productTypeFilters', $this.value);
        //var filterValue = concatVal( f );

    },
    'change input[type="checkbox"]':function(e){
        var self = $(e.currentTarget);
        //var filters = [];
        //f["color"] = "";
        $checkboxes = $(".search-filter").find("input[type='checkbox']");
            fstr = "";
            $checkboxes.filter(':checked').each(function(){
                //var filterValue = self.attr("data-filter");
                var filterValue = $(this).attr("data-filter");
                fstr += filterValue;
                //console.log(filterValue);
                /**
                 * TODO: exclusionary filter setup for types
                 */

                //filters.push( self.attr("data-filter") );
                //console.log("filters in each: "+filters);
            });
            //var currentFilters = Session.get('productFilters');
            //var newfilters = currentFilters + fstr;
            Session.set('productColorFilters', fstr);
            //console.log("final fstr: "+fstr);
            //filters = filters.join(', ');
            //console.log("filters are: "+filters);
            //f["color"] = filters;
            //var filterValue = concatVal( f );
            //$("#products").isotope({ filter: fstr });
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