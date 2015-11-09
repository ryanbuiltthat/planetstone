/**
 * Created by Ryan on 10/10/2015.
 */
const authenticatedRedirect = () => {
    if ( !Meteor.loggingIn() && !Meteor.userId() ) {
        FlowRouter.go( 'login' );
    }
};

const blockUnauthorizedAdmin = ( context, redirect ) => {
    if ( Meteor.userId() && !Roles.userIsInRole( Meteor.userId(), 'admin' ) ) {
        Modules.both.redirectUser( { redirect: redirect } );
    }
};

const blockUnauthorizedManager = ( context, redirect ) => {
    if ( Meteor.userId() && !Roles.userIsInRole( Meteor.userId(), [ 'admin', 'manager' ] ) ) {
        Modules.both.redirectUser( { redirect: redirect } );
    }
};

const authenticatedRoutes = FlowRouter.group({
    name: 'authenticated',
    triggersEnter: [ authenticatedRedirect ]
});

authenticatedRoutes.route( '/users', {
    name: 'users',
    triggersEnter: [ blockUnauthorizedAdmin ],
    action() {
        BlazeLayout.render( 'default', { yield: 'users' } );
    }
});

authenticatedRoutes.route( '/managers', {
    name: 'managers',
    triggersEnter: [ blockUnauthorizedManager ],
    action() {
        BlazeLayout.render( 'default', { yield: 'managers' } );
    }
});

authenticatedRoutes.route( '/employees', {
    name: 'employees',
    action() {
        BlazeLayout.render( 'default', { yield: 'employees' } );
    }
});

/**
 * Assets are the main content of the app.
 * An asset can be a product, or team member.
 * An asset GROUP is simply the top-level namespace for the asset for example:
 * projects, products, types, etc.
 *
 * Each asset should correspond with a collection
 */
const assetsRoute = authenticatedRoutes.group({
    name: 'assets',
    prefix: '/assets'
});

/**
 * Asset Index
 * An example would be the products index.
 * Route example: /assets/products
 *
 */
assetsRoute.route('/:group', {
    triggersEnter: [ blockUnauthorizedAdmin ],
    action( params, queryParams){
        BlazeLayout.render( 'default', { yield: params.group+'index' });
    }
});

/**
 * Asset Action View
 * Action route for assets. EG Add/Edit/Remove asset
 * Usage: FlowRouter.go("/assets/projects/edit/projectId");
 */

// Add asset
assetsRoute.route('/:group/:action', {
    triggersEnter: [ blockUnauthorizedAdmin ],
    action( params, queryParams){
        BlazeLayout.render( 'default', { yield: params.group+params.action });
    }
});

// Edit asset
assetsRoute.route('/:group/:action/:assetId', {
    triggersEnter: [ blockUnauthorizedAdmin ],
    action( params, queryParams){
        BlazeLayout.render( 'default', { yield: params.group+params.action });
    }
});