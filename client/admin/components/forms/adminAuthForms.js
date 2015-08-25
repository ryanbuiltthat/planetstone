/**
 * Created by Ryan on 8/16/2015.
 */
Template.forgotpassword.events({
   'click #goToLogin': function(e){
       //Session.set("formState", "signin");
       FlowRouter.go('/manage/forgotpassword');
       return false;
   },
    'click #goToSignUp': function(e){
        FlowRouter.go('/manage/signup');
        return false;
    },
});
Template.signin.events({
    'click #forgotpassword': function(e){
        FlowRouter.go('/manage/forgotpassword');
        return false;
    },
    'click #goToSignUp': function(e){
        FlowRouter.go('/manage/signup');
        return false;
    },
    'submit #login-form' : function(e, t){
        e.preventDefault();
        // retrieve the input field values
        var email = t.find('#login-email').value
            , password = t.find('#login-password').value;

        // Trim and validate your fields here....
        if (email.indexOf('@') !== -1 || email !== '') {
            //return true;
        } else {
            //$('div.error').append('<label for="login-email" class="error">Must enter a valid email</label>');
            //console.log('not a valid email');
            return false;
        }
        // must be 6 characters
        if (password.length >= 6 && password !== '') {
            //return true;
        } else {
            //$('div.error').append('<label for="login-email" class="error">Please enter a strong password</label>');
            console.log('password must be at least 6 characters');
            return false;
        }

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(email, password, function(err){
            if (err){
                console.log("[err] "+JSON.stringify(err));
            }
            // The user might not have been found, or their passwword
            // could be incorrect. Inform the user that their
            // login attempt has failed.
            else{

            }
            // The user has been logged in.
        });
        return false;
    }
});
Template.signup.events({
    'click #goToLogin': function(e){
        FlowRouter.go('/manage/signin');
        return false;
    }
});

Template.colorsindex.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        var handle = self.subscribe('colors');
        self.ready.set(handle.ready());
    })
});
Template.colorsindex.helpers({
    subsReady: function(){
        return Template.instance().ready.get();
    },
    colors: function(){
        return Colors.find({});
    }
});