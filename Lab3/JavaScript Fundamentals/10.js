
let i = 3;

while (i) {
    alert( i-- );
}
// 1

i = 0;
while (++i < 5) alert( i );
// 1 2 3 4

i = 0;
while (i++ < 5) alert( i );
// 1 2 3 4 5

for (let i = 0; i < 5; i++) alert( i );
// 0 1 2 3 4

for (i = 0; i < 5; ++i) alert( i );
// 0 1 2 3 4

for(i = 2; i<=10; i++) {
    if(i % 2 == 0) alert(i);
}

i = 0;
while(i < 3) {
  alert( `number ${i}!` );
  i++;
}


while (true) {
    let userNumber = prompt("Enter a number: ");
    if (userNumber > 100) {
        alert("Thanks")
        break;
    } else if (!userNumber) {
        break;
    }
}

let n = prompt("Enter a number: ");
let check;
for(let i = 2; i<n; i++) {
    check = true;
    for(let j = i; j * j <= i; j++) {
        if(i % j == 0) {
            check = false;
            break;
        }
    }
    if(check) {
        alert(i);
    }

}

