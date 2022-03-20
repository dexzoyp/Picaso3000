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
const r = Math.floor(Math.random()*200);
ctx.strokeStyle = `rgb(
  ${Math.floor(Math.random()*255)},
  ${Math.floor(Math.random()*255)},
  ${Math.floor(Math.random()*255)})`;
  ctx.beginPath();
  for (var i = 0; i < 6; i++) {
    ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
  }
  let num=generateRandom(0,2);
 if(num==1)
 {ctx.fillStyle=ctx.strokeStyle;
  ctx.fill();}
  ctx.closePath();
  ctx.stroke();
}

function drawCircle(x,y)
{
  let r=generateRandom(20,150);
  ctx.strokeStyle = `rgb(
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)})`;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  let num=generateRandom(0,2);
 if(num==1)
 {ctx.fillStyle=ctx.strokeStyle;
  ctx.fill();}
  ctx.closePath();
  ctx.stroke();
}

function drawTriangle(x,y)
{
  ctx.strokeStyle = `rgb(
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)})`;

  let a = generateRandom(30,300),
  b = generateRandom(30,300),
  c = generateRandom(30,300);

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
 let num=generateRandom(0,2);
 if(num==1)
 {ctx.fillStyle=ctx.strokeStyle;
  ctx.fill();}
 
 ctx.closePath();
 
 ctx.stroke();}

}
// const picasoImg = document.getElementById('picasoImg');
let picasoImg = new Image();
let picasoImg1 = new Image();
let picasoImg2 = new Image();
let picasoImg3 = new Image();
picasoImg.src = './picaso0.jpg';
picasoImg1.src = './picaso1.png';
picasoImg2.src = './picaso2.png';
picasoImg3.src = './picaso3.png';

function drawRectangle(xposition,yposition)
{ ctx.beginPath();
  let width = generateRandom(40,300);
  let height = generateRandom(40,300);
  ctx.strokeStyle = `rgb(
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)})`;
  let num=generateRandom(0,10);
  if(num==1 || num==6 || num==7 ||  num==8 || num== 9)
  {
    ctx.fillStyle=ctx.strokeStyle; ctx.fillRect(xposition-(width/2), yposition-(height/2), width, height);
  }
  else if(num == 2 )
  {
    ctx.drawImage(picasoImg1,xposition-(width/2), yposition-(height/2), width, height)
  }
  else if(num == 3 )
  {
    ctx.drawImage(picasoImg2,xposition-(width/2), yposition-(height/2), width, height)
  }
  else if(num == 4 )
  {
    ctx.drawImage(picasoImg3,xposition-(width/2), yposition-(height/2), width, height)
  }
  else if(num == 5 )
  {
    ctx.drawImage(picasoImg,xposition-(width/2), yposition-(height/2), width, height)
  }
  
  ctx.strokeRect(xposition-(width/2), yposition-(height/2), width, height);
  ctx.closePath();
}