// Задание 1

let a = true + false;
console.log(a)

// true =1  false=0   1+0=1


let b = "number" + 15 + 3;
console.log(b)

// оператор + складывает как строку потому что первый операнд строчный
// number153

let c = 12 / "6";
console.log(c)

// Другие арифметические операторы работают только с числами и всегда преобразуют операнды в числа.
// 12/6=2


let d = 15 + 3 + "number";
console.log(d)
    // Здесь операторы работают один за другим. Первый + складывает два числа и возвращает 18,
    //  затем следующий + объединяет результат со строкой, производя действие 18 + 'number' = 18number .



let e = [1] > null;
console.log(e)

// 1 больше 0



let f = "foo" + +"bar";
console.log(f)

// сложение двух строк


let g = 'true' == true;
console.log(g)

// строка не равна 1 ???


let h = null == "";
console.log(h)

// чило не равно пустоте?  ???


let j = !!"false" == !!"true";
console.log(j)
    // равенство верно



let k = ['x'] == 'x';
console.log(k)
    // равенство верно

let l = [] + null + 1;
console.log(l)




let z = 0 || "0" && {};
console.log(z)

//    объект

let v = [1, 2, 3] == [1, 2, 3];
console.log(v)

// Задание 2

let i = 3;

while (i) {
    console.log(i--);

}
// 3
// 2
// 1

// последнее значение 1


// Задание 3

let num1 = 40;
while (num1 < 92) {
    console.log(num1)
    num1++
}

// Задание 4

let num2 = 11;
while (num2 < 341) {
    if (num2 % 4 == 0) {
        console.log(num2)

    }
    num2++

}

// Задание 5

for (let num3 = 100; num3 >= -5; num3--) {
    console.log(num3)
}


// Задание 6
let arrNumb = [1, 6, 8, 10, 0, 4];
for (let i = 0; i < arrNumb.lenght; i++) {
    if (i < 10 && i > 3) {

    }
}
console.log(i, arrNumb[i])



// Задача 7
let string = "-";
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
    { string = string + arr[i] + "-" }


}
console.log(string);


// Задача 8
let arrDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
let sanday = 'Вс',
    saturday = 'Сб';
for (let i = 0; i < arrDays.length; i++) {
    if (arrDays[i] === sanday || arrDays[i] === saturday) {
        console.log('Holiday:', arrDays[i])
    } else { console.log('WorkingDay:', arrDays[i]) }
}




// Задача 9
let arrDay = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
day = 'Пн';
for (let i = 0; i < arrDay.length; i++) {
    if (arrDay[i] === day) {
        console.log('Today:', arrDay[i])
    } else { console.log('Not today:', arrDay[i]) }
}



// задача 10
let iteration = 0;
for (let i = 1000; i >= 50; i = i / 2) {
    console.log(i);
    iteration++
};
console.log(iteration)