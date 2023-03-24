function makeBigger() {
   // let a = document.querySelector('h1', 'p').style.fontSize;
   var h1 = document.querySelector('h1');
   let a = window.getComputedStyle(h1, null).getPropertyValue('font-size');
   console.log(a)
   a = a.replace('px', '')
   a = Number(a)
   a = a + 4 + 'px';
   console.log(a)
   document.querySelector('h1').style.fontSize = a;
   var p = document.querySelector('p');
   let b = window.getComputedStyle(p, null).getPropertyValue('font-size');
   console.log(b)
   b = b.replace('px', '')
   b = Number(b)
   b = b + 4 + 'px';
   console.log(b)
   document.querySelector('p').style.fontSize = b;
};

function makeSmaller() {
   var h1 = document.querySelector('h1');
   let a = window.getComputedStyle(h1, null).getPropertyValue('font-size');
   console.log(a)
   a = a.replace('px', '')
   a = Number(a)
   a = a - 4 + 'px';
   console.log(a)
   document.querySelector('h1').style.fontSize = a;
   var p = document.querySelector('p');
   let b = window.getComputedStyle(p, null).getPropertyValue('font-size');
   console.log(b)
   b = b.replace('px', '')
   b = Number(b)
   b = b - 4 + 'px';
   console.log(b)
   document.querySelector('p').style.fontSize = b;
};

/*
Tips:
1. First, in the index.html file, add an onclick attribute to each button.
   The value of the attribute should be a call to the corresponding function
   (see class demos).

2. Then modify the body of the "makeBigger" and 
   "makeSmaller" functions (in between the curly braces)
   to target the body element and set it's font size.
*/
