/**
 * Created by Ryan on 8/25/2015.
 */
Template.frontstonesquad.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        var handle = self.subscribe('frontTeam');
        self.ready.set(handle.ready());
    })
});
Template.frontstonesquad.onRendered(function(){
    Meteor.setTimeout(function(){
        // UNIFY HEIGHT
        var maxHeight = 0;
        var setHeight = 0;
        $('.heightfix').each(function(){
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
                //console.log(maxHeight);
            }
        });
        $('.heightfix').height(maxHeight);
    }, 1700);
});
Template.frontstonesquad.helpers({
    'subsReady': function(){
        return Template.instance().ready.get();
    },
    'member': function(){
        return Teams.find();
    }
});