(function () {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  Asteroids.Bullet = function (game) {
    var params = {
      color: "blue",
      radius: 10,
      vel: [(game.ship.vel[0]) * 2, (game.ship.vel[1]) * 2],
      game: game,
      pos: game.ship.pos
    };

    Asteroids.MovingObject.call(this, params);
  };

  Asteroids.Util.inherits(Asteroids.Bullet, Asteroids.MovingObject);

})();
