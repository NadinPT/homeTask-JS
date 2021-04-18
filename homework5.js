// задача 1
(function() {
    const btn = document.querySelector(".btnFirstTask")

    btn.addEventListener("click", () => {
        alert("Привет")
    })

})();


// Задача 2 (Немного усовершенствовала.
// при втором нажатии первоначальный текст возвращается)
(function() {
    const btn = document.querySelector(".btnSecondTask")
    const inpt = document.querySelector(".inptSecondTask")
    const text = '!!!';
    const text2 = '???';
    btn.addEventListener("click", () => {
        inpt.value = inpt.value === text2 ? text : text2
    })

})();

// Задача 3
(function() {
    const btn = document.querySelector(".btnThirdTask")
    const inpt = document.querySelector(".inptThirdTask")


    btn.addEventListener("click", () => {
        alert(inpt.value)
    })

})();

// Задача 4
(function() {
    const btn = document.querySelector(".btnFourthTask")
    const inpt = document.querySelector(".inptFourthTask")


    btn.addEventListener("click", () => {
        alert(Math.pow(inpt.value, 2))
    })

})();
// Задача 5
(function() {
    const btn = document.querySelector(".btnFiveTask")
    const inpt = document.querySelector(".inptFiveTask")
    const inpt2 = document.querySelector(".inptFiveTask2")



    btn.addEventListener("click", () => {
        let srt1 = inpt.value
        inpt.value = inpt2.value
        inpt2.value = srt1





    })

})();

// задача 6
(function() {
    const btn = document.querySelector(".btnSixTask")

    btn.addEventListener("click", () => {
        btn.innerHTML = "Новый текст кнопки"
    })

})();

// Задача7
(function() {
    const btn = document.querySelector(".btnSevenTask")
    const inpt = document.querySelector(".inptSevenTask")


    btn.addEventListener("click", () => {
        inpt.style.color = "red"
    })

})();

// Задача 8
(function() {
    const btn = document.querySelector(".btnEighthTask")
    const btn2 = document.querySelector(".btnEighthTask2")
    const inpt = document.querySelector(".inptEighthTask")


    btn.addEventListener("click", () => {
        inpt.disabled = true;
    })
    btn2.addEventListener("click", () => {
        inpt.disabled = false;
    })

})();

// ЗАДАЧИ ДЛЯ РЕШЕНИЯ

// задача 1
function alertHello() {
    alert('Привет!!!')
}
// Задача 2
// Используем фуенцию alertHello

// Задача 3
// Используем фуенцию alertHello

// Задача 4
// используем фуенцию alertHello

// Задача 5
(function() {
    const btn = document.getElementById("SolveTaskIdFive")
    const inpt = document.getElementById("FirstKy")


    btn.addEventListener("click", () => {
        alert(inpt.value)
    })

})();

// Задача 6
(function() {
    const btn = document.getElementById("SolveTaskIdSix")
    const inpt = document.getElementById("ChangeText")


    btn.addEventListener("click", () => {

        inpt.value = "Ой, я поменял свой текст!"
    })

})();
// Задача 7
(function() {
    const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMMkT_Znr_Yq-0D69ehaevDVJot3oPJYZ4gAjjKVJPSzKDMOHrcdz2qmYK7PeW55EW-U&usqp=CAU'
    const btn = document.getElementById("SolveTaskIdSeven")
    const img = document.getElementById("ChangeImg")


    btn.addEventListener("click", () => {

        img.src = url;
    })

})();