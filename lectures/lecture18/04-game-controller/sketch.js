let x = 100;
let y = 200;
let width = 50;
let fillColor = 'white';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    circle(x, y, width);
    circle(x-30, y-30, width);
    circle(x+30, y+30, width);
    fill(fillColor);
    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {  
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down
    if (ev.code === 'ArrowUp') {
        y = y - 10;
    }

    else if (ev.code === 'ArrowDown') {
        y = y + 10;
    }

    else if (ev.code === 'ArrowLeft') {
        x = x - 10;
    }
    
    else if (ev.code === 'ArrowRight') {
        x = x + 10;
    }

    else if (ev.code === 'Space') {
        width = width + 10;
    }

    else if (ev.code === 'Minus') {
        width = width - 10;
    }

    else if (ev.code === 'KeyR') {
        fillColor = 'red';
    }

    else if (ev.code === 'KeyB') {
        fillColor = 'blue';
    }

    else if (ev.code === 'KeyW') {
        fillColor = 'white';
    }

    // redraw circle:
    clear();
    fill(fillColor)
    // noFill();
    circle(x, y, width);
    circle(x-30, y-30, width);
    circle(x+30, y+30, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
