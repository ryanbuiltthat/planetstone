/**
 * Created by Ryan on 8/24/2015.
 */
Template.teamsadd.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        var handle = self.subscribe('addTeams');
        self.ready.set(handle.ready());
    })
});
Template.teamsadd.helpers({
   'subsReady':function(){
       return Template.instance().ready.get();
   },
    'member': function(){
        return Teams.find();
    }
});
