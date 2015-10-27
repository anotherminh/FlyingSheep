(function() {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  Asteroids.Ship = function (arg) {
    var params = {
      color: Asteroids.Ship.COLOR,
      radius: Asteroids.Ship.RADIUS,
      vel: [0, 0],
      game: arg['game'],
      pos: arg['pos']
    };
    Asteroids.MovingObject.call(this, params);
  };

  Asteroids.Ship.COLOR = "#000000";
  Asteroids.Ship.RADIUS = 30;

  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

  Asteroids.Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
  };

  Asteroids.Ship.prototype.power = function (impulse) {
    this.vel = impulse;
  };

  Asteroids.Ship.prototype.fireBullet = function () {
    var bull = new Asteroids.Bullet (this.game);
    this.game.bullets.push(bull);
  };
})();
