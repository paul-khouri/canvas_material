
console.log("hello");
var canvas=document.getElementById("myCanvas");
var c=canvas.getContext('2d');
const width = 800;
const height = 600;
canvas.width=width;
canvas.height=height;
// function to set stroke and fill
// parameters
var colArray=["rgb(255,255,255)", "rgb(153,153,153)", "rgb(0,0,0)", 
"rgb(204,0,0)","rgb(255,204,51)","rgb(51,51,255)",
"rgb(0,153,204)","rgb(255,255,153)","rgb(255,255,102)"]
function setFillStroke(f,s){
    c.fillStyle=f;
    c.strokeStyle=s;
}
function setLineWidth(n){
    c.lineWidth=n;
}
// x, y, radius, fill(boolean), stroke(boolean)
function drawCircle(x,y,r,f,s){
c.beginPath()
c.arc(x,y, r, 0, 2*Math.PI);
if(f){
    c.fill();
}
if(s){
    c.stroke();
}
}

function drawRectangle(x,y, w,h,f,s){
c.beginPath();
c.rect(x,y,w,h);
if(f){
    c.fill();
}
if(s){
    c.stroke();
}

}

setFillStroke(colArray[2], colArray[8])
setLineWidth(10);
drawCircle(300,60,150, true, true);
setLineWidth(5);
setFillStroke(colArray[4], colArray[3])
for(i=0; i<10; i++){
drawCircle(30+i*50, 400,10, true, true);
}
drawRectangle(400,100,200,200, true, false);