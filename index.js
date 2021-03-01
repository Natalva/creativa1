
 //video on hover below

 window.onload = function() { //executes code after DOM loads
 //--- select all <video> on the page
 const vids = document.getElementsByTagName("video")
 // Loop over the selected elements and add event listeners
 for (let i = 0; i < vids.length; i++) {
   vids[i].addEventListener( "mouseover", function(e) { 

     vids[i].play()
   })
   vids[i].addEventListener( "mouseout", function(e) {
     vids[i].pause()
   })
 }
}


//animation interaction on the home page

'use strict';

var tileCount = 8;
var actRandomSeed = 0;

var circleAlpha = 130;
var circleColor;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  noFill();

  canvas.position(0,0);
  canvas.style('z-index', '-4');

  circleColor = color(0, 255, 0, circleAlpha);

}

function draw() {
  translate(width / tileCount / 2, height / tileCount / 2);

  background (14, 11,3);

  randomSeed(actRandomSeed);

  stroke(circleColor);
  strokeWeight(mouseY / 60);

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

      var posX = width / tileCount * gridX +random(-20,20) ;
      var posY = height / tileCount * gridY +random(-20,20) ;



      var shiftX = random(-mouseX, mouseX) / 20;
      var shiftY = random(-mouseX, mouseX) / 20;

      ellipse(posX + shiftX, posY + shiftY, mouseY / random(5,15), mouseY / random(5,15));

    }
  }
}

function mousePressed() {
  actRandomSeed = random(100000);
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}


//collapsed sidebar


function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
 

 // horozontal scroll
let options = document.querySelectorAll('.option')
	post1 = document.querySelector('#post1')
	post2 = document.querySelector('#post2')
	post3 = document.querySelector('#post3')
	post4 = document.querySelector('#post4')
 









 // p5 drawing room

 // variables
let frames = [];
let numberOfFrames;
let activeFrame;
let mode;
let sliderSpeed;
let addNewFrameButton;
let buttonColor = '#ebff37'
var visible = true;
var gui;

// background color
var backgroundColor = '#ffffff';

// stroke color
var strokeColor = '#00ddff';

// stroke weight
var strokeSize = 1;
var strokeSizeMin = 0.5;
var strokeSizeMax = 20;
var strokeSizeStep = 0.5;


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(60);

  playButton = createButton("Play");
  playButton.position(width/2 - 50, 20);
  playButton.style('background-color',buttonColor );
  playButton.mousePressed(play);
  
  addNewFrameButton = createButton("Add New Frame");
  addNewFrameButton.position(width/2 + 50, 20);
  addNewFrameButton.style('background-color',buttonColor );
  addNewFrameButton.mousePressed(addNewFrame);
  
  label = createDiv("Speed");
  label.position(width - 100, 20);
  sliderSpeed = createSlider(1, 15, 15, 1);
  sliderSpeed.position(0, 20);
  sliderSpeed.style('width', '80px');
  sliderSpeed.parent(label);

  setAttributes('perPixelLighting', false);

  gui = createGui("Settings");
  gui.addGlobals('backgroundColor', 'strokeColor', 'strokeSize');
  init();
}

function init() {
  mode = 0;
  numberOfFrames = 12;
  activeFrame = 0;

  for(let i=0; i<numberOfFrames; i++) {
    let newFrame = new Frame();
    frames.push(newFrame);
  }
}

function draw() {
  background(backgroundColor);
  translate(-width/2, - height/2)

  // render active frame
  if(mode == 0) {

    // current layer
    image(frames[activeFrame].frame, 0, 0);
    // onion layer
    tint(255, 90);
    let previousFrame = abs((activeFrame-1));
    image(frames[previousFrame].frame, 0, 0);

  } else if(mode == 1){
    if(frameCount % (60 / sliderSpeed.value()) == 0) {
      incrementFrame();
    }
    image(frames[activeFrame].frame, 0, 0);
  }
}

function addNewFrame(){
  activeFrame += 1;
  activeFrame = activeFrame % numberOfFrames;
}


function mouseDragged() {
  if(mode == 0) {
    frames[activeFrame].frame.stroke(strokeColor);
    frames[activeFrame].frame.strokeWeight(strokeSize);
    frames[activeFrame].frame.line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyPressed() {
  if(key == 'a') {
    console.log("[SPACE]")
    activeFrame += 1;
    activeFrame = activeFrame % numberOfFrames;
  } else if(key == 's') {
    play();
  } else if(key == 'd') {
    mode = 0;
  }

}

function play() {
  if(mode == 0) {
    activeFrame = 0;
    mode = 1;
    playButton.html('Stop');
  } else{ 
    mode = 0;
    playButton.html('Play');
  }
}

function incrementFrame() {
  activeFrame += 1;
  activeFrame = activeFrame % numberOfFrames;
}


// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




   


   


// chatroom!!!
(function() {
  var $ = function(id){return document.getElementById(id)};

  var canvas = this.__canvas = new fabric.Canvas('c', {
    isDrawingMode: true
  });

  fabric.Object.prototype.transparentCorners = false;

  var drawingModeEl = $('drawing-mode'),
      drawingOptionsEl = $('drawing-mode-options'),
      drawingColorEl = $('drawing-color'),
      drawingShadowColorEl = $('drawing-shadow-color'),
      drawingLineWidthEl = $('drawing-line-width'),
      drawingShadowWidth = $('drawing-shadow-width'),
      drawingShadowOffset = $('drawing-shadow-offset'),
      clearEl = $('clear-canvas');

  clearEl.onclick = function() { canvas.clear() };

  drawingModeEl.onclick = function() {
    canvas.isDrawingMode = !canvas.isDrawingMode;
    if (canvas.isDrawingMode) {
      drawingModeEl.innerHTML = 'Cancel drawing mode';
      drawingOptionsEl.style.display = '';
    }
    else {
      drawingModeEl.innerHTML = 'Enter drawing mode';
      drawingOptionsEl.style.display = 'none';
    }
  };

  if (fabric.PatternBrush) {
    var vLinePatternBrush = new fabric.PatternBrush(canvas);
    vLinePatternBrush.getPatternSrc = function() {

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext('2d');

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0, 5);
      ctx.lineTo(10, 5);
      ctx.closePath();
      ctx.stroke();

      return patternCanvas;
    };

    var hLinePatternBrush = new fabric.PatternBrush(canvas);
    hLinePatternBrush.getPatternSrc = function() {

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext('2d');

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(5, 0);
      ctx.lineTo(5, 10);
      ctx.closePath();
      ctx.stroke();

      return patternCanvas;
    };

    var squarePatternBrush = new fabric.PatternBrush(canvas);
    squarePatternBrush.getPatternSrc = function() {

      var squareWidth = 10, squareDistance = 2;

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
      var ctx = patternCanvas.getContext('2d');

      ctx.fillStyle = this.color;
      ctx.fillRect(0, 0, squareWidth, squareWidth);

      return patternCanvas;
    };

    var diamondPatternBrush = new fabric.PatternBrush(canvas);
    diamondPatternBrush.getPatternSrc = function() {

      var squareWidth = 10, squareDistance = 5;
      var patternCanvas = fabric.document.createElement('canvas');
      var rect = new fabric.Rect({
        width: squareWidth,
        height: squareWidth,
        angle: 45,
        fill: this.color
      });

      var canvasWidth = rect.getBoundingRect().width;

      patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
      rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 });

      var ctx = patternCanvas.getContext('2d');
      rect.render(ctx);

      return patternCanvas;
    };

    var img = new Image();
    img.src = '../assets/honey_im_subtle.png';

    var texturePatternBrush = new fabric.PatternBrush(canvas);
    texturePatternBrush.source = img;
  }

  $('drawing-mode-selector').onchange = function() {

    if (this.value === 'hline') {
      canvas.freeDrawingBrush = vLinePatternBrush;
    }
    else if (this.value === 'vline') {
      canvas.freeDrawingBrush = hLinePatternBrush;
    }
    else if (this.value === 'square') {
      canvas.freeDrawingBrush = squarePatternBrush;
    }
    else if (this.value === 'diamond') {
      canvas.freeDrawingBrush = diamondPatternBrush;
    }
    else if (this.value === 'texture') {
      canvas.freeDrawingBrush = texturePatternBrush;
    }
    else {
      canvas.freeDrawingBrush = new fabric[this.value + 'Brush'](canvas);
    }

    if (canvas.freeDrawingBrush) {
      var brush = canvas.freeDrawingBrush;
      brush.color = drawingColorEl.value;
      if (brush.getPatternSrc) {
        brush.source = brush.getPatternSrc.call(brush);
      }
      brush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
      brush.shadow = new fabric.Shadow({
        blur: parseInt(drawingShadowWidth.value, 10) || 0,
        offsetX: 0,
        offsetY: 0,
        affectStroke: true,
        color: drawingShadowColorEl.value,
      });
    }
  };

  drawingColorEl.onchange = function() {
    var brush = canvas.freeDrawingBrush;
    brush.color = this.value;
    if (brush.getPatternSrc) {
      brush.source = brush.getPatternSrc.call(brush);
    }
  };
  drawingShadowColorEl.onchange = function() {
    canvas.freeDrawingBrush.shadow.color = this.value;
  };
  drawingLineWidthEl.onchange = function() {
    canvas.freeDrawingBrush.width = parseInt(this.value, 10) || 1;
    this.previousSibling.innerHTML = this.value;
  };
  drawingShadowWidth.onchange = function() {
    canvas.freeDrawingBrush.shadow.blur = parseInt(this.value, 10) || 0;
    this.previousSibling.innerHTML = this.value;
  };
  drawingShadowOffset.onchange = function() {
    canvas.freeDrawingBrush.shadow.offsetX = parseInt(this.value, 10) || 0;
    canvas.freeDrawingBrush.shadow.offsetY = parseInt(this.value, 10) || 0;
    this.previousSibling.innerHTML = this.value;
  };

  if (canvas.freeDrawingBrush) {
    canvas.freeDrawingBrush.color = drawingColorEl.value;
    canvas.freeDrawingBrush.source = canvas.freeDrawingBrush.getPatternSrc.call(this);
    canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
    canvas.freeDrawingBrush.shadow = new fabric.Shadow({
      blur: parseInt(drawingShadowWidth.value, 10) || 0,
      offsetX: 0,
      offsetY: 0,
      affectStroke: true,
      color: drawingShadowColorEl.value,
    });
  }
})();








// socket io 


// This function handles an incoming "request"
// And sends back out a "response";
let handleRequest = function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
};

// HTTP module
let http = require('http');

// Create a server with the handleRequest callback
let server = http.createServer(handleRequest);
// Listen on port 8080
let io = require('socket.io')(server);

console.log('Server started on port 8080');


let handleRequest = function (request, response) {
  // Handle the request with a response
};



const http = require('http');
const path = require('path');
const fs = require('fs');

function handleRequest(req, res) {
  // What did we request?
  let pathname = req.url;
  
  // If blank let's ask for index.html
  if (pathname == '/') {
    pathname = '/index.html';
  }
  
  // Ok what's our file extension
  let ext = path.extname(pathname);

  // Map extension to file type
  const typeExt = {
    '.html': 'text/html',
    '.js':   'text/javascript',
    '.css':  'text/css'
  };

  // What is it?  Default to plain text
  let contentType = typeExt[ext] || 'text/plain';

  // Now read and write back the file with the appropriate content type
  fs.readFile(__dirname + pathname,
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading ' + pathname);
      }
      // Dynamically setting content type
      res.writeHead(200,{ 'Content-Type': contentType });
      res.end(data);
    }
  );
}




let server = http.createServer(handleRequest);
server.listen(8080);

let io = require('socket.io').listen(server);



// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.on('connection', function (socket) {
    console.log("We have a new client: " + socket.id);
  }
);

  // We are given a websocket object in our function
  function (socket) {
    console.log("We have a new client: " + socket.id);
    socket.on('disconnect', function() {
      console.log("Client has disconnected");
    });
  }



  socket.on('mouse',
      function(data) {
        // Data comes in as whatever was sent, including objects
        console.log("Received: 'mouse' " + data.x + " " + data.y);      
        // Send it to all other clients
        socket.broadcast.emit('mouse', data);
      }
    );

  let socket = io();

function setup() {
  
}

function mouseDragged() {
  // Make a little object with mouseX and mouseY
  let data = {
    x: mouseX,
    y: mouseY
  };
  // Send that object to the socket
  socket.emit('mouse',data);
}

function setup() {
  // We make a named event called 'mouse' and write an
  // anonymous callback function
  socket.on('mouse',
    function(data) {
      // Draw a blue circle
      fill(0,0,255);
      noStroke();
      ellipse(data.x,data.y,80,80);
    }
  );
}




 