define([
  'jquery',
  'underscore',
  'backbone',
  'game',
  'views/playerAvatar'
], function($, _, Backbone, Game) {
  Game.Views.PlayerAvatars = Game.Views.Base.extend({
    __name__: 'Game$Views$PlayerAvatars',
    super: Game.Views.Base.prototype,

    initialize: function() {
      this.avatarViews = [];
    },

    render: function() {
      this.collection.forEach(function(avatar, ind) {
        var avatarView = new Game.Views.PlayerAvatar({ model: avatar });
        var position = { x: Game.width / 2, y: Game.height / 2 + 200 };
        avatarView.render(position);
        this.avatarViews.push(avatarView);
      }, this);
    },

    clear: function() {
      _.each(this.avatarViews, function(avatarView) {
        avatarView.clear();
      });
    }
  });

  return Game.Views.PlayerAvaters;
});