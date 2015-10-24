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
        return Types.find();
    },
    getFilterColors: function(){
        return Colors.find();
    },
    filterTitleHelper: function(str){
        return str.replace(/ /g,"_");
    }
});

fstr = "";
f = {};


Template.productFilterBar.events({
    'change .type-select':function(e){
        fstr = Session.get('productFilters');
        var $this = e.currentTarget;
        var filterValue = fstr + $this.value;
        Session.set('productTypeFilters', $this.value);

        // Track this event
        analytics.track("Products Filtered", {
            eventName:  "By Type"
        });

    },
    'change input[type="checkbox"]':function(e){
        var self = $(e.currentTarget);
        $checkboxes = $(".search-filter").find("input[type='checkbox']");
            fstr = "";
            $checkboxes.filter(':checked').each(function(){
                var filterValue = $(this).attr("data-filter");
                fstr += filterValue;
            });
       Session.set('productColorFilters', fstr);

        // Track this event
        analytics.track("Products Filtered", {
            eventName:  "By Color"
        });

    },
    'change .sort-select':function(e){
        var sortValue = e.currentTarget.value;
        $("#products").isotope({ sortBy: sortValue });

        // Track this event
        analytics.track("Products Sorted", {
            eventName:  "By "+sortValue
        });
    }
});