
// startCounter = 0
counter = 0;
// if (startCounter === 0) {
//     function startCycle() {
//         nightTheme()
//     }
//     startCounter += 1;
// }
function dayCycle() {
    if (counter % 4 === 0) { 
        nightTheme()
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