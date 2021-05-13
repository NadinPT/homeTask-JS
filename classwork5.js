// let form = document.getElementById("formAdress")
//     // console.log(form);
// console.log(form.elements.length);

// let a = form.elements[""].disable = true
// console.log(a);






// let form2 = document.getElementById("formName")
//     // console.log(form);
// console.log(form.elements.length);
// console.log(form.elements["adrname"]);


// let formA = document.forms["first"]
// let btn = formA.elements["clickOn"]
// let func = () => {
//     btn.disabled = true;
//     formA.reset()
// }
// btn.addEventListener('click', func);


// let getform = document.forms["four"]
// let input = getform.elements["secondInput"]
// let btn = getform.elements["three"]
// let str = 'haha'
// let str2 = 'kuku'
// let func = (event) => {
//     event.preventDefault()
//     input.value = input.value === str ? str2 : str
// }
// btn.addEventListener('click', func);

// Задача 3 на checkBoxes
// const form = document.forms['taskcheckbox'];
// const textInput = form.elements['h1'];
// const checkBox1 = form.elements['firstCheckbox'];
// const checkBox2 = form.elements['secondCheckbox'];
// // form.onSubmit = ()=>{alert()}
// form.addEventListener('submit', (ev) => {
//         ev.preventDefault();
//         console.log('input text:', textInput.value, ', checked checkboxes:', checkBox1.checked ? checkBox1.name : '', checkBox2.checked ? checkBox2.name : '')

//     })
//     // console.log()

// try {
//     hello

// } catch (error) {
//     console.log("error")
// }


// let car = {
//     engine: 'MX',
//     isSport: true

// }

// try {
//     if (!car.isSport) {
//         throw new SyntaxError('IsSport not correct or false')
//     }

// } catch (error) {
//     console.log(error);

// } finally {

//     console.log('finally');
// }

// localStorage.setItem('user', true)
// console.log(localStorage.getItem('user'));
// localStorage.removeItem('user')
// localStorage.setItem('car', true)
// console.log(localStorage.getItem('car'));



// sessionStorage.setItem('name', true)
// console.log(sessionStorage.getItem('name'));
// sessionStorage.removeItem('name');
// sessionStorage.setItem('secondname', true);
// console.log(sessionStorage.getItem('secondname'));

// function f() {
//     this.x = 5
//     console.log(this === window);

// }
// let o = new f()
// console.log(o.x === 5);




// 2. В методе объекта
// 


// let table = {
//     info: "Hello,my name",
//     secondInfo: "I was in"

// }

// function showFullInfo() {
//     console.log('задача на this', this.info + "" + this.secondInfo);

// }
// showFullInfo.call(table)
// let table = {
//     info: "Hello,my name",
//     secondInfo: "I was in"

// }

// function showFullInfo(firstParam, secondParam) {
//     console.log('задача на this', this[firstParam] + " " + this[secondParam]);

// }
// showFullInfo.call(table, ['info', 'secondInfo'])




// let user = {
//     name: 'Jimmy',
//     go: function() { console.log(this.name) }
// }
// user.go()


let secondname = {
    name: 'Petrashko',
    go: function() { console.log(this.name) }
}
secondname.go





// console.log(this);


// let calculator = {
//     sum() {
//         return this.a + this.b;

//     },
//     mul() {
//         return this.a * this.b;

//     },
//     read() {
//         this.a = +prompt(' введите  число a', 0);
//         this.b = +prompt('введите число b', 0);

//     }
// }
// calculator.read()
// alert(calculator.sum())
// alert(calculator.mul())

// function Person(name, age) {
//     this.name = name
//     this.age = age

// }
// Person.prototype.sayName = function() {
//     console.log(this.name);

// }
// Person.prototype.getOlder = function(years) {
//     this.age += years
// }


// let person = new Person('Sam', 32)
// console.log(person.sayName())
// console.log(person);



// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     sayName() { console.log(this.name); }
//     getOlder(years) { this.age += years }
// }
// let person = new Person('Din', 34)
// console.log(person);
// console.log(person.sayName());
// console.log(person.getOlder());


// class Car {
//     gender = 'male'
//     constructor(name, year, color) {
//         this.name = name
//         this.year = year
//         this.color = color
//     }
//     changeColor(newColor) { this.color = newColor }


// }
// let car = new Car('BMW', 2012, 'red');
// car.changeColor('black')
// console.log(car);



// new Promise(function(resolve, reject) {

// })

// let promise = new Promise((resolve, reject(new Error(failure))) => {
//     resolve('sucess')
// })
// promise.then(result => console.log(result + 'sucess' + 'OK'),
//     error => console.log('Reject' + error))






// let headers = {
//     'Content-Type': 'application/json',
//     'accept': '*/*'
// };
// let url = 'https://demo-api.it-shatle.by/auth/signIn';
// axios.post(url, {
//     email: 'nadya@mail.ru',
//     password: "11111asd",

// }, headers).then(res => {
//         console.log(res);
//     },
//     error => console.log(error + 'TEST'))




// let array = [1, 2, 3];

// console.log(array.map(el => el + 1));

// Array.prototype.myMap = function(callback, thisArgs) {
//     let outArray = [],
//         thisContext
//     if (arguments.length > 1) {
//         thisContext = thisArgs
//     }
//     for (let i = 0; i < this.length; i++) {


//         outArray.push(callback.call(thisContext, this[i], i, this))

//     }

//     return outArray


// }
// console.log(array.myMap(el => el + 1));



// //filter
// Array.prototype.myFilter = function(callback, thisArgs) {
//     let outArray = [],
//         thisContext
//     if (arguments.length > 1) {
//         thisContext = thisArgs
//     }
//     for (let i = 0; i < this.length; i++) {


//         if (callback.call(thisContext, this[i], i, this))
//             outArray.push(this[i])

//     }

//     return outArray
// }
// console.log(array.myFilter(array % 2 == 0));

//reduce
// let arr = [2, 3, 4, 1, 5]
// let result = arr.reduce((max, currentValue) => max > currentValue ? max : currentValue)
// console.log(result);


var Robot = function(name) {
    this.name = name
}

function add(op1, op2) {
    this.name = this.name || 'Human';
    return this.name + "can count to" + (op1, op2)
}
var voltron = new Robot("Voltron")
console.log(add(0, 1));
console.log(add.call(voltron, 1, 2));
console.log(add.apply(voltron, [20, 30]));
let wrapper = add.bind(voltron, "drinking", "beer")
console.log(wrapper);

// setTimeout(() => {
//     console.log(add.bind(voltron)('drinking', 'beer'))) 1000
// })


function delay(duration) {
    return new Promise((resolve, reject) =>
        setTimeout(() => (resolve, duration)))
}

function logHi() {
    console.log('hi');

}
delay(2000).then(logHi)


// Кнопка

// let TimeOutHolder = {}
// let btn = document.getElementById('button_One')
// btn.addEventListener('click',
//     func)

// function func() {
//     clearInterval(TimeOutHolder)
//     TimeOutHolder = setTimeout(() => alert('hello world'), 2000)
// }


// let intervalHolder = {}
// let flag = true
// if (flag == true) {
//     function func() {
//         clearInterval(intervalHolder)
//         intervalHolder = setInterval(() => console.log('You are welcome'), 3000)


//     }
// }
// let btn = document.getElementById('button_One')
// btn.addEventListener('click', func)