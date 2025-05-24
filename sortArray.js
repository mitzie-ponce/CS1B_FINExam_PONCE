let numberArray = prompt("Enter numbers separated by commas:").split(',').map(Number);
let nameArray = prompt("Enter names separated by commas:").split(',');

numberArray.sort((a, b) => b - a);
console.log("Sorted Numbers (Reverse):", numberArray);

nameArray.sort();
console.log("Sorted Names (Alphabetically):", nameArray);

let mergedArray = [...numberArray, ...nameArray];
console.log("Merged Array:", mergedArray);
