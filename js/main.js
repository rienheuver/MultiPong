$(document).ready(function() {
  var socket = new WebSocket('ws://frisendodelijk.langstra.nl:9000','fris_en_fruitig');
  var time1 = new Date();

  socket.onopen = function() {
    var time2 = new Date();
    alert(time2-time1);
	};

	socket.onerror = function() {
  	alert("error");
	};

	socket.onclose = function() {
    alert("dicht");
	};
});
