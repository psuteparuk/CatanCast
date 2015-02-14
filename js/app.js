define([
  'jquery',
  'underscore',
  'backbone',
  'connection',
  'views/welcome'
], function($, _, Backbone, Connection, WelcomeView) {
  Game = {};
  Game.view = Backbone.View.extend({
    __name__: 'Game$view$base',
    super: Backbone.View.prototype,

  });

  var renderWelcome = function() {
    Game.welcomeView = new WelcomeView();
    Game.welcomeView.render();
  };

  var initialize = function() {
    console.log('******* WELCOME TO CATANCAST *******');

    Connection.initialize();

    render();

    Backbone.history.start({ pushState: true });
  };

  return {
    initialize: initialize
  };
});