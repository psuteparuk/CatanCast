define([
  'jquery',
  'underscore',
  'backbone',
  'game',
  'models/player'
], function($, _, Backbone, Game) {
  Game.Collections.PlayerAvatars = Game.Collections.Base.extend({
    __name__: "Game$Collections$PlayerAvatars",
    super: Game.Collections.Base.prototype,
    model: Game.Models.Player
  });
});