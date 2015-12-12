function Field(width, height, players) {
  this.width = width;
  this.height = height;
  this.players = players;
}

Field.prototype.get_wall_angles = function () {
  return 180 * (this.players - 2);
};

Field.prototype.get_polygon = function (cx, cy, r) {

  console.log(arguments);

  var n = this.players * 2;
  var center_ang = 2 * Math.PI / n;
  var start_ang;

  if (n % 2 == 1) {
    start_ang = Math.PI / 2;  //12 oclock
  } else {
    start_ang = Math.PI / 2 - center_ang / 2;
  }

  //create a vertex array
  var vertex = new Array();
  for (var i = 0; i <= n; i++) {
    ang = start_ang + (i * center_ang);
    vx = Math.round(cx + r * Math.cos(ang));
    vy = Math.round(cy - r * Math.sin(ang));
    vertex.push({x: vx, y: vy});
  }
  return vertex;

};
