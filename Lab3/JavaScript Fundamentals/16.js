let user = {};
user["name"] = "John";
user["surname"] = "Smith";
user.name = "Pete";
delete user["name"];

let test = {};
function isEmpty(object) {
    for (let key in object) {
        return false;
    }
    return true;
}

alert(isEmpty(test));
alert(isEmpty(user));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for(let key in salaries) {
    sum += salaries[key];
}

alert(sum);

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

let multiplyNumeric = (menu) => {
    for (let key in menu) {
        if (typeof(menu[key]) == "number") {
            menu[key] = 2 * menu[key];
        }
    }
}

