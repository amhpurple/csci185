let x = 100;
let y = 200;
let width = 50;
let speed = 10;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// In p5.js, if you create a function called "draw",
// the function will be invoked over and over again
// in an animation loop (which is part of how p5.js 
// works).
let counter = 1;

function draw() {
    x += speed;
    
    // if (counter % 2 === 0) {
    //     y -= 15;
    // }
    
    // else {
    //     y += 15;
    // }

    clear();
    noFill();
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
    counter += 1;
}
