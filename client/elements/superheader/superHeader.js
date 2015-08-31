/**
 * Created by Ryan on 8/31/2015.
 */
Template.superHeader.onCreated(function(){

});
Template.superHeader.onRendered(function(){
    var docElem = document.documentElement,
        superheader = document.querySelector( '#superHeader' ),
        header = document.querySelector('.header');
        didScroll = false,
        changeHeaderOn = 100;
        setTopFrameOn = 150;
    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 70 );
                setTimeout( scrollFrame, 140 );
            }
        }, false );
    };
    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( superheader, 'shrink' );
            classie.add( header, 'shrink' );
        }
        else {
            classie.remove( superheader, 'shrink' );
            classie.remove( header, 'shrink' );
        }
        didScroll = false;
    };
    function scrollFrame() {
        var sy = scrollY();
        if ( sy >= setTopFrameOn ) {
            classie.add( superheader, 'topframe' );
        }
        else {
            classie.remove( superheader, 'topframe' );
        }
        didScroll = false;
    };
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    };

    init();

});
Template.superHeader.helpers({});
Template.superHeader.events({});