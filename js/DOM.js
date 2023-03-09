/*
    Что такое DOM?
    DOM (Document Object Model) - это объектное представление исходного HTML-кода документа.
    Благодаря ему мы можем обращаться к HTML элементам из JavaScript
*/

const panelText = document.querySelector(".panel").innerText = "New Text";
console.log(panelText);
document.querySelector(".input").value = "Text";