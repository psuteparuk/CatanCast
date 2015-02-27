define([
  'jquery',
  'underscore',
  'backbone',
  'game',
  'gameAssets'
], function($, _, Backbone, Game, GameAssets) {
  var start = function() {
    Game.initialize();
    // Game.renderWelcome();
    Game.renderMain();
    requestAnimationFrame(Game.animate);

    Backbone.history.start({ pushState: true });
  };

  return {
    start: start
  };
});