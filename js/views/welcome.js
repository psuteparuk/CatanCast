define([
  'jquery',
  'underscore',
  'backbone',
  'pixi',
  'tween',
  'game'
], function($, _, Backbone, PIXI, TWEEN, Game) {
  Game.Views.Welcome = Game.Views.Base.extend({
    super: Game.Views.Base.prototype,

    initialize: function() {
      this.text = {};
    },

    render: function() {
      this.addBgImage();
      setTimeout(function() { this.addText("WELCOME", { y: -120 }); }.bind(this), 1000);
      setTimeout(function() { this.addText("TO"); }.bind(this), 1500);
      setTimeout(function() { this.addText("CATANCAST", { y: 120 }); }.bind(this), 2000);
    },

    addBgImage: function() {
      var bgTexture = PIXI.Texture.fromImage('images/welcome_bg.jpg');
      this.bg = new PIXI.Sprite(bgTexture);
      this.bg.position.x = 0;
      this.bg.position.y = 0;
      this.bg.width =  Game.width;
      this.bg.height = Game.height;
      this.bg.alpha = 0;

      Game.stage.addChild(this.bg);

      new TWEEN.Tween(this.bg)
        .to({ alpha: 1 }, 2000)
        .easing(TWEEN.Easing.Linear.None)
        .start();
    },

    /* Offset from the middle of the screen */
    addText: function(text, offset) {
      var textObj = new PIXI.Text(text, {
        fill: '#22FF22',
        font: 'bold 120px "Comic Sans MS"'
      });
      this.text[text.toLowerCase()] = textObj;

      offset = offset || { x: 0, y: 0 };
      offset.x = offset.x || 0;
      offset.y = offset.y || 0;
      textObj.position.set(Game.width/2 + offset.x, Game.height/2 + offset.y);
      textObj.anchor.x = 0.5;
      textObj.anchor.y = 0.5;
      textObj.scale.x = 0.1;
      textObj.scale.y = 0.1;

      Game.stage.addChild(textObj);

      new TWEEN.Tween(textObj.scale)
        .to({ x: 1, y: 1 }, 3000)
        .easing(TWEEN.Easing.Elastic.Out)
        .start();
    }
  });

  return Game.Views.Welcome;
});