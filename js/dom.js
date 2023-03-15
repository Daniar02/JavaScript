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