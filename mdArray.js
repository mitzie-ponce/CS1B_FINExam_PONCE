let names = ["Luna", "Gabriel", "Elise"];
let ages = [24, 65, 21];

let multiDimensionalArray = names.map((name, index) => [name, ages[index]]);

multiDimensionalArray.forEach(item => {
    console.log(`Name: ${item[0]}, Age: ${item[1]}`);
});
