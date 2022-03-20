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
let canvas = document.getElementById("myCanvas");
canvas.addEventListener('click', mouseClicked);
let ctx = canvas.getContext("2d");
window.canvas = canvas;
let rng = function(number)
{
  return Math.floor(Math.random()*number);
};

//properites
ctx.lineWidth = 10;
let lineWidthRNG = ctx.lineWidth;
let shape = 0;
let fullRNG = true;
let shapeRNG = true;
let colorRNG = true;
let mouseMove = true;
let learnMode = false;
let picasoMode = false;

document.getElementById('rng').addEventListener('click', function() {
  fullRNG = true;
  shapeRNG = true;
  colorRNG = true;
  mouseMove = true;
  learnMode = false;
  ctx.clearRect(0, 0, 1200, 600);
});
document.getElementById('move').addEventListener('click', function() {
  mouseMove = true;
  learnMode = false;
  fullRNG = false;
  picasoMode = false;
});

document.getElementById('learn').addEventListener('click', function() {
  learnMode = true;
  mouseMove = false;
  fullRNG = false;
  picasoMode = false;
});
document.getElementById('picaso').addEventListener('click', function() {
  picasoMode = true;
  learnMode = false;
  fullRNG = false;
  mouseMove = false;
});
document.getElementById('triangle').addEventListener('click', function() {
  shapeRNG = false;
  shape = 0;
});
document.getElementById('square').addEventListener('click', function() {
  shapeRNG = false;
  shape = 1;
});
document.getElementById('circle').addEventListener('click', function() {
  shapeRNG = false;
  shape = 3;
});
document.getElementById('hexagon').addEventListener('click', function() {
  shapeRNG = false;
  shape = 2;
});
//Clean
document.getElementById('clear').addEventListener('click', function() {
  ctx.clearRect(0, 0, 1200, 600);
}, false);

//Save
function download_image(){
  var canvas = document.getElementById("myCanvas");
  image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  var link = document.createElement('a');
  link.download = "my-image.png";
  link.href = image;
  link.click();
}


function mouseDragged(event) 
{  
  let xposition = event.offsetX;
  let yposition = event.offsetY;
  
  if(fullRNG && mouseMove)
  {
    let randomShape = rng(4);
    if(lineWidthRNG)
    {
      ctx.lineWidth = rng(10);
    }
    else
    {
      ctx.lineWidth = 10;
    }
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
    else if(!fullRNG && mouseMove)
    {
      if(shape == 0)
      {
        drawTriangle(xposition,yposition);
      }
      else if(shape == 1)
      {
        drawRectangle(xposition,yposition);
      }
      else if(shape == 2)
      {
        drawHexagon(xposition,yposition);
      }
      else if(shape == 3)
      {
        drawCircle(xposition,yposition);
      }
    }
}

//Mouse Click
function mouseClicked (event){
  console.log(event);
  const canvasElement = document.querySelector("#myCanvas");
  if(!canvasElement.contains(event.target))
  {
    console.log("out");
    return;
  }
  if(learnMode && !mouseMove)
  {
    let shapeNumber = rng(10);
    if(shape == 0)
    {
      for (let i = 0; i < shapeNumber; i++) {
          let randomX = rng(1000);
          let randomY = rng(550);
          drawTriangle(randomX,randomY);
        }
    }
    if(shape == 1)
    {
      for (let i = 0; i < shapeNumber; i++) {
          let randomX = rng(1000);
          let randomY = rng(550);
          drawRectangle(randomX,randomY);
        }
    }
    if(shape == 2)
    {
      for (let i = 0; i < shapeNumber; i++) {
          let randomX = rng(1000);
          let randomY = rng(550);
          drawHexagon(randomX,randomY);
        }
    }
    if(shape == 3)
    {
      for (let i = 0; i < shapeNumber; i++) {
          let randomX = rng(1000);
          let randomY = rng(550);
          drawCircle(randomX,randomY);
        }
    }
  }
  else if(picasoMode)
  {
    for (let i = 0; i < 1000; i++) {
      picasoShape = rng(4);
      let randomX = rng(1000);
      let randomY = rng(550);
      if(picasoShape == 0)
      {
        drawTriangle(randomX,randomY);
      }
      else if( picasoShape == 1)
      {
        drawRectangle(randomX,randomY);
      }
      else if (picasoShape == 2)
      {
        drawHexagon(randomX,randomY);
      }
      else if (picasoShape == 3)
      {
        drawCircle(randomX,randomY);
      }
    }
  }
}
