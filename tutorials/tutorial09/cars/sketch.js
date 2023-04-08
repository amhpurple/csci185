const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: 100,
    width: 200,
    speed: 4,
    color: 'pink'
};

const c2 = {
    x: 1200,
    y: 300,
    width: 200,
    speed: 4,
    color: 'orange'
}

const c3 = {
    x: 100,
    y: 200,
    width: 100,
    speed: 4,
    color: 'lavender'
};

const t1 = {
    x: 100,
    y: 500,
    width: 200,
    speed: 4,
    color: 'cyan'
};


// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

   
    // move the car:
    c1.x += c1.speed;
    c1.speed = c1.speed + .05;
    c2.x = c2.x - c2.speed;
    c2.speed = c2.speed + .05;
    c3.x = c3.x + c3.speed;
    c3.speed = c3.speed + .1;
    t1.x += t1.speed;
    t1.speed = t1.speed + .02;
    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);
    drawCar(c2.x, c2.y, c2.width, c2.color);
    drawCar(c3.x, c3.y, c3.width, c3.color);
    drawTruck(t1.x, t1.y, t1.width, t1.color);

    if (c1.x > canvasWidth + 100) {
        c1.x = -100;
        c1.speed = 1;
    } 
    
    if (c2.x < -100) {
        c2.x = 1200;
        c2.speed = 1;
    }

    if (c3.x > canvasWidth + 50) {
        c3.x = -50;
        c3.speed = 1;
    }
    
    if (t1.x > canvasWidth + 100) {
        t1.x = -100;
        t1.speed = 1;
    }
    
    // draw the grid (optional -- feel free to remove this line):
    // drawGrid(canvasWidth, canvasHeight);
}


// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}


function drawTruck(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);

    // body
    fill(fillColor);
    rect(x - size/7, y - (size/5 + size/7), size / 2, size/6); // top
    rect(x - size/2, y - size/5, size, size/4); // bottom

     // wheels:
     fill(wheelColor);
     circle(x - size / 4, y + 10, size / 4);
     circle(x + size / 4, y + 10, size / 4);
}