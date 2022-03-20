function _(selector)
{
  return document.querySelector(selector);
}
function setup()
{
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  ctx.lineWidth = 10;
}
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.lineWidth = 10;

canvas.addEventListener('click', mouseClicked);

let rng = function(number)
{
  return Math.floor(Math.random()*number);
};

function mouseDragged(event) 
{
  console.log(event)
  let xposition =event.clientX;
  let yposition = event.clientY-canvas.offsetHeight;
  console.log (xposition);
  console.log (yposition);
  let randomShape = rng(5);
  if(randomShape == 0)
  {
    drawTriangle(xposition,yposition);
  }
  else if(randomShape == 1)
  {
    drawRectangle(xposition,yposition);
  }
  else if(randomShape == 2)
  {
    drawHexagon(xposition,yposition);
  }
  else if(randomShape == 3)
  {
    drawCircle(xposition,yposition);
  }
}
function mouseClicked (event){
  console.log("ClickEvent");
}
