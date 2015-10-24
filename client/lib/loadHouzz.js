/**
 * Created by Ryan on 9/7/2015.
 */
var houzzButtonLoadedCallback = function() {
    //Session.set("houzzWidgetsLoaded", true);

};

var houzzButtonErrorCallback = function(error){
    //Session.set("houzzWidgetsLoaded", false);
    console.log(error);
};

    var houzzScript = document.createElement('script');
    houzzScript.type = "text/javascript";
    houzzScript.async = true;
    houzzScript.src = "//platform.houzz.com/js/widgets.js?"+(new Date().getTime());
    houzzScript.onload = houzzButtonLoadedCallback;
    houzzScript.onerror = houzzButtonErrorCallback;

    loadHouzz = function(el, cb){
        //Load the script tag
        var head = document.getElementsByTagName('head')[0];
        return head.appendChild(houzzScript);
    };