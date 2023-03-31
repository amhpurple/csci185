function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    makeCreature('pink',100,100);
    makeCreature('green',200,200);
    makeCreature('blue',300,300);
    makeCreature('cyan',400,400);
    makeCreature('hotpink',500,500);
    makeCreature('orange',600,600);



    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}


function makeCreature(fillColor,x,y,eyeColor='black') {
    // let x = 300;
    // let y = 300;
    // your creature:
    fill(fillColor);
    circle(x, y, 300);

    fill(eyeColor);
    ellipse(x-50, y-50, 30, 40);
    ellipse(x+50, y-50, 30, 40);
}

function mouseClicked() {
    makeCreature('hotpink', mouseX, mouseY, 'green');
}

function mouseDragged() {
    makeCreature('orange', mouseX, mouseY, 'white');
}