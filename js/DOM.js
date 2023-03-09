/*
    Что такое DOM?
    DOM (Document Object Model) - это объектное представление исходного HTML-кода документа.
    Благодаря ему мы можем обращаться к HTML элементам из JavaScript
*/

// const panelText = document.querySelector(".panel").innerText = "New Text";
// console.log(panelText);
// document.querySelector(".input").value = "Text";

// ########################################## Обработка нажатий. ##########################################
// document.querySelector('.button').addEventListener('click', function () {
//     const input = document.querySelector('.input').value;
//     if (!input) {
//         return
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = "";
// });

// function submitForm() {
//     const input = document.querySelector('.input').value;
//     if (!input) {
//         return
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = "";
// }

// ########################################## Обработка событий клавиатуры. ##########################################
// function submitForm() {
//     const input = document.querySelector('.input').value;
//     if (!input) {
//         return
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
// }
//
// // document.querySelector('.input').addEventListener('keydown', (e) => {
// //     if (e.code == "Enter") {
// //         submitForm()
// //     }
// // });
//
// function inputChanged(e) {
//     if (e.code == "Enter") {
//         submitForm()
//     }
// }
