// // // МЕТОДЫ ФУНКЦИЙ СТРОК

// // // let str = "aaa@bbb@ccc"
// // // let res = str.replaceAll('@', '!')

// // // console.log(('1'), res);

// // // // 3 способа

// // // let str1 = "aaa bbb ccc";
// // // console.log('2)' (str1.slice(4, 7)) console.log('2)' (str1.substr(4, 3)) console.log('2)' (str1.substring(4, 7)) console.log('3)' (str1.toUpperCase)


// // // let str2 = "AAA BBB CCC";
// // // console.log('3)' (str2.toLowerCase);


// // let str3 = '123456';
// // console.log(str3.split('').reverse().join(''))

// // let str4 = 'index.html';
// // let checkHtml = (a) => { return a.substr(-5) == '.html' }

// // console.log(checkHtml(str4));


// // let y = 4;
// // let cube = (i) => { return i * i * i };
// // console.log(cube(y))

// // let x = 10;
// // // let even = (i) => { return i % 2 === 0 };
// // // console.log(even(x));

// // let even = i => i % 2 == 0;
// // console.log(even(x));

// // // Object - тип данных, со своими полями 
// // // объявить объект можно двумя способами:
// // //  1.let obj=newObject()

// // //  2.let obj={} - Делаем так!!!!!!


// // let user = {
// //     name: 'Artem',
// //     isAdmin: true,
// //     age: 22
// // }

// // // console.log(user.isAdmin);
// // // console.log(user.age);
// // // console.log(user.name);
// // // delete user.name;
// // // console.log(user);
// // // delete user.age
// // // console.log(user['isAdmin']);

// // // in

// // console.log('isAdmin' in user);

// // // For   ...in..


// // // for (key in object){

// // // }

// // for (key in user) {
// //     console.log('задача про объекти и ключи', user[key]);

// // }



// // let sushi = {
// //     seaweed: 'Nori',
// //     rice: 120,
// //     filling: 'Salmon'
// // }

// // delete sushi.filling;
// // console.log(sushi);

// // sushi.vinegar = 8;
// // console.log(sushi);


// // console.log(Object.keys(sushi))

// // sushi.rice = 130
// // console.log(sushi);


// // // задача 4 
// // const deleteProps = (obj, arrProps) => {
// //     if (Array.isArray(arrProps) && typeof obj === 'object')
// //         arrProps.forEach((element) => {
// //             delete obj[element];
// //         });
// //     return obj;
// // };
// // console.log('задача 4:', deleteProps({ a: 1, b: 2, c: 3 }, ['a', 'c']));



// // // Области видимости!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // const str = 'Hello'
// // console.log(str)

// // if (true) {
// //     const man = "Man"
// // }
// // console.log(man);
// // console.log(str)

// // const oleg = 'Oleg'

// // function run() {
// //     const message = 'Hello'
// //     if (true) {
// //         const man = "Man"
// //         console.log(message);

// //     }
// //     console.log(man);


// // }
// // run()


// // function foo1() {
// //     let num1 = 5
// //     const num2 = 10
// //     let num3 = 23

// //     function foo2() {
// //         console.log(num1);
// //         console.log(num2);
// //         console.log(num3);

// //     }
// //     foo2()

// // }
// // foo1()

// // let a = 35

// // function b() { return a; }
// // console.log(b(a))

// // Коллбэк

// // function firsr(){
// //     setTimeout(function(){
// //         console.log(1)};500);
// //     })
// // }
// // first()
// // tow()

// function doExample(a, callback) {
//     console.log(a)
//     callback()
// }
// let func1 = function() {
//     console.log(2)

// }
// doExample(1, func1)



// let q = document.title;
// document.title = 'my page'
// console.log(q);


// const url = document.URL
// console.log(url);


// const domain = document.domain;

// console.log(domain);

// const div = document.getElementById('World');
// console.log(div);

// // const div1 = document.querySelector(".container")
// // console.log(div1)


// const div1 = document.querySelectorAll(".container"); {
//     for (let i = 1; i < div1.length; i++) {
//         if (i == 2)
//             break
//         console.log(div1[i])
//     }
// }

// const div2 = document.querySelector(".container")
// div2.style.color = 'red'
// console.log(div2);

// const div3 = document.querySelector(".botton")

// div3.classList.add("hero-slider")
// div3.classList.remove("botton")
//     // remove удаляет классы

// div3.classList.add("botton")
//     // add добавляет класс
// div3.classList.contains("botton")


// console.log("1)", div3)
// console.log(div3.classList.contains("botton"))
// console.log(div3.classList.contains("hero-slider"))
// console.log(div3.classList.contains("navbar"))
//     // contains показывает классы дивов



// div3.classList.toggle("botton")
//     //  toggle меняет один класс на другой
// div3.classList.toggle("navbar")
// console.log(div3.classList)


// const div5 = document.querySelector(".box")
// console.log(div5.id);
// console.log(div5.className);
// console.log(div5.title);


// div5.className = "bigBox"
// console.log(div5);

// console.log(div5.getAttribute("id"));
// console.log(div5.getAttribute("class"));
// console.log(div5.getAttribute("title"));
// console.log(div5.getAttribute("hero"));


// div5.setAttribute("good", "dog")
// console.log(div5)
// div5.removeAttribute("class")
// console.log(div5);

// const div5 = document.createElement("div");
// div5.id = "one";
// div5.class - "book";
// console.log(div5);

// const btn = document.querySelector(".box");
// btn.onclick = function() {
//     alert('hi user')


// }

let btn = document.querySelector(".btn")
btn.addEventListener("click", buttonClick)

function buttonClick() {
    let inputHello = document.getElementById('npt')
    let inputBye = document.getElementById('vel')

    let a = inputBye.value
    inputBye.value = inputHello.value
    inputHello.value = a



}



let r = 56;

function showMeRerult(r) {

    // let r = 5
    return r + 98

}
console.log(showMeRerult(null))

// console.log(r)