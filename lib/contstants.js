/**
 * Created by Ryan on 9/18/2015.
 */

views = {};
views.allProducts = function(terms){
    return {
        find: {},
        sort: {sort: {createdAt: -1}}
    };
};

