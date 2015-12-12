function Field(width, height, players) {
  this.width = width;
  this.height = height;
  this.players = players;
}

Field.prototype.get_wall_angles = function () {
  return 180*(this.players-2);
};

Field.prototype.get_polygon = function (cx, cy, center_ang, r, start_ang) {

  var n = this.players;
  //create a vertex array
  var vertex = new Array();
  for(var i=0 ; i<n ; i++)
  { ang = startAng + (i*centerAng);
    vx = Math.round(cx + r*Math.cos(ang));
    vy = Math.round(cy - r*Math.sin(ang));
    vertex.push( {x:vx , y:vy} );
  }

  console.log(vertex);
  return vertex;

};
