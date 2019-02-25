console.log("main js file has been called for pages");
// class Point x,y,r, stroke, fill, over, canvas
var PointOne = new Point(200,200,20, colArray[0][6], colArray[0][4], colArray[0][5],canvas);
var PointTwo = new Point(300,200,20, colArray[0][3], colArray[0][4], colArray[0][5],canvas);

function animate(){
    ctx.clearRect(0, 0, width, height);
    PointOne.update();
    PointTwo.update();

    window.requestAnimationFrame(animate);
}
animate();