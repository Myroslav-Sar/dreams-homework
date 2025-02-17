const sumArray = (arr) => arr.reduce((acc, val) => acc + val, 0);

const numbers = [1, 2, 3, 4, 5];
const strings = ["1", "2", "3", "4", "5"];

console.log(sumArray(numbers)); // 15
console.log(sumArray(strings.map(Number))); // 15