var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(100, 250, 150, 150);
ctx.fillStyle = "#D0A154";
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.closePath();

var target = document.getElementById('target');
var targetBox = document.getElementById('target-box1');

targetBox.addEventListener('click', mouseClicked);

function mouseClicked (event){
  var xposition = (event.clientX - target.offsetLeft - target.offsetWidth/2);
  var yposition = (event.clientY - target.offsetTop - target.offsetHeight/2);
  target.style.transform = "translate("+ xposition + "px," + yposition + "px)";
  console.log(event);
}