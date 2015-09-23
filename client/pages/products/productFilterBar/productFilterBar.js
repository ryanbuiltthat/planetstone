/**
 * Created by Ryan on 9/14/2015.
 */
Template.productFilterBar.onCreated(function(){});
Template.productFilterBar.onRendered(function(){});
Template.productFilterBar.helpers({
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
Template.productFilterBar.events({
    'change input[type="checkbox"]':function(e){

        var self = $(e.currentTarget);
        //console.log(self.attr("data-filter"));
        $checkboxes = $(".search-filter").find("input[type='checkbox']");
        $checkboxes.change(function(){
           //var filters = [];
            // get checked checkboxes values
            $checkboxes.filter(':checked').each(function(){
                var filterValue = self.attr("data-filter");
                /**
                 * TODO: exclusionary filter setup for types
                 */
                filters.push( self.attr("data-filter") );
            });
            filters = filters.join(', ');
            $("#products").isotope({ filter: filters });
            console.log("filter go: "+filters);
        });
    },
    'change .sort-select':function(e){
        //console.log("sort-select: "+ e.currentTarget.value);
        var sortValue = e.currentTarget.value;
        $("#products").isotope({ sortBy: sortValue });
    },
});