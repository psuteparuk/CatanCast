require.config({
  paths: {
    jquery: 'libs/jquery/jquery-1.11.1.min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min'
  }
});

require( ['app'], function(App) { App.initialize(); } );