define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var welcomeView = Backbone.View.extend({
    el: $('#game-canvas'),

    render: function() {
      console.log(Game.a);
    }
  });

  return welcomeView;
});