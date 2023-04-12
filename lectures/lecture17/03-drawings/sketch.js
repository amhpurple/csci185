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
    fill ('blue');
    stroke ('blue');
    // rect(100, 550, 2, 2);
    // rect(102, 552, 2, 2);
    // rect(104, 554, 2, 2);
    // rect(106, 556, 2, 2);
    // rect(108, 558, 2, 2);
    rect(211, 560, 2, 2); //0
    rect(213, 558, 2, 2); //1
    rect(215, 556, 2, 2); //2
    rect(217, 554, 2, 2); //3
    rect(219, 552, 2, 2); //4
    rect(221, 550, 2, 2); //5
    rect(223, 548, 2, 2); //6
    rect(225, 546, 2, 2); //7
    rect(227, 544, 2, 2); //8
    rect(229, 542, 2, 2); //9
    rect(231, 540, 2, 2); //10
    rect(233, 538, 2, 2); //11
    rect(235, 536, 2, 2); //12
    rect(237, 534, 2, 2); //13
    rect(239, 532, 2, 2); //14
    rect(241, 533, 1, 3);       //0
    rect(240, 536, 1, 3);       //1
    rect(239, 539, 1, 3);       //2
    rect(238, 542, 1, 3);       //3
    rect(237, 545, 1, 3);       //4
    rect(236, 548, 1, 3);       //5
    rect(235, 551, 1, 3);       //6
    rect(234, 554, 1, 4); //0
    rect(233, 558, 1, 4); //2
    rect(232, 562, 1, 4); //3
    rect(231, 566, 1, 4); //4
    rect(229, 570, 2, 2); 
    rect(227, 572, 2, 2); 
    rect(225, 574, 2, 2); 
    rect(223, 576, 2, 2); 
    rect(221, 578, 2, 2); 
    rect(219, 580, 2, 2);
    rect(217, 582, 2, 2);
    rect(215, 584, 2, 2);
    rect(213, 586, 2, 2);
    rect(211, 588, 2, 2);
}