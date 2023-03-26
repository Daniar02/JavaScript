/*
    Что такое DOM?
    DOM (Document Object Model) - это объектное представление исходного HTML-кода документа.
    Благодаря ему мы можем обращаться к HTML элементам из JavaScript
*/

// const panelText = document.querySelector(".panel").innerText = "New Text";
// console.log(panelText);
// document.querySelector(".input").value = "Text";

// ##################################  Получение элементов со страницы ##################################
// const box = document.getElementById('box');
// console.log(box);
//
// const btns = document.getElementsByTagName('button')[1]; //(2-элемент массива)
// console.log(btns); //[1];(2-элемент массива внутри од-эл[0])
//
// const circles = document.getElementsByClassName('circle');
// console.log(circles);
//
// const hearts = document.querySelectorAll('.heart');
// hearts.forEach(item => {
//     console.log(item);
// });
//
// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);
//
// const oneHeart1 = document.querySelector('div');
// console.log(oneHeart1);

// ################################## Действия с элементами на странице ##################################
// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),
//       hearts = wrapper.querySelectorAll('.heart'),
//       oneHeart = wrapper.querySelector('.heart');
// // box.style.backgroundColor = 'blue';
// // box.style.width = '500px';
// box.style.cssText = "background-Color: blue; width: 500px";
//
// btns[2].style.borderRadius = '100%';
// circles[0].style.backgroundColor = "red";
//
// // for (let i = 0; i < hearts.length; i++) {
// //     hearts[i].style.backgroundColor = "#000";
// // }
//
// // hearts.forEach(item => {
// //     item.style.backgroundColor = '#000';
// // });
//
// const div = document.createElement('div');
// // const text = document.createTextNode('Тут был я');
//
// div.classList.add('black');
// document.body.append(div);
// // wrapper.append(div); // (конец)
// // wrapper.appendChild(div);
// // wrapper.prepend(div);// (начало)
//
// // hearts[0].before(div);
// // hearts[2].after(div);
//
// // wrapper.insertBefore(div, hearts[1]);
//
// // circles[0].remove(); //(удалить)
// // wrapper.removeChild(hearts[1]);
//
// // hearts[0].replaceWith(circles[0]);
// // wrapper.replaceChild(circles[0],hearts[0]);
//
// // div.innerHTML = "<h1>Hello World </h1>";
// // // div.textContent = "Hello World";
// div.insertAdjacentHTML("afterend", "<h2>Hello World</h2>");

// ########################### События и их обработчики ###########################
// const btns = document.querySelectorAll('button'),
//       overlay = document.querySelector('.overlay');

// // btns.onclick = function() {
// //     alert('Click');
// // };
// // btns.onclick = function() {
// //     alert('Second click');
// // };

// // btn.addEventListener('click', () => {
// //     alert('Click');
// // });

// // let i = 0;
// const deleteElement = ('mouseenter', (e) => {
//     console.log(e.target);
//     console.log(e.type);
//     // i++;
//     // if (i == 2) {
//     //     btn.removeEventListener("click", deleteElement);
//     // }
//     // e.target.remove();
// });
// // btns.addEventListener("click", deleteElement);
// // overlay.addEventListener("click", deleteElement);

// btns.forEach(btn => {
//     btn.addEventListener("click", deleteElement, {once: true});
// });

// const link = document.querySelector('a');
// link.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log(event.target);
// });


// // btn.addEventListener('mouseenter', (e) => {
// //     // alert('Second click');

// //     // console.log(e.target);

// //     // e.target.remove();
// //     // console.log('Hover');
// // });

// ########################## Навигация по DOM - элементам, data-атрибуты, преимущество forof ##########################
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
//
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);
//
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);
//
// console.log(document.querySelector('[data-current="3"').nextSibling);
// console.log(document.querySelector('[data-current="3"').previousSibling);
// console.log(document.querySelector('[data-current="3"').nextElementSibling);
//
// for (let node of document.body.childNodes) {
//     if (node.nodeName == "#text") {
//         continue;
//     }
//     console.log(node);
// }

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
//     // 1) document.querySelector('.notification').style.display = "block";
//     document.querySelector('.notification').classList.add('notification_active');
//     /* Упражнение - сохранение JSON. */
//     const textString = JSON.stringify({
//         text: input
//     });
//     localStorage.setItem('text', textString)
//
//     // 3) document.querySelector('.notification').classList.remove('notification_active');
//     // console.log(document.querySelector('.notification').getAttribute('class'));
//     // document.querySelector('.notification').setAttribute('class', 'notification');
//     // document.querySelector('.notification').setAttribute('key', '1');
//     // document.querySelector('.notification').setAttribute('user-id', "1");
//     // console.log(Number(document.querySelector('.notification').getAttribute('user-id')));
//
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

// ####################################### Упражнение - получение DOM элементов. #######################################
// console.log(document.querySelector('.one').innerText);
// console.log(document.querySelector('.one ~ div').innerText);
// console.log(document.querySelector('#two').innerText);
// console.log(document.querySelector('[user-id="4"]').innerText);
// /* Альтернативный пути */
// console.log(document.querySelectorAll('.one')[0].innerText);
// console.log(document.querySelectorAll('.one')[1].innerText);
// console.log(document.getElementById('two').innerText);

// ########################################## Добавление html на лету ##########################################
// const panelText = 'Панель';
// const panelClass = 'button';
// const newElement = document.createElement('div');
// newElement.setAttribute('user', '1');
// newElement.classList.add('panel');
// // newElement.innerText = "Кнопка";
// newElement.innerHTML = `<button class="${panelClass}">${panelText}</button>`
// document.querySelector('.test').appendChild(newElement);

// ########################################## Local storage. ##########################################
/*
    Объекты веб-хранилища localStorage и sessionStorage позволяют хранить пары ключ/значение в браузере
 */
// localStorage.setItem('token', "sting");
// localStorage.setItem('token1', 1);
// localStorage.setItem('token2', true);
// const token1 = localStorage.getItem("token1")
// console.log(typeof token1);
// localStorage.removeItem('token');
// localStorage.clear();

// ###################################### Рекурсия ######################################
// function pow(x, n) {
//     let result = 1;
//
//     // умножаем result на x n раз в цикле
//     for (let i = 0; i < n; i++) {
//         result *= x; //(result = x * result;)
//     }
//     return result;
// }
//
// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n -1);
//     }
// }
//
// console.log(pow(2, 2)); // 4
// console.log(pow(2, 3)); // 8
// console.log(pow(2, 4)); // 16

// let students = {
//     js: [{
//         name: 'john',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],
//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],
//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }],
//         semi: {
//             students: [{
//                 name: "Test",
//                 progress: 100
//             }]
//         }
//     }
// };
// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;
//
//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;
//
//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;
//
//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }
//
//     return total / students;
// }
// console.log(getTotalProgressByIteration(students));
//
// ///////// Рекурсия ////////
// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//         let total = 0;
//
//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }
//
//         return [total, data.length];
//     } else {
//         let total = [0, 0];
//
//         for (let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressByRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }
//         return total;
//     }
// }
// const result = getTotalProgressByRecursion(students);
//
// console.log(result[0]/result[1]);

// ###################################### События на мобильных устройствах ######################################
// // touchstart
// // touchmove
// // touchend
// // touchenter
// // touchleave
// // touchcancel

// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');
//
//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault();
//
//         console.log('start');
//         console.log(e.targetTouches);
//     });
//
//     box.addEventListener('touchmove', (e) => {
//         e.preventDefault();
//
//         console.log(e.targetTouches[0].pageX);
//     });
//
//     // box.addEventListener('touchend', (e) => {
//     //     e.preventDefault();
//
//     //     console.log('End');
//     // });
// });
// // touches
// // targetTouches
// // changetTouches

// ###################################### Async, defer, динамические скрипты ######################################

// const p = document.querySelectorAll('p');
// console.log(p);

// function loadScript(src) {
//     const sctipt = document.createElement('script');
//     sctipt.src = src;
//     sctipt.async = false;
//     document.body.append(sctipt);
// }

// loadScript("js/test.js");
