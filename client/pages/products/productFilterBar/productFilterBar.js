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
Template.productFilterBar.onRendered(function(){});
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
Template.productFilterBar.events({
    'change input[type="checkbox"]':function(e){
        var self = $(e.currentTarget);
        //console.log(self.attr("data-filter"));
        $checkboxes = $(".search-filter").find("input[type='checkbox']");
        $checkboxes.change(function(){
           filters = [];
            // get checked checkboxes values
            $checkboxes.filter(':checked').each(function(){
                var filterValue = self.attr("data-filter");
                if(self.data("filter-group")=='type'){
                    console.log("type filter");
                }
                /**
                 * TODO: exclusionary filter setup for types
                 */

                filters.push( self.attr("data-filter") );
            });
            filters = filters.join(', ');
            $("#products").isotope({ filter: filters });
            console.log("filter go: "+filters);
        });
        //console.log("filter go: "+filters);
    },
    'change .sort-select':function(e){
        //console.log("sort-select: "+ e.currentTarget.value);
        var sortValue = e.currentTarget.value;
        $("#products").isotope({ sortBy: sortValue });
    },
});