
counter = 0;
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

setInterval (dayCycle, 1000)


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


function changeText(a) {
    a = Number(a)
    a = 'next' + (a+1);
    document.querySelector('body').style.backgroundColor = a;
}