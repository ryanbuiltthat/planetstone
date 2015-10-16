/**
 * Created by Ryan on 10/11/2015.
 */

enable_itemopt = function(enable) {
    if(enable) {
        $('.itemopt').removeClass('disabled');
    } else {

        // check all thumbs if no remaining checks
        // before we can disabled the options
        var ch = false;
        $('.thmb').each(function(){
            if($(this).hasClass('checked'))
                ch = true;
        });

        if(!ch)
            $('.itemopt').addClass('disabled');
    }
}