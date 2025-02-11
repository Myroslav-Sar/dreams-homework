
const stringArray = ["apple", "banana", "cherry"];
const numberArray = [1, 2, 3, 4, 5];
const booleanArray = [true, false, true, false];
const anyArray = [1, "hello", true, null];

stringArray.forEach(item => console.log(item));
numberArray.forEach(item => console.log(item * 2));
booleanArray.map(item => console.log(!item));
anyArray.map(item => console.log(typeof item));