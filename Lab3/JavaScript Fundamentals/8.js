if ("0") {
    alert( 'Hello' );
} // yes, alert shows.

let userGuess = prompt("What is the “official” name of JavaScript?");
if(userGuess === "ECMAScript") {
    alert("Right!");
} else {
    alert("You don’t know? ECMAScript!");
}

let userNumber = Number(prompt("Enter a number"));
let message = userNumber > 0 ? 1 : userNumber === 0 ? 0 : -1;
alert(message);

/*
let result;
(a + b < 4) ? result = 'Below' : result = 'Over';
*/

/*
let message;

login == 'Employee' ?
    message = 'Hello' :
login == 'Director' ?
    message = 'Greetings' :
 login == '' ?
    message = 'No login' :
    message = '';
 */
