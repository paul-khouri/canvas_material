// basic drawing on the canvas with no functions
console.log("hello");
var canvas=document.getElementById("myCanvas");
var c=canvas.getContext('2d');
const width = 800;
const height = 600;
canvas.width=width;
canvas.height=height;

// draw rectangle
c.fillStyle='rgb(0,150,100)';
c.strokeStyle='rgb(80,30,255)';
c.lineWidth=5;

c.beginPath();
c.rect(10,10,100,100);
c.stroke();
c.fill();

// draw circle
c.fillStyle='rgb(200,200,0)'
c.strokeStyle='rgb(40,120,35)'
c.lineWidth=10;
c.beginPath()
c.arc(300,60, 50, 0, 2*Math.PI);
c.stroke();
c.fill();

// draw line
c.strokeStyle="rgb(255,0,0)";
c.lineWidth=0.5;
c.beginPath();
c.moveTo(10, 300);
c.lineTo(500,350);
c.stroke();

//draw polyline with closure
c.strokeStyle="rgb(255,0,80)";
c.fillStyle="rgb(0,255,255)";
c.lineWidth=20;
c.beginPath();
c.moveTo(20, 400);
c.lineTo(500,390);
c.lineTo(500,500);
c.lineTo(400,500);
c.closePath();
c.stroke();
c.fill();

// draw shape with a gradient
var my_gradient=c.createLinearGradient(500,300,500,470);
my_gradient.addColorStop(0,"black");
my_gradient.addColorStop(0.5,"rgb(80,0,190");
my_gradient.addColorStop(0.6,"rgb(200,200,200");
my_gradient.addColorStop(1,"white");
c.fillStyle=my_gradient;
c.strokeStyle="rgb(45,45,180, 0.3)";
c.beginPath()
c.rect(500,300, 200,160);
c.fill();
c.stroke();

// explore baseline shifts
c.fillStyle="rgb(0,0,255)";
var myFont= "italic bold 30px Georgia, serif";
c.font=myFont;
c.fillText("Hello World", 60,200);


var myImg = new Image();   // Create new img element
myImg.addEventListener('load', function() {
  // execute drawImage statements here
  console.log("image has loaded");
  c.drawImage(myImg, 200,200);
}, false);
myImg.src = 'image_test.png'; // Set source path

// quadratic curves (bezier)
c.strokeStyle="rgb(255,0,0)";
c.beginPath();
c.moveTo(300,300);
c.lineWidth=10;
c.quadraticCurveTo(400, 200, 500, 300);
c.stroke();
 
