/*
    Функция — это самостоятельный блок кода, который можно, один раз объявив, вызывать столько раз, сколько нужно.
    Функции — это механизм для многократного использования частей кода.

    По сути функция:
        группирует инструкции;
        позволяет использовать код многократно.

    Function - ключевое слово.
    userName - актуальное имя.
    {инструкции, содержимое}
*/

// Создаем простую функцию
// const ourFirstFunction = function () {
//     console.log("Привет мир!");
// };
// ourFirstFunction();
//
// const seyHelloTo = function (name) {
//     console.log("Привет, " + name + "!");
// };
// seyHelloTo("Ник");
// seyHelloTo("Анна");
//
// const drawCats = function (howManyTimes) {
//     for (let i = 0; i < howManyTimes; i++) {
//         console.log("=^.^=");
//     }
// };
// drawCats(5);

// const printMultipleTimes = function (howManyTimes, whatToDraw) {
//     for (let i = 0; i < howManyTimes; i++) {
//         console.log(i + " " + whatToDraw);
//     }
// };
// printMultipleTimes(5, "=^.^=");
// printMultipleTimes(4, "^_^");

// const double = function (number) {
//     return number * 2;
// };
// console.log(double(3 * 2));

// return
// const fifthLetter = function (name) {
//     if (name.length < 5) {
//         return;
//     }
//     return "Пятая буква вашего имени: " + name[4] + ".";
// };
// console.log(fifthLetter("Николай"));

// Много кратно использование return вместо конструкции if...else
// const modalForScore = function (score) {
//     if (score < 3) {
//         return "Бронзовая";
//     } else if (score < 7) {
//         return  "Серебряная";
//     } else {
//         return "Золотая";
//     }
// };
// console.log(modalForScore(1));

// Упражнение

// 1) Математические расчеты и функции
// function add(num, sum) {
//
// }
//
// function multiply(num, sum) {
//
// }
// console.log(multiply() + add());

// ############### Функции внутри функции ###############
// function calculateRectangleArea(length, width) {
//     return length * width;
// }
//
// let roomArea = calculateRectangleArea(10, 10);
// console.log(roomArea);

// function youSayGoodBye() {
//     console.log("Good Bye");
//
//     function andISayHello() {
//         console.log("Hello");
//     }
//     return andISayHello;
// }
// let something = youSayGoodBye();
// something();

// function stopWatch() {
//     let startTime = Date.now();
//
//     function getDelay() {
//         let elapsedTime = Date.now() - startTime;
//         console.log(elapsedTime);
//     }
//     return getDelay;
// }
//
// let timer = stopWatch();
//
// for (let i = 0; i < 1000000; i++) {
//     let foo = Math.random() * 10000;
// }
// timer();

// Замыкание
// function createCalcFunction(n) {
//     return function () {
//        console.log(1000 * n);
//     };
// }
// const calc = createCalcFunction(42);
// console.log(calc);
// calc();

// function createCalcFunction(n) {
//     return function (num) {
//         return n + num;
//     };
// }
//
// const addOne = createCalcFunction(1);
// const addTen = createCalcFunction(10);
//
// console.log(addOne(10));
//
// console.log(addTen(10));
// console.log(addTen(40));

// function urlGenerator(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`;
//     };
// }
// const comUrl = urlGenerator('com');
// const ruUrl = urlGenerator("ru");
//
// console.log(comUrl("google"));
// console.log(comUrl("netflix"));
//
// console.log(ruUrl("google"));
// console.log(ruUrl("netflix"));

/* Что делает замыкания,- это позволяют функциям работать, даже когда их среда существенно изменяется или исчезает  */

