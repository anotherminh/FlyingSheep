(function () {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  window.Asteroids.Asteroid = function (arg) {
    var params = {
      color: Asteroids.Asteroid.COLOR,
      radius: Asteroids.Asteroid.RADIUS,
      vel: Asteroids.Util.randomVec(3),
      game: arg['game'],
      pos: arg['pos']
    };

    Asteroids.MovingObject.call(this, params);
  };

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

  Asteroids.Asteroid.COLOR = "#FF0000";
  Asteroids.Asteroid.RADIUS = 50;

  Asteroids.Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship && otherObject.isCollidedWith(this)) {
      otherObject.relocate();
    }
  };
})();
