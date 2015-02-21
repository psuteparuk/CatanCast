define([
  'jquery',
  'underscore',
  'backbone',
  'pixi',
  'tween',
  'game'
], function($, _, Backbone, PIXI, TWEEN, Game) {
  Game.Views.Board = Game.Views.Base.extend({
    __name__: "Game$Views$Board",
    super: Game.Views.Base.prototype,

    initialize: function() {
      this.bg = null;
      this.board = null;
    },

    render: function() {

    }
  });

  return Game.Views.Board;
});