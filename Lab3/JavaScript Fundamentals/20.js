/*
let a = +prompt("first number: ", "0");
let b = +prompt("second number: ", "0");
alert(a + b);
*/

console.log(Math.round(6.35 * 10) / 10);

function readNumber() {
    let num;
    do {
        num = prompt("Enter a number");
        if(num === '\n' || num === null) {
            break;
        }
    } while (!isFinite(num));

    return num;
}

/*let i = 0;
while (i != 10) {
    i += 0.2; // i can never become 10, because of precision loss
}*/

function random(min, max) {
    return min + Math.random() * (max-min);
}

function randomInteger(min, max) {
    return Math.floor(min + Math.random() + max - min + 1);
}

