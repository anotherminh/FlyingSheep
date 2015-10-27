(function () {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.bindKeyHandlers();
  };

  Asteroids.GameView.prototype.start = function () {
    var that = this;
    setInterval(function () {
      that.game.draw(that.ctx);
      that.game.step();
    }, 20);
  };

  Asteroids.GameView.prototype.bindKeyHandlers = function () {
    key('a', function(){ this.game.ship.power([-10, 0]); }.bind(this));
    key('d', function(){ this.game.ship.power([10, 0]); }.bind(this));
    key('w', function(){ this.game.ship.power([0, -10]); }.bind(this));
    key('s', function(){ this.game.ship.power([0, 10]); }.bind(this));
    key('f', function(){ this.game.ship.fireBullet(); }.bind(this));
  };

  // key('a', function(){ alert('you pressed a!') });
})();
