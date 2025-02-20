function sumArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}

const numbersArray = [1, 2, 3, 4, 5];
const stringsArray = ["10", "20", "30", "40", "50"];

console.log("Сума числового масиву:", sumArrayElements(numbersArray));
console.log("Сума масиву рядків:", sumArrayElements(stringsArray));