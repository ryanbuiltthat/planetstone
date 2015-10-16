Template.login.onCreated(function(){

});
Template.login.onRendered( () => {
    //this.$('#login').validate();
  Modules.client.login( { form: "#login", template: Template.instance() } );
});

Template.login.events({
  'submit #login': ( event ) => event.preventDefault()
});
