Template.projectTestimonials.onCreated(function(){
    //var parent = Template.parentData(1);
    //this.quotes = this.subscribe( 'projectTestimonial', parent.category );
});

Template.projectTestimonials.onRendered(function(){

});

Template.projectTestimonials.helpers({
    sub: function(){
        //console.log(parent.category);
        //return Template.instance().quotes.ready();
    },
    quote: function(){
        return Testimonials.find();
    }
});

Template.projectTestimonials.events({});
