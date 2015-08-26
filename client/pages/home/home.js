/**
 * Created by Ryan on 8/14/2015.
 */
Template.home.onRendered(function(){
    // Init scripts
    planet_stone.init();

    // Load misc
    planet_stone.load();

    // Get the effects running
    new WOW().init();

});