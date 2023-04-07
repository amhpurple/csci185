const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe",
    "Alex"
];

// what do you want to repeat?
    // output
// how long do you want to repeat?
    // 11
    // names.length
// what do you want to change each time?
    // which slot is being accessed

// use a while loop to output a message for each
// item in the array:
const outputElement = document.querySelector('#output');
let i = 0;
while (i < names.length) {
    outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[i]}!</p>`);
    i++;
}



// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[0]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[1]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[2]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[3]}!</p>`);
