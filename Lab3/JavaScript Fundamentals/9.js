/*
alert( null || 2 || undefined ); = 2
alert( alert(1) || 2 || alert(3) ); = alerts 1 then 2;
alert( 1 && null && 2 ); = null;
alert( alert(1) && alert(2) ); = alerts 1 then undefined;
alert( null || 2 && 3 || 4 ); = alerts 3;

let result = age >= 14 && age <= 90;

let resul0 = !(age >= 14) && !(age <= 90);
let resul1 = age < 14  || age > 90;

if (-1 || 0) alert( 'first' ); -1
if (-1 && 0) alert( 'second' ); 0
if (null || -1 && 1) alert( 'third' ); 1
*/

let userLogin = prompt("Enter your login: ", '');
if(userLogin === 'Admin') {
    let password = prompt('Enter your password: ', '');
    if(password == 'TheMaster') {
        alert("Welcome");
    } else if (password == '' || password == null) {
        alert("Canceled");
    } else {
        alert("Wrong Password");
    }
} else if(userLogin == '' || userLogin == null) {
    alert("Canceled");
} else {
    alert('I dont know you.');
}

