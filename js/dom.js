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

// ########################################## JSON. ##########################################
/*
    JSON (JavaScript Object Notation) - простой формат обмена данными, удобный для чтения и написания как человеком,
    так и компьютером. Он основан на подмножестве языка программирования JavaScript, определенного в стандарте
    ECMA-262 3rd Edition - December 1999. JSON - текстовый формат, полностью независимый от языка реализации,
    но он использует соглашения, знакомые программистам C-подобных языков, таких как C, C++, C#, Java, JavaScript, Perl,
    Python и многих других. Эти свойства делают JSON идеальным языком обмена данными.
*/

// const obj = JSON.parse('{"a": 1}');
// console.log(obj);
// const str = JSON.stringify(obj);
// console.log(str);
