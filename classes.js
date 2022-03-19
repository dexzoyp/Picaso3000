function generateRandom(min, max)
{

  let difference = max - min;

  let rand = Math.random();

  rand = Math.floor( rand * difference);

  rand = rand + min;

  return rand;
}

function drawHexagon(x, y)
{
const a = 2 * Math.PI / 6;
const r = Math.floor(Math.random()*100);
ctx.strokeStyle = `rgb(
  ${Math.floor(Math.random()*255)},
  ${Math.floor(Math.random()*255)},
  ${Math.floor(Math.random()*255)})`;
  ctx.beginPath();
  for (var i = 0; i < 6; i++) {
    ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
  }
  ctx.closePath();
  ctx.stroke();
}

function drawCircle(x,y)
{
  let r=generateRandom(20,200);
  ctx.strokeStyle = `rgb(
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)})`;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke();
}

function drawTriangle(x,y)
{
  ctx.strokeStyle = `rgb(
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)})`;

  let a = generateRandom(30,500),
  b = generateRandom(30,500),
  c = generateRandom(30,500);

  let angleC = Math.acos((c*c - a*a - b*b) / (2*a*b) );

  if((a+b)<c || (a+c)<b || (b+c)<a)
  { 
  drawTriangle(x,y);
  }

  else
  {
  var triangle =
  {
    x1: x, 
    y1: y, 
    x2: x + a, 
    y2: y,  
    x3: x + b*Math.cos(angleC),
    y3: y + b*Math.sin(angleC)
   }
 
 ctx.beginPath();
 ctx.moveTo(triangle.x1, triangle.y1);
 ctx.lineTo(triangle.x2, triangle.y2);
 ctx.lineTo(triangle.x3, triangle.y3);
 ctx.lineTo(triangle.x1, triangle.y1);
 ctx.closePath();
 ctx.stroke();}
}

function drawRectangle()
{ ctx.beginPath();
  let width = generateRandom(40,300);
  let height = generateRandom(40,300);
  ctx.fillStyle = `rgba(
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)})`;
  ctx.strokeStyle = `rgb(
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)})`;
  //ctx.fillRect(xposition, yposition, xposition+width, yposition+height);
  ctx.strokeRect(xposition-(width/2), yposition-(height/2), width, height);
  ctx.closePath();
}

function mouseClicked (event)
{
  var xposition = event.clientX;
  var yposition = event.clientY;
  ctx.beginPath();
let a = Math.floor(Math.random()*10);
let b = Math.floor(Math.random()*10);
ctx.strokeStyle = `rgb(
  ${Math.floor(Math.random()*255)},
  ${Math.floor(Math.random()*255)},
  ${Math.floor(Math.random()*255)})`;
drawTriangle(xposition, yposition);
ctx.closePath();
}
