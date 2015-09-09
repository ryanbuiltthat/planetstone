/**
 * Created by Ryan on 8/21/2015.
 */
/**
 * Colors collection security
 */
Colors.permit('insert').ifLoggedIn().apply();
Colors.permit('update').ifLoggedIn().apply();
Colors.permit('remove').ifHasRole('admin').apply();

/**
 * Types collection security
 */
Types.permit('insert').ifLoggedIn().apply();
Types.permit('update').ifLoggedIn().apply();
Types.permit('remove').ifHasRole('admin').apply();

/**
 * Categories collection security
 */
Categories.permit('insert').ifLoggedIn().apply();
Categories.permit('update').ifLoggedIn().apply();
Categories.permit('remove').ifHasRole('admin').apply();


/**
 * Products
 */
Products.permit('insert').ifLoggedIn().apply();
Products.permit('update').ifLoggedIn().apply();
Products.permit('remove').ifHasRole('admin').apply();

Projects.permit('insert').ifLoggedIn().apply();
Projects.permit('update').ifLoggedIn().apply();
Projects.permit('remove').ifLoggedIn().apply();

Teams.permit('insert').ifLoggedIn().apply();
Teams.permit('update').ifLoggedIn().apply();
Teams.permit('remove').ifLoggedIn().apply();

Testimonials.permit('insert').ifLoggedIn().apply();
Testimonials.permit('update').ifLoggedIn().apply();
Testimonials.permit('remove').ifLoggedIn().apply();