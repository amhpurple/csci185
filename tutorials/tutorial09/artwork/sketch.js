const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a"];

function randomFloat(min, max) { 
	// min and max included 
	return Math.random() * (max - min) + min;
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    // frameRate(2);
    
    // fill("#08415c");

    let i = 0;
    while  (i < 400) { 
        // if (i % 7 === 3) {
        //     fill("pink"); 
        // }
        // else if (i % 9 === 1) {
        //     fill("orange");
        // }
        // else if (i % 12 === 0) {
        //     fill("cyan");
        // }
        // else {
        //     fill("lavender");
        // }
        fill (colors[randomInt(0,4)])
        
        if (i % 7 === 0) {
            // draw a random square:
            let x = randomInt(0, canvasWidth);
            let y = randomInt(0, canvasHeight);
            let size = randomFloat(25, 125);
            square(x, y, size);
        }
        else if (i % 10 === 1) {
            // draw a random triangle:
            let x = randomInt(0, canvasWidth);
            let y = randomInt(0, canvasHeight);
            let size = randomFloat(25, 125);
            triangle(
                x, y - size / 2, 
                x - size / 2.25, y + size / 4.3,
                x + size / 2.25, y + size / 4.3
            )
        }
        else if (i % 17 === 0) {
            // draw a random line:
            let x = randomInt(0, canvasWidth);
            let y = randomInt(0, canvasHeight);
            let size = randomFloat(25, 125);
            let coefX = randomFloat(-3, 3);
            let coefY = randomFloat(-3, 3);
            line(x, y, x + size * coefX, y + size * coefY);
        }
        else {
            // draw a random circle:
            let x = randomInt(0, canvasWidth);
            let y = randomInt(0, canvasHeight);
            let size = randomFloat(25, 125);
            circle(x, y, size);
        }
    ++i;
    }
}


// // anything that you want to animate goes in this function:  
// function draw() {
//     clear();

// }


 
// // 1. draw a random square:
// square(x, y, size);

// // 2. draw a random triangle:
// triangle(
//     x, y - size / 2, 
//     x - size / 2.25, y + size / 4.3,
//     x + size / 2.25, y + size / 4.3
// );

// // 3. draw a random line:
// let coefX = randomFloat(-3, 3);
// let coefY = randomFloat(-3, 3);
// line(x, y, x + size * coefX, y + size * coefY);

