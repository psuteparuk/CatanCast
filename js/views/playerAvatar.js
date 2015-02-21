define([
  'jquery',
  'underscore',
  'backbone',
  'pixi',
  'tween',
  'game'
], function($, _, Backbone, PIXI, TWEEN, Game) {
  Game.Views.PlayerAvatar = Game.Views.Base.extend({
    __name__: "Game$Views$PlayerAvatar",
    super: Game.Views.Base.prototype,

    initialize: function() {
      this.avatars = [];
      this.texts = [];
    },

    render: function(position) {
      position = position || { x: 0, y: 0 };
      this.addAvatar(position);
      this.addText(position);
    },

    addAvatar: function(position) {
      var avatarTexture = PIXI.Texture.fromImage('images/avatar.png');
      var avatar = new PIXI.Sprite(avatarTexture);
      this.avatars.push(avatar);
      avatar.position.set(position.x, position.y);
      avatar.anchor.set(0.5, 0.5);
      avatar.alpha = 0.3;

      Game.stage.addChild(avatar);

      new TWEEN.Tween(avatar)
        .to({ alpha: 1 }, 1000)
        .start();

      new TWEEN.Tween(avatar.scale)
        .to({ x: 0.2, y: 0.2 }, 1000)
        .easing(TWEEN.Easing.Elastic.Out)
        .start();
    },

    addText: function(position) {
      // TODO
      // var textObj = new PIXI.Text(model.getName(), {
      var textObj = new PIXI.Text("You", {
        fill: '#FF0000',
        font: 'bold 60px "Comic Sans MS"'
      });
      this.texts.push(textObj);

      textObj.position.set(position.x, position.y);
      textObj.anchor.set(0.5, 0.5);
      textObj.alpha = 0.3;

      Game.stage.addChild(textObj);

      new TWEEN.Tween(textObj)
        .to({ alpha: 1 }, 1000)
        .start();

      new TWEEN.Tween(textObj.scale)
        .to({ x: 0.5, y: 0.5 }, 1000)
        .easing(TWEEN.Easing.Elastic.Out)
        .start();
    },

    clear: function() {
      _.each(this.avatars, function(avatar) {
        new TWEEN.Tween(avatar)
          .to({ alpha: 0 }, 1500)
          .onStop(function() { Game.stage.removeChild(avatar); })
          .start();
      });

      _.each(this.texts, function(textObj) {
        new TWEEN.Tween(textObj)
          .to({ alpha: 0 }, 1500)
          .onStop(function() { Game.stage.removeChild(textObj); })
          .start();
      });
    }
  });

  return Game.Views.PlayerAvatar;
});