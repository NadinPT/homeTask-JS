// let arrNumbForm = [375296126252, 257226609, 296685453, 655768679]

// for (let x = 0; x < arrNumbForm.length; x++) {



//     switch (arrNumbForm[x]) {
//         case 375296126252:
//             console.log('номер Маши')
//             break;
//         case 257226609:
//             console.log('номер Паши')
//             break;
//         case 296685453:
//             console.log('номер Тани')
//             break;
//         default:
//             console.log('номер не найден')

//     }
// }


// // let arr = [1, "cool", true, 34, false, 85, 'FALSE']
// // arr.push(18)
// // console.log(arr)

// // добавляет 18 в массив

// let arr = [1, "cool", true, 34, false, 85, 'FALSE']
// arr.pop()
// console.log(arr)
//     // удаляет последный элемент из массива
// arr.shift()
//     // убираетпервый первый эт из массива

// arr.unshift()
//     // добавляет первый элемент в массив
// arr.reverse()
//     // переворачивает

// // исп для работы со строками - сплит
// let str = "Маша привет это я Артем"
// let arrStr = str.split(" ")
// console.log(arrStr)


// //  coудиняет  join соединяет эт массива преобразуя их в строку
// let str2 = ["Nadya  Masha Dasha"]
// let arr2 = str2.join(":")
// console.log(arr2)

// //  includes  включает
// let d = [1, 2, 3, 4, "jhbkj", null];
// let r = d.includes(0)
// console.log(r)

// // fill заполняет
// let t = [3, 4, "jhbkj"]
// t.fill(1, 3)
// console.log(t)


// // let arrS = [1, 4, 6, 7]
// // let arrG = [5, 10, 13, 19]
// // e = arrS.concat(arrG)
// // consol.log(e)


// // Объекты

// // const arrObj = [
// //         { id: 1, name: 'Pasha' },
// //         { id: 2, name: 'Nadya' },
// //         { id: 3, name: 'Tanya' },
// //         { id: 3, name: 'Mark' }

// // ]
// // h = obj.name
// // console.log(h)

// consol.log(arrObj.find(el => el.id === 1))
//     // consol.log(arrObj.find(el => el.name === 'Pasha'))
//     // consol.log(arrObj.findIndex(el => el.id === 20))

// arrObj.forEach(el => console.log(el))

// // flat

// let x5 = [
//     [1, 2],
//     [2, 3], 5
// ]
// let arr5 = x5.flat()
// console.log(arr5)

// // Filter
// const arrObj = [
//         { id: 1, name: 'Pasha' },
//         { id: 2, name: 'Nadya' },
//         { id: 3, name: 'Tanya' },
//         { id: 3, name: 'Mark' }
//     ]
//     // let z = arrObj.filter(el => id === 1)
//     // console.log(z)
// let z = arrObj.filter(el => el.name + "!"
//         console.log(z)

//         // создает новый

//         // some
//         // every
//         // reduce
//         // slice
//         // splice

function ShowConsone() {
    let str = "Маша привет это я Артем"
    let arrStr = str.split(" ")
    console.log(arrStr)

}
ShowConsone()
ShowConsone()
ShowConsone()

// это была function dicloration

// let sum=function(){} - function expression

// arrow function
let func = (a, b, c, d) => {

}