define([
  'jquery',
  'underscore',
  'backbone',
  'pixi',
  'tween',
  'game',
  'views/playerAvatars'
], function($, _, Backbone, PIXI, TWEEN, Game) {
  Game.Views.Welcome = Game.Views.Base.extend({
    __name__: "Game$Views$Welcome",
    super: Game.Views.Base.prototype,

    initialize: function() {
      this.bg = null;
      this.texts = [];
      this.sheeps = [];
      this.avatars = new Game.Collections.PlayerAvatars();
      this.avatarViews = null;
    },

    render: function(player) {
      this.addBgImage();
      setTimeout(function() { this.addText("WELCOME", { y: -120 }); }.bind(this), 1000);
      setTimeout(function() { this.addText("TO"); }.bind(this), 1500);
      setTimeout(function() { this.addText("CATANCAST", { y: 120 }); }.bind(this), 2000);
      setTimeout(function() { this.addSheep(0); }.bind(this), 1500);
      setTimeout(function() { this.addSheep(1); }.bind(this), 1500);
      setTimeout(function() { this.clearText(); }.bind(this), 4000);
      // TODO
      // setTimeout(function() { this.addText("waiting for " + player.getName(), { y: -200 }); }.bind(this), 4500);
      setTimeout(function() { this.addText("waiting for You", { y: -200 }); }.bind(this), 4500);
      setTimeout(function() { this.addAvatars(); }.bind(this), 5500);
    },

    addBgImage: function() {
      var bgTexture = PIXI.Texture.fromImage('images/welcome_bg.jpg');
      this.bg = new PIXI.Sprite(bgTexture);
      this.bg.position.set(0, 0);
      this.bg.width =  Game.width;
      this.bg.height = Game.height;
      this.bg.alpha = 0;

      Game.stage.addChild(this.bg);

      new TWEEN.Tween(this.bg)
        .to({ alpha: 1 }, 2000)
        .easing(TWEEN.Easing.Linear.None)
        .start();
    },

    clearBgImage: function() {
      new TWEEN.Tween(this.bg)
        .to({ alpha: 0 }, 1500)
        .onStop(function() { Game.stage.removeChild(this.bg); }.bind(this))
        .start();
    },

    /* Offset from the middle of the screen */
    addText: function(text, offset) {
      var textObj = new PIXI.Text(text, {
        fill: '#22FF22',
        font: 'bold 120px "Comic Sans MS"'
      });
      this.texts.push(textObj);

      offset = offset || { x: 0, y: 0 };
      offset.x = offset.x || 0;
      offset.y = offset.y || 0;
      textObj.position.set(Game.width/2 + offset.x, Game.height/2 + offset.y);
      textObj.anchor.set(0.5, 0.5);
      textObj.scale.set(0.1, 0.1);

      Game.stage.addChild(textObj);

      new TWEEN.Tween(textObj.scale)
        .to({ x: 1, y: 1 }, 3000)
        .easing(TWEEN.Easing.Elastic.Out)
        .start();
    },

    clearText: function() {
      _.each(this.texts, function(textObj) {
        new TWEEN.Tween(textObj)
          .to({ alpha: 0 }, 1000)
          .onStop(function() { Game.stage.removeChild(textObj); })
          .start();
      });
    },

    addSheep: function(num) {
      var sheepTexture = PIXI.Texture.fromImage('images/sheep_cartoon.png');
      var sheepObj = new PIXI.Sprite(sheepTexture);
      this.sheeps.push(sheepObj);
      var xOffset = num % 2 ? 200 : Game.width - 200;
      sheepObj.position.set(xOffset, Game.height/2);
      sheepObj.anchor.set(0.5, 0.5);
      sheepObj.scale.set(0.1, 0.1);

      Game.stage.addChild(sheepObj);

      new TWEEN.Tween(sheepObj)
        .to({ rotation: num % 2 ? "+1" : "-1" }, 300)
        .repeat(Infinity)
        .start();
    },

    clearSheep: function() {
      _.each(this.sheeps, function(sheepObj, ind) {
        new TWEEN.Tween(sheepObj.position)
          .to({ x: ind % 2 ? Game.width+100 : -100 }, 2000)
          .onStop(function() { Game.stage.removeChild(sheepObj); })
          .start();
      });
    },

    addAvatars: function() {
      this.avatars.reset(Game.players);
      this.avatarViews = new Game.Views.PlayerAvatars({ collection: this.avatars });
      this.avatarViews.render();
    },

    clearAvatars: function() {
      this.avatarViews.clear();
    },

    clear: function() {
      this.clearBgImage();
      this.clearText();
      this.clearSheep();
      this.clearAvatars();
    }
  });

  return Game.Views.Welcome;
});