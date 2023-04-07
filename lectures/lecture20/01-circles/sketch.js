function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    
    let y = 0;
    let x = 100;
    let d = 50;
    let color = 0;
    while (x <= 1100) {
        circle(x, y, d);
        y += 10;
        d += 5;
        x += 3;
        if (color === 0) {
            fill('pink')
            color += 1;
        }

        else if (color === 2) {
            fill('lavender')
            color += 1;
        }
        
        if (y === 650) {
            y = 0;
            d = 50;
            x += 200;
            color += 1;
        }
    }

    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
