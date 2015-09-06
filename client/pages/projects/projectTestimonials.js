Template.projectTestimonials.onCreated(function(){
    var parent = Template.parentData(1);
    this.quotes = this.subscribe( 'projectTestimonial', parent.category );/**
     * Created by Ryan on 9/6/2015.
     */
});

Template.projectTestimonials.onRendered(function(){});

Template.projectTestimonials.helpers({
    sub: function(){
        return Template.instance().quotes.ready();
    },
    quote: function(){
        return Testimonials.find();
    }
});

Template.projectTestimonials.events({});
