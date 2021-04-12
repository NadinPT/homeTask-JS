// МЕТОДЫ ФУНКЦИЙ СТРОК

// let str = "aaa@bbb@ccc"
// let res = str.replaceAll('@', '!')

// console.log(('1'), res);

// // 3 способа

// let str1 = "aaa bbb ccc";
// console.log('2)' (str1.slice(4, 7)) console.log('2)' (str1.substr(4, 3)) console.log('2)' (str1.substring(4, 7)) console.log('3)' (str1.toUpperCase)


// let str2 = "AAA BBB CCC";
// console.log('3)' (str2.toLowerCase);


let str3 = '123456';
console.log(str3.split('').reverse().join(''))

let str4 = 'index.html';
let checkHtml = (a) => { return a.substr(-5) == '.html' }

console.log(checkHtml(str4));


let y = 4;
let cube = (i) => { return i * i * i };
console.log(cube(y))

let x = 10;
// let even = (i) => { return i % 2 === 0 };
// console.log(even(x));

let even = i => i % 2 == 0;
console.log(even(x));

// Object - тип данных, со своими полями 
// объявить объект можно двумя способами:
//  1.let obj=newObject()

//  2.let obj={} - Делаем так!!!!!!


let user = {
    name: 'Artem',
    isAdmin: true,
    age: 22
}

// console.log(user.isAdmin);
// console.log(user.age);
// console.log(user.name);
// delete user.name;
// console.log(user);
// delete user.age
// console.log(user['isAdmin']);

// in

console.log('isAdmin' in user);

// For   ...in..


// for (key in object){

// }

for (key in user) {
    console.log('задача про объекти и ключи', user[key]);

}



let sushi = {
    seaweed: 'Nori',
    rice: 120,
    filling: 'Salmon'
}

delete sushi.filling;
console.log(sushi);

sushi.vinegar = 8;
console.log(sushi);


console.log(Object.keys(sushi))

sushi.rice = 130
console.log(sushi);


// задача 4 
const deleteProps = (obj, arrProps) => {
    if (Array.isArray(arrProps) && typeof obj === 'object')
        arrProps.forEach((element) => {
            delete obj[element];
        });
    return obj;
};
console.log('задача 4:', deleteProps({ a: 1, b: 2, c: 3 }, ['a', 'c']));


const objIsCompare1 = {
    c: 1,
    n: 2,
    m: 3,
    v: 4,
    r: 34

}
const objIsCompare2 = {
    c: 5,
    u: 'age',
    m: 8,
    v: 4,
    r: 34
}



const compareIsObject = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    const res = {};
    for (let index = 0; index < obj2Keys.length; index++) {
        if (obj2Keys[index] === obj1Keys[index]) {
            res[index] = obj2Keys[index];
        }
    }
    return res;
};
console.log('задача 6:', compareIsObject(objIsCompare1, objIsCompare2));