function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("#EEE");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/rect
    fill ('#C490D1')
    ellipse(650, 400, 100, 240)
    
    fill('#C490D1')
    rect(550, 100, 200, 200);

    fill('#C490D1')
    rect(550, 550, 50, 50);

    fill('#C490D1')
    rect(700, 550, 50, 50);

    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);
    fill('gold')
    ellipse(700, 150, 20, 30)

    // https://p5js.org/reference/#/p5/circle
    fill("gold")
    ellipse(600, 150, 20, 30);

    fill("gold")
    ellipse(650, 225, 50, 30);

    fill ('pink')
    ellipse(650, 400, 60, 120)

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}