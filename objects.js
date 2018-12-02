console.log("hello");
var canvas=document.getElementById("myCanvas");
var c=canvas.getContext('2d');
const width = 800;
const height = 600;
canvas.width=width;
canvas.height=height;

// object requires class name, constructor, encapsulated functions
class Circle{
	constructor(x,y,r,f_col, s_col,f,s, l){
		this.x = x;
		this.y = y;
        this.r = r;
        this.f_col = f_col;
        this.s_col = s_col;
		this.s = s;
        this.f = f;
        this.l=l
    }
    // encapsulated functions (owned only by circle)
    update(){
        this.draw();
    }

    draw(){
        c.fillStyle = this.f_col;
        c.strokeStyle = this.s_col;
        c.beginPath()
        c.arc(this.x,this.y, this.r, 0, 2*Math.PI);
    if(this.f){
        c.fill();
    }
    if(this.s){
        c.lineWidth=this.l;
        c.stroke();
    }

        }


}

var firstCircle = new Circle(300,300,80,"rgb(255,204,51)","rgb(0,153,204)", true, false, 10);
firstCircle.update();
firstCircle.x=350;
firstCircle.s=true;
firstCircle.update();



