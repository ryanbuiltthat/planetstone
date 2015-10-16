let pathFor = ( path, view ) => {
  if ( path.hash ) {
    view = path;
    path = view.hash.route;
    delete view.hash.route;
  }

  let query = view.hash.query ? FlowRouter._qs.parse( view.hash.query ) : {};
  return FlowRouter.path( path, view.hash, query );
};

Template.registerHelper( 'pathFor', pathFor );

Template.registerHelper( 'urlFor', ( path, view ) => {
  return Meteor.absoluteUrl( pathFor( path, view ).substr( 1 ) );
});

Template.registerHelper( 'currentRoute', ( route ) => {
  FlowRouter.watchPathChange();
  return FlowRouter.current().route.name === route ? 'active' : '';
});

Template.registerHelper( 'parentCurrentRoute', ( route ) => {
  FlowRouter.watchPathChange();
  return FlowRouter.current().route.name === route ? 'nav-active' : '';
});


Template.registerHelper( 'watchRouteGroup', ( group ) => {
  FlowRouter.watchPathChange();
  if(FlowRouter.current().route.group) {
    if (FlowRouter.current().route.group.name === group || FlowRouter.current().route.group.parent.name === group) {
      //return FlowRouter.current().route.name === group ? 'nav-active' : '';
      return 'nav-active';
    }
  }
});

Template.registerHelper( 'currentDynamicRoute', ( param ) => {
  FlowRouter.watchPathChange();
  var current = FlowRouter.current();
  //console.log(current);
  //if(FlowRouter.current().route.getParam("group") === param || FlowRouter.current().route.group.parent.name === group ){
    return FlowRouter.current().route.getParam("group") === param  ? 'active' : '';
    //return 'nav-active';
  //}
});