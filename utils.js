(function () {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Util = window.Asteroids.Util = {};

  Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate () {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate ();
    ChildClass.prototype.constructor = ChildClass;
  };

  Util.randomVec = function (length) {
    var totalDistance = length * length;
    var x = length * Math.random();
    var y = Math.sqrt(totalDistance - Math.pow(x, 2));
    return([x * ((Math.random() * 2) -1),y * ((Math.random() * 2) -1)]);
  };

  Util.distance = function (pos1, pos2) {
    return Math.sqrt(Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2));
  };
})();
