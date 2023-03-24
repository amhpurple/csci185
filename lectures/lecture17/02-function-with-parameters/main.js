// make a function:
function makeRed() {
    document.querySelector('body').style.backgroundColor = '#B9314F';
    document.querySelector('body').style.color = 'black';
}

function makeBlue() {
    document.querySelector('body').style.backgroundColor = '#ABDAFC';
    document.querySelector('body').style.color = 'black';
}

function makeGreen() {
    document.querySelector('body').style.backgroundColor = '#5C8001';
    document.querySelector('body').style.color = 'black';
}

function makePurple() {
    document.querySelector('body').style.backgroundColor = '#C490D1';
    document.querySelector('body').style.color = 'black';
}

function makeGold() {
    document.querySelector('body').style.backgroundColor = 'gold';
    document.querySelector('body').style.color = 'black';
}

function changeColor(bgcolor, textcolor) {
    document.querySelector('body').style.backgroundColor = bgcolor;
    document.querySelector('body').style.color = textcolor;
}