// Задание1

let str = "Привет";
console.log(typeof str)

let num = 123;
console.log(typeof num)

let flag = true;
console.log(typeof flag)

let txt = "true";
console.log(typeof txt)

// Задание2

let a1 = 5 + 3;
console.log(a1)

let a2 = 5 - 3;
console.log(a2)

let a3 = 5 * 3;
console.log(a3)

let a4 = 5 / 3;
console.log(a4)

let a5 = a1 + 3;
console.log(a5)


// Задание3

let a6 = 5 % 3;
console.log(a6)

let a7 = 3 % 5;
console.log(a7)

let a8 = 5 + "3";
console.log(a8)

let a9 = "5" - 3;
console.log(a9)

let a10 = 75 + " кг ";
console.log(a10)


// Задание4

let heigh = 23
let width = 10
let s = heigh * width
console.log(s + 'см кв')

// Задание5

let heighС = 10;

// Oбъем цилиндра находится по формуле V= число пи(п) * радиус в квадрате(r*r) * высота цилиндра(h)

let p = 3.14;
let dC = 4;
let r = dC / 2;
let r2 = dC / 2 * dC / 2;
let v = p * r2 * heighС;
console.log(v)

// Задание6
let n = 3;
let m = 4;
let n1 = Math.pow(n, 2);
let m1 = Math.pow(m, 2);
let k = Math.sqrt(n1 + m1);
console.log(k)

// Задание *2
let S = 2000000;
let procent = 10;
let years = 5;
let perepl = S / 100 * procent * years;
console.log(perepl)

// ИЛИ если у нас идет ежегодный пересчет 10 процентов от оставшейся суммы

let fulSum = 2000000;
let persent = 0.1;
let nYears = 5;
let result = 0;
let yearsPayment = fulSum / nYears;

for (let index = 0; index < nYears; index++) {
    result = result + fulSum * persent;
    fulSum = fulSum - 400000;



}
console.log(result);



let resultPref = 0;
let currentResult = 1;
let nFib = 12;
for (let index = 0; index < nFib; index++) {
    let tempResult = currentResult;
    currentResult = currentResult + resultPref;
    resultPref = tempResult;

    console.log('текущее значение:', currentResult);
}