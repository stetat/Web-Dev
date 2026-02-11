let camelize = (word) => {
    return word
        .split('-')
        .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}

console.log(camelize("bla-bla"));

let arr = [5, 3, 8, 1];

let filterRange = (arr, a, b) => {
    return arr.filter(item => (a <= item && item <= b));
}

let filtered = filterRange(arr, 1, 4);
console.log(filtered);


