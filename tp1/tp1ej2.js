var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(20, 20, 1200, 600);
ctx.fillStyle = "rgba(238, 238, 0, 1)";
ctx.fill();
ctx.closePath();
