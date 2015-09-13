ShareIt = {
  settings:
    autoInit: true
    buttons: 'responsive'
    sites: 
      'facebook':
        'appId': '1480455812257733'
        'version': 'v2.4'
        'description': ''
      'twitter':
        'description': ''
      'googleplus':
        'description': ''
      'pinterest':
        'description': ''
      'instagram':
        'description': ''
    siteOrder: ['facebook', 'twitter', 'pinterest', 'googleplus', 'instagram']
    classes: "large btn"
    iconOnly: false
    faSize: ''
    faClass: ''
    applyColors: true

  configure: (hash) ->
    @settings = $.extend(true, @settings, hash)
  
  helpers: {
    classes: () ->
      ShareIt.settings.classes
    showText: () ->
      !ShareIt.settings.iconOnly
    applyColors: () ->
      ShareIt.settings.applyColors
    faSize: () ->
      ShareIt.settings.faSize
    faClass: () ->
      if !!ShareIt.settings.faClass
      then '-' + ShareIt.settings.faClass
      else
        ''
  }
}

@ShareIt = ShareIt

ShareIt.init = (hash) ->
  @settings = $.extend(true, @settings, hash)
    
  # Twitter
  window.twttr = do (d = document, s = 'script', id = 'twitter-wjs') ->
    t = undefined
    js = undefined
    fjs = d.getElementsByTagName(s)[0]
    return  if d.getElementById(id)
    js = d.createElement(s)
    js.id = id
    js.src = "https://platform.twitter.com/widgets.js"
    fjs.parentNode.insertBefore js, fjs
    window.twttr or (t =
      _e: []
      ready: (f) ->
        t._e.push f
    )

  # Facebook
  # silence that annoying complaint
  $('<div id="fb-root"></div>').appendTo 'body'
  if ShareIt.settings.autoInit
    window.fbAsyncInit = ->
      FB.init(ShareIt.settings.sites.facebook)
    
  ((d, s, id) ->
    js = undefined
    fjs = d.getElementsByTagName(s)[0]
    if d.getElementById(id)
      return
    js = d.createElement(s)
    js.id = id
#    js.src = '//connect.facebook.net/en_US/sdk.js'
    js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1'
    fjs.parentNode.insertBefore js, fjs
    return
  ) document, 'script', 'facebook-jssdk'
#  <div id="fb-root"></div>
#<script>(function(d, s, id) {
#  var js, fjs = d.getElementsByTagName(s)[0];
#  if (d.getElementById(id)) return;
#  js = d.createElement(s); js.id = id;
#  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=1480455812257733";
#  fjs.parentNode.insertBefore(js, fjs);
#}(document, 'script', 'facebook-jssdk'));</script>