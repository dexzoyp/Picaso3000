var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(100, 250, 150, 150);
ctx.fillStyle = "#3F51B5";
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(300, 200);
ctx.lineTo(300, 300);
ctx.lineTo(400, 300);
ctx.closePath();
ctx.lineWidth = 3;
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fillStyle = "#FFCC00";
ctx.fill();var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(100, 250, 150, 150);
ctx.fillStyle = "#3F51B5";
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(300, 200);
ctx.lineTo(300, 300);
ctx.lineTo(400, 300);
ctx.closePath();
ctx.lineWidth = 3;
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fillStyle = "#FFCC00";
ctx.fill();