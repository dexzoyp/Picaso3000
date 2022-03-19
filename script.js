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

ctx.beginPath();
// Set line width
ctx.lineWidth = 10;

// Wall
  // ctx.beginPath();
  // let a = Math.floor(Math.random()*300);
  // let b = Math.floor(Math.random()*300)
  // ctx.strokeRect(a, a, a+100, a+100);
  // ctx.closePath();
  // // Door
  // ctx.fillRect(130, 190, 40, 60);

  // // Roof
  // ctx.beginPath();
  // ctx.moveTo(50, 140);
  // ctx.lineTo(150, 60);
  // ctx.lineTo(250, 140);
  // ctx.closePath();
  // ctx.stroke();
  // ctx.closePath();

var target = document.getElementById('target');
var targetBox = document.getElementById('target-box1');

canvas.addEventListener('click', mouseClicked);

function mouseClicked (event){
  // var xposition = (event.clientX - ctx.offsetLeft - ctx.offsetWidth/2);
  // var yposition = (event.clientY - ctx.offsetTop - ctx.offsetHeight/2);
  var xposition = event.clientX;
  var yposition = event.clientY;
  //shape
  ctx.beginPath();
  let a = Math.floor(Math.random()*30);
  let b = Math.floor(Math.random()*30);
  ctx.fillStyle = `rgb(
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)})`;
  ctx.strokeStyle = `rgb(
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)})`;
    ctx.fillRect(xposition, yposition, a+xposition, b+yposition);
    ctx.strokeRect(xposition, yposition, a+xposition, b+yposition);
  ctx.closePath();
  // ctx.moveTo(50, 140);
  console.log(event);
}