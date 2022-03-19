class Color
{
  constructor(r,g,b)
  {
    this.r=r;
    this.g=g;
    this.b=b;
  }
}

class Square
{
  constructor(side, Color)
  {
    this.side = side;
    this.Color=Color;
  }
}

class Circle
{
  constructor(x,y,radius,Color)
  {
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.Color=Color;
  }
}

function randomColor()
{
  
  var r = Math.floor(Math.random()*255);
  var g = Math.floor(Math.random()*255);
  var b = Math.floor(Math.random()*255);

  let newColor=new Color(r,g,b);
  return newColor;
}

function randomCircle()
{
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  var radius = Math.floor(Math.random()*20);

  let newColor=randomColor();
  let newCircle= new Circle(x,y,radius,newColor);
  
  return newCircle;
}

function randomSquare()
{
  var side=Math.floor(Math.random()*20);
  
  let newColor=randomColor();
  let newSquare= new Square(side,newColor);
  
  return newSquare;
}

function drawHexagon(x, y)
{
const a = 2 * Math.PI / 6;
const r = Math.floor(Math.random()*100);
  ctx.beginPath();
  for (var i = 0; i < 6; i++) {
    ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
  }
  ctx.closePath();
  ctx.stroke();
}

function mouseClicked (event){
  // var xposition = (event.clientX - ctx.offsetLeft - ctx.offsetWidth/2);
  // var yposition = (event.clientY - ctx.offsetTop - ctx.offsetHeight/2);
  var xposition = event.clientX;
  var yposition = event.clientY;
  //shape
  //
  // ctx.style.transform = "translate("+ xposition + "px," + yposition + "px)";
  ctx.beginPath();
  // for (let i = 0; i < 100; i++) {
let a = Math.floor(Math.random()*10);
let b = Math.floor(Math.random()*10);
ctx.strokeStyle = `rgb(
  ${Math.floor(Math.random()*255)},
  ${Math.floor(Math.random()*255)},
  ${Math.floor(Math.random()*255)})`;
//ctx.strokeRect(xposition-100, yposition-100, xposition+100, yposition+100);
drawHexagon(xposition, yposition);
ctx.closePath();
  // }
  console.log(event);
}
