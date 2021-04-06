// Задача 1

let arr1 = ["a", "b", "c"];
let arr2 = [1, 2, 3];
const arr3 = arr1.concat(arr2);
console.log('задача 1:', arr3);

// Задача 2
arr1.push(1, 2, 3);
console.log('задача 2:', arr1);

// Задача 3
let arr4 = [1, 2, 3];
console.log('задача 3:', arr4.reverse())

// Задача 4

let arr5 = [1, 2, 3, 4, 5]
console.log('задача 4:', arr5.slice(0, 3))

// Задача 5
console.log('задача 5:', arr5.slice(3))

// Задача 6

const obj1 = { js: 'test', jq: 'hello', css: 'world' };
console.log('задача 6:', Object.keys(obj1))

// Задача 7
let arr7 = [1, 2, 3];
const arrResult = [];
for (let i = arr7.length - 1; i > -1; i--) {
    arrResult.push(arr7[i])
}
console.log('задача 7:', arrResult);

// Задача 8

const arr8 = [
    [1, 2, 3],
    [4, 5],
    [6]
];
const arrResult8 = arr8.flat();
let result8 = 0;
for (let index = 0; index < arrResult8.length; index++) {

    result8 = result8 + arrResult8[index];

}
console.log('задача 8:', result8);

// Задача 9
const arr9 = [
    [
        [1, 2, 3],
        [4, 5],
    ],
    [6]
];
const arrResult9 = arr9.flat(2);

let result9 = 0;
for (let index = 0; index < arrResult9.length; index++) {

    result9 = result9 + arrResult9[index];

}
console.log('задача 9:', result9);

// Задача 10
const arrForCompare1 = [1, 2, 3, 4]
const arrForCompare2 = [1, 2, 3, 4]
const arrForCompare3 = ['hello', 'masha', 1]
const arrForCompare4 = [1, 2, 6, 4]


function CompareArr(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        for (let index = 0; index < arr1.length; index++) {
            if (arr1[index] !== arr2[index]) {
                return false;
            }

        }
        return true;
    }


}
console.log('задача 10:', CompareArr(arrForCompare1, arrForCompare4), CompareArr(arrForCompare1, arrForCompare3));


// Задача 11

const arr11 = [1, 2, 3, 4, 5, 6];
const arrResult11 = arr11.map(i => { return Math.pow(i, 2) });
console.log('задача 11:', arrResult11);

// Задача 12

const arr12 = [1, 2, -5, 6, -8, 0];
const arrResult12 = arr12.filter(i => i < 0);

console.log('задача 12:', arrResult12);


// Задача 13

const arr13 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log('задача 13:', arr13.reduce(reducer, 0));