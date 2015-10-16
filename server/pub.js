/**
 * Created by Ryan on 8/16/2015.
 */

// All Products (mainly just for counters in admin
Meteor.publish("allAdmin", function () {
    if(this.userId){
        //Counts.publish(this, 'products-counter', Products.find(), { noReady: true });
        //Counts.publish(this, 'projects-counter', Projects.find(), { noReady: true });
        //Counts.publish(this, 'testimonials-counter', Testimonials.find(), { noReady: true });
        //Counts.publish(this, 'users-counter', Meteor.users.find(), { noReady: true });
        return [
            //Products.find(),
            //Projects.find(),
            //Colors.find(),
            //Types.find(),
            //LocalImages.find(),
            //ProjectImages.find(),
            //ProductImages.find(),
            //Categories.find(),
            //Meteor.users.find(),
            //Testimonials.find(),
            // Site information
            //Site.find()
        ];
    }
});

// Users currently online...only authenticated users at the moment, working on
// non-authenticated connections
//Meteor.publish("userStatus", function() {
//    if(!this.userId)
//        throw new Meteor.Error("Not authorized for this content");
//    return Meteor.users.find({ "status.online": true });
//});



//Meteor.publish("singleProduct", function(id) {
    //check(id, String);
    //if(!this.userId)
    //    throw new Meteor.Error("Not authorized for this content");
//    return [
//        Products.find(),
//        ProductImages.find()
//        ]
//});
//Meteor.publish("colors", function() {
//    if(!this.userId)
//        throw new Meteor.Error("Not authorized for this content");
//    return Colors.find();
//});
//Meteor.publish("types", function() {
//    if(!this.userId)
//        throw new Meteor.Error("Not authorized for this content");
//    return Types.find();
//});
//Meteor.publish("categories", function() {
//    if(!this.userId)
//        throw new Meteor.Error("Not authorized for this content");
//    return Categories.find();
//});

