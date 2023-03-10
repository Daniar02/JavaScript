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
function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    // 1) document.querySelector('.notification').style.display = "block";
    document.querySelector('.notification').classList.add('notification_active');
    // 3) document.querySelector('.notification').classList.remove('notification_active');
    console.log(document.querySelector('.notification').getAttribute('class'));
    document.querySelector('.notification').setAttribute('class', 'notification');
    document.querySelector('.notification').setAttribute('key', '1');
    document.querySelector('.notification').setAttribute('user-id', "1");
    console.log(Number(document.querySelector('.notification').getAttribute('user-id')));

}

// document.querySelector('.input').addEventListener('keydown', (e) => {
//     if (e.code == "Enter") {
//         submitForm()
//     }
// });

function inputChanged(e) {
    if (e.code == "Enter") {
        submitForm()
    }
}

