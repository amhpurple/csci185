
// startCounter = 0
counter = 0;
i = 0;
// if (startCounter === 0) {
//     function startCycle() {
//         nightTheme()
//     }
//     startCounter += 1;
// }
function dayCycle() {
    if (counter % 4 === 0) { 
        nightTheme()
        generateStars("#colorTop");
        generateStars("#colorTLeft");
        generateStars("#colorTRight");
    }
    else if (counter % 4 === 1) {
        dawnTheme()
    }
    else if (counter % 4 === 2) {
        dayTheme()
    }
    else if (counter % 4 === 3) {
        duskTheme()
    }
    counter += 1;
}

// setInterval (startCycle, 10)

setInterval (dayCycle, 36000);


    function nightTheme() {
        // your code here.
        document.querySelector('body').className = 'night';
    }


    function dawnTheme() {
        // your code here.
        document.querySelector('body').className = 'dawn';
    }


    function dayTheme() {
        // your code here.
        document.querySelector('body').className = 'day';
    }

    function duskTheme() {
        // your code here.
        document.querySelector('body').className = 'dusk';
    }


// function introText(a) {
//     a = Number(a)
//     a = 'introText' + (a+1);
//     document.querySelector('#buttonbox') = '#nextBIntro';
//     document.querySelector('#textBox') = a;
// }

function nextPage(currentSelector, nextSelector) {
    // this function will hide current pg and show selector pg
        document.querySelector(currentSelector).className = 'hidden';
        document.querySelector(nextSelector).className = '';
}

function randomFloat(min, max) { 
	// min and max included 
	return Math.random() * (max - min) + min;
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateStars(selector) {
    let k = 1
    let key = selector.replace("#","");
    let height = document.querySelector(selector).clientHeight;
    let width = document.querySelector(selector).clientWidth;
    let top = document.querySelector(selector).offsetTop;
    let left = document.querySelector(selector).offsetLeft;
    console.log (left,top);
    console.log (height, width);
    for (i=0;i<100;i++) {
        const x = randomInt(left,width + left);
        const y = randomInt(top,height + top);
        const template = `
            <div id="star1_${i}_${key}" class="star1"></div>
        `;
        document.querySelector(selector).insertAdjacentHTML('beforeend', template);
        const star = document.querySelector(`#star1_${i}_${key}`);
        star.style.top = `${y}px`;
        star.style.left = `${x}px`;
    }
    for (i=100;i<200;i++) {
        const x = randomInt(left,width + left);
        const y = randomInt(top,height + top);
        const template = `
            <div id="star2_${i}_${key}" class="star2"></div>
        `;
        document.querySelector(selector).insertAdjacentHTML('beforeend', template);
        const star = document.querySelector(`#star2_${i}_${key}`);
        star.style.top = `${y}px`;
        star.style.left = `${x}px`;
    }
    for (i=200;i<300;i++) {
        const x = randomInt(left,width + left);
        const y = randomInt(top,height + top);
        const template = `
            <div id="star3_${i}_${key}" class="star3"></div>
        `;
        document.querySelector(selector).insertAdjacentHTML('beforeend', template);
        const star = document.querySelector(`#star3_${i}_${key}`);
        star.style.top = `${y}px`;
        star.style.left = `${x}px`;
        k = 0;
    }
    if (k===0) {
        i = 0;
    }
}

