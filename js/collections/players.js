define([
  'jquery',
  'underscore',
  'backbone',
  'game',
  'models/player'
], function($, _, Backbone, Game) {
  Game.Collections.Players = Game.Collections.Base.extend({
    __name__: 'Game$Collections$Players',
    super: Game.Collections.Base.prototype,
    model: Game.Models.Player
  });

  return Game.Collections.Players;
});