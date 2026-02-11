let ucFirst = (word) => {
    if (!word) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
}

let checkSpam = (str)  => {
    str = str.toLowerCase();
    return str.includes("viagra") || str.includes("xxx");
}

let truncate = (str, maxLength) => {
    if(str.length > maxLength) {
        str = str.slice(0, maxLength - 1) + '...';
    }

    return str;
}

let extractCurrencyValue = (str) => {
    return +str.slice(1);
}

