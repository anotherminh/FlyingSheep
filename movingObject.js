(function() {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  Asteroids.MovingObject = function (params) {
    this.pos = params['pos'],
    this.vel = params['vel'],
    this.radius = params['radius'],
    this.color = params['color'],
    this.game = params['game'];
  };

  Asteroids.MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
      );

    ctx.closePath();
    ctx.fill();
  };

  Asteroids.MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  };

  Asteroids.MovingObject.prototype.isCollidedWith = function (otherObject) {
    var distance = Asteroids.Util.distance(this.pos, otherObject.pos);
    var totalRadii = this.radius + otherObject.radius;
    if (distance < totalRadii) {
      return true;
    } else {
      return false;
    }
  };

  Asteroids.MovingObject.prototype.collideWith = function (otherObject) {
    // var game = this.game;
    // if (this.isCollidedWith(otherObject)){
    //   game.remove(this);
    //   game.remove(otherObject);
    // }
  };
})();
