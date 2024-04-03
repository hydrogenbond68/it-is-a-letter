function isLetter(ch) {
    return /[a-z]/i.test(ch);
}

console.log(isLetter('A')); // true
console.log(isLetter('@')); // false
console.log(isLetter('4567')); // false