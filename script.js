// function _(selector)
// {
//   return document.querySelector(selector);
// }
// function setup()
// {
//   let canvas = createCanvas(650,600);
//   canvas.parent("canvas-wrapper");
//   background(255);
// }
// function mouseDragged(){
//   let type = random(  ) //rng(all figures)
//   let size = 0 //rng(0-max_size)
//   let colorR = 0;//rng(0-255)
//   let colorG = 0; // rng(0-255)
//   let colorB = 0; //rng (0-255)
//   let rotation = 0; //rng (0,359)
// }
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.lineWidth = 10;
canvas.addEventListener('click', mouseClicked);

let rng = function(number)
{
  return Math.floor(Math.random()*number);
};
function drawTest(xposition, yposition)
{
  ctx.beginPath();
  let a = rng(800);
  let b = rng(600);
  let width = rng(200);
  let height = rng(200);
  ctx.fillStyle = `rgba(
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)})`;
  ctx.strokeStyle = `rgb(
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)})`;
  ctx.fillRect(a, b, a+width, b+height);
  ctx.strokeRect(a, b, a+width, b+height);
  ctx.closePath();
}

function mouseClicked (event){
  console.log(event);
  var xposition = event.clientX;
  var yposition = event.clientY;

  //shape
  //randomShape should be -1 for test
  //let randomShape = rng(4);
  let randomShape = -1;
  if(randomShape = -1)
  {
    console.log(randomShape);
    drawTest(xposition,yposition);
  }
  else if(randomShape == 0)
  {
    drawSquere(xposition,yposition);
    console.log(randomShape);
  }
  else if(randomShape == 1)
  {
    drawRectangle(xposition,yposition);
    console.log(randomShape);
  }
  else if(randomShape == 2)
  {
    drawHexagon(xposition,yposition);
    console.log(randomShape);
  }
  else if(randomShape == 3)
  {
    drawCircle(xposition,yposition);
    console.log(randomShape);
  }
  
  
}