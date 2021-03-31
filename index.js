let bool = false;
bool = String(bool)
console.log(typeof bool)


// приведение к числовому типу

let str = "464";
let num = Number("|\t \n");
console.log(num)

// приведение к boolean

let boole = Boolean();
console.log(boole)

let b = "false" + "bar" + "true";
console.log(b)
    //-//-//-//-

console.log(null === undefined)
console.log(null == undefined)

let bool1 = !true
console.log(bool1)

// let answer = prompt("Сколько тебе лет?", "")


// Условные операторы
// if (answer < 18) {
//     console.log("Школьник!!!")
// } else {
//     console.log("Взрослый!!!")

// }



// if (ans < 18 || ans > 40) {
//     console.log("hello")
// } else {
//     console.log("Bye!!")

// }



// if (условие1 || условие2 || условие3) {
//     console.log("1")

// } else {
//     console.log("good")
// }

// задачи

let login = "nadya@mail.ru";
let password = "petr432";
let loginImput = prompt("Your login");
let passwordInput = prompt("Your password");

if (loginImput === login && passwordInput === password) {
    console.log("Good")


} else {
    console.log("Error")

}


let arrNum = [1, 2, 3, 8]
if (arrNum[1] < 4) {
    console.log("true")

}
if (arrNum[2] < 4) {
    console.log("true")
}

if (arrNum[3] < 4) {
    console.log("true")
}
if (arrNum[8] < 4) {
    console.log("false")
}

// циклы






// for (let n = 1; n < 10; n++) {
//     for (let g = 1; g < 10; g++) {
//         console.log(n, g)



//     }


// }

// let k = 0
// while (k < 13) {
//     console.log(k)
//     if (k == 7) break; выкидывает из цикла

// }

// let c = 31;
// while (c < 61) {
//     console.log(c)
//     c++

// }

let i = 10;
while (i < 270) {
    if (i % 10 == 0) {
        console.log(i)

    }
    i++




}