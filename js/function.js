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

// ########################################## Введение в функции ##########################################
// function logName(name, surname) {
//     console.log(`Моё имя ${name} ${surname}`);
// }
// logName('Антон', 'Абыкеев');
// function countDepositSum(depositInUSD, month, rate) {
//     const sum = depositInUSD *(1 + rate / 12) ** month;
//     return sum;
// }
// const example1 = countDepositSum(1000, 24, 0.12);
// console.log(example1);
// const example2 = countDepositSum(1000, 48, 0.10);
// console.log(example2);

// ########################################## Анонимные функции. ##########################################
// function powerOfTwo(num) {
//     return num * num;
// }
// console.log(powerOfTwo(5));
// const poft = function (num) {
//     return num * num;
// }
// console.log(poft(6));
// function iFamily(family, name) {
//     console.log(`${family} ${name}`)
// }
// iFamily('Абыкеев', 'Нурсултан');
// function sum(num1, num2, num3, num4) {
//     return num1 + (num2 * num3) / num4
// }
// console.log(sum(1, 5, 2, 2));

// ########################################## Стрелочные функции ##########################################
// function powerOfTwo(num) {
//     console.log(num)
//     return num * num
// }
// console.log(powerOfTwo(5));
// // const poft = num => num * num;
// const poft = num => {
//     console.log(num)
//     return num * num
// }
// console.log(poft(6))

// ########################################## Упрощение функции ##########################################
// function toPower(num, power) {
//     const res = num ** power;
//     return res;
// }
// console.log(toPower(2, 3));
// const toPowerArrow = (num, power) => num ** power;
// console.log(toPowerArrow(2, 3));

// ########################################## Параметры по умолчанию ##########################################
// function toPower(num, power = 2) {
//     // console.log(typeof power)
//     // const power2 = power ?? 2;
//     const res = num ** power;
//     return res;
// }
// console.log(toPower(2, 3))
// console.log(toPower(2))

// ########################################## Условия в функциях ##########################################
// function canAccessWebsite(age) {
//     if (age < 18){
//         return false;
//     }
//     return true;
// }
// console.log(canAccessWebsite(16));
// const canAccessWebsite2 = age => age < 18 ? `нет` : `да`;
// console.log(canAccessWebsite2(17))

// ########################################## Функции в функциях ##########################################
// const KG_IN_USD = 7;
// const KM_IN_USD = 5;
// function calculateW(present) {
//     return present * KG_IN_USD;
// }
// function calculateKm(distance) {
//     return distance * KM_IN_USD;
// }
// function getExchagePrice(present1, present2, distance) {
//     // const prise1 = present1 * KG_IN_USD;
//     // const prise2 = present2 * KG_IN_USD;
//     // const distancePrise = distance * KM_IN_USD;
//     const prise1 = calculateW(present1);
//     const prise2 = calculateW(present2);
//     const distancePrise = calculateKm(distance);
//     return prise1 + prise2 + distancePrise;
// }
// console.log(getExchagePrice(1, 2, 10));

// ##########################################  Упражнение - Кредит на MacBook. ##########################################
/*
	Пользователь:
	- Возраст
	- Наличие работы
	- Деньги
	Нужно проверить может ли он купить новый MacBook за 2000$?
	Он может брать не только свои деньги, но и взять кредит.
	Ему дадут 500$, только если ему больше 24-х лет и он
	имеет работу, 100$ если ему просто больше 24-х лет и 0 в
	ином случае.
	Напишите функцию, которая принимает данные пользователя
	и товара и возвращает true или false;
*/
// function computeCredit(age, hasJob = false) {
//     switch(true) {
//         case age > 24 && hasJob:
//             return 500;
//         case age > 24:
//             return 100;
//         default:
//             return 0;
//     }
// }
// function canBuy(productPrice, age, money, hasJob = false) {
//     const creditMoney = computeCredit(age, hasJob);
//     return productPrice <= money + creditMoney;
// }
// console.log(canBuy(2000, 25, 1900, true));

// ########################################## Функции высшего порядка {Callback} ##########################################

// function add(a, b) {
//     return a + b;
// }
// function subtract(a, b) {
//     return a - b;
// }
// function power(a, b,) {
//     return a**b;
// }
// // ## Функции высшего порядка
// function calculate(a, b, fn) {
//     console.log(fn.name);
//     const res = fn(a, b);
//     return res;
// }

// let res = calculate(3, 5, subtract);
// console.log(res)
// res = calculate(3, 5, add);
// console.log(res);
// res = calculate(3, 5, power);
// console.log(res);

// ########################################## Возврат функции. ##########################################

// function power(pow) {
//     return function (num) {
//         return num+pow;
//     }
// }
// const power = pow => num => pow+num

// const powerOfTwo = power(2);
// console.log(powerOfTwo(5));
// console.log(powerOfTwo(10));

// const powerOfThree = power(3);
// console.log(powerOfThree(5));

// console.log(power(5)(4));


// ############################ Функции ############################

// // 1) Function Declaration
// function greet(name) {
//     console.log("Привет - ", name)
// }
//
// // Function Expression
// const greet2 = function (name) {
//     console.log("Привет 2 -", name)
// }
//
// greet("Лена");
// greet2("Лена")

// 2) Анонимный функции

// let counter = 0;
// const interval = setInterval(function(){
//     if (counter === 5) {
//         clearInterval(interval) //clearTimeout
//     } else {
//         console.log(++counter)
//     }
// }, 1000);

// 3) Стрелочные Функции

// const arrow = (name) => {
//     console.log("Привет 3 -", name)
// }
//
// const arrow2 = name => console.log("Привет 3 -", name)
// arrow2("Нурболот")
//
// const pow = num => num ** 2
// console.log(pow(5));

// 4) Параметры по умолчанию

// const sum = (a, b =1) => a + b
// console.log(sum(41, 1))

// function sumAll(...all) {
//     let result = 0;
//     for (let num of all) {
//         result += num
//     }
//     return result
// }
// const res = sumAll(1, 2, 3, 4, 5);
// console.log(res)

// Замыкания

// function createMamber(name) {
//     return function (lastName) {
//         console.log(name + lastName);
//     };
// }
//
// const logWithLastName = createMamber("Нурсултан");
// console.log(logWithLastName('Нурболот'));
// console.log(logWithLastName('Адилет'));

// ########################################## IIFE. ##########################################
/*
    IIFE (Immediately Invoked Function Expression) это JavaScript функция,
    которая выполняется сразу же после того, как она была определена.

    Функция становится мгновенно выполняющимся функциональным выражением.
    Переменные внутри функции не могут быть использованы за пределами её области видимости.
*/

// function init() {
//     console.log("Start");
// }
// init();
//
// (function() {
//     console.log("Start IIFE");
// })();

// ########################################## Замыкания. ##########################################
/*
    Что же такое замыкание?
    Замыкание - это комбинация функции и лексического окружения, в котором эта функция была определена.
    Простыми словами: функция помни, в каком контексте она была создана и может его использовать

    Что делает замыкания,- это позволяют функциям работать, даже когда их среда существенно изменяется или исчезает

    ! Замыкание имеет более высокий приоритет по сравнению с переменными родительских scope
*/

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

// Замыкание 2
// function changeBalance() {
//     let balance = 0;
//     return function (sum) {
//         balance += sum;
//         console.log(`Балансе: ${balance}`)
//     }
// }
//
// const change = changeBalance();
// change(100);
// change(-50);
// change(200);
// console.dir(change);
//
// const change2 = changeBalance();
// change2(100);
// console.dir(change2);

// ##################################  Замыкание и лексическое окружение ##################################
// let number = 5;debugger
// function logNumber() {
//     // let number = 5;debugger
//     console.log(number);debugger
// }
// number = 6;debugger
// logNumber();
// number = 8;debugger
// logNumber();
//
// function createCounter() {
//     let counter = 0;
//     function myFunction() {
//         counter = counter + 1;debugger
//         return counter;debugger
//     }
//     return myFunction;
// }
// debugger
// const increment = createCounter();
// const c1 = increment();debugger
// const c2 = increment();debugger
// const c3 = increment();debugger
// console.log(c1, c2, c3);

// ########################################## Упражнение - работа с замыканиями. ##########################################
/*
    Сделать функцию пользователя, которая берёт за основу userInfo и за счёт замыкания создаёт новый объект.
    С котором можно работать как user1(). increse (100)
*/
// const userInfo = {
//     balance: 0,
//     operations: 0,
//     increase(sum) {
//         this.balance += sum;
//         this.operations++
//     }
// }
//
// function user() {
//     const userObj = {
//         balance: 0,
//         operations: 0,
//         increase(sum) {
//             this.balance += sum;
//             this.operations++
//         }
//     };
//     return function () {
//         return userObj
//     }
// }
//
// const user1 = user();
// user1().increase(100);
// user1().increase(100);
// console.log(user1());
//
// const user2 = user();
// user2().increase(100);
// console.log(user2());

// ################################################ function ################################################
// function add(a, b) {
//     return a + b;
// }
//
// function subtract(a, b) {
//     return a - b;
// }
//
// function number(a, b) {
//     return a * b;
// }
//Функция высшего порядка
// function calclate(a, b, fn) {
//     console.log(fn.name);
//     const res = fn(a, b);
//     return res;
// }
// let res = calclate(3, 5, add);
// console.log(res);
// res = calclate(3, 5, subtract);
// console.log(res);
// res = calclate(3, 5, number);
// console.log(res);
//////////////////////////////////////////
// function power(pow) {
//     return function(num) {
//         return num * pow;
//     };
// }
// Стрелечный функции
// const power = pow => num => pow*num;
// ////////////////////////////////
// const powerOfTwo = power(2);
// console.log(powerOfTwo(5));
// console.log(powerOfTwo(10));
//
// const powerOfThree = power(4);
// console.log(powerOfThree(5));
// console.log(powerOfThree(10));
//
// console.log(power(2)(5));
//////////////////////////////

// ##################################### Функции, стрелочные ф-ции #####################################

// FUNCTION DECLARATION
// Создается до начала выполнения скрипта,можно вызвать перед объявлением
// function showFirstMessage() {
//     console.log('Hello World');
// }
// showFirstMessage();

// function showFirstMessage(text) {
//     console.log(text);
// }
// showFirstMessage('Hello World');

// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     // let num = 10;
//     // num = 12;
//     console.log(num);
// }
// showFirstMessage('Hello World');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;
//     //
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// FUNCTION EXPRESSION
// Создается только тогда, когда доходит поток кода,можно вызвать только после объявления.
// const logger = function() {
//     console.log("Hello");
// };
// logger();

// СТРЕЛОЧНЫЕ ФУНКЦИИ
// Не имеет своего контекста (this)
// const calc = (a, b) => a + b;
// const calc = (a, b) => {

//     return (a + b);

// };
// console.log(calc(2, 3));

// ##################################### Домашняя работа  Функции #####################################
// function showMessage() {
//   alert( 'Всем привет!' );
// }

// showMessage();
// showMessage();

// function showMessage() {
//     let message = "Привет, я JavaScript!"; // локальная переменная

//     alert( message );
//   }

//   showMessage(); // Привет, я JavaScript!

//   alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри функции

// let userName = 'Вася';
// function showMessage() {
//     let message = 'Привет ' + userName;
//     alert(message);
// }
// showMessage();

// let userName = 'Вася';
// function showMessage() {
//     let userName = 'Петя'; // (1) изменяем значение внешней переменной
//     let message = 'Привет, ' + userName;
//     alert(message);
// }
// alert(userName); // Вася перед вызовом функции
// alert(userName);
// showMessage(); // Петя, значение внешней переменной было изменено функцией

// function showMessage(from, text) { // параметры: from, text
//     alert(from + ':' + text);
// }
// showMessage('Аня', 'Привет'); // Аня: Привет! (*)
// showMessage('Аня', 'Как дела'); // Аня: Как дела? (**)

// function showMessage(from, text) {
//     from = '*' + from + '*'; // немного украсим "from"
//     alert(from + ': ' + text);
// }

// let from = 'Аня';
// showMessage(from, 'Привет'); // *Аня*: Привет
// значение "from" осталось прежним, функция изменила значение локальной переменной
// alert(from); // Аня

// функции
// function toPower(num, power) {
//     const res = num + power;
//     return res;
// }
// console.log(toPower(4, 6));
// // Стрелочный функции
// const toPowerArrow = (num, power) => num + power;
// console.log(toPowerArrow(4, 6));

// function showMessage(from, text="Текст не дабавлен") {
//     alert(from + ":" + text);
// }
// showMessage('Аня'); // Аня: текст не добавлен

// ##################################### Еще раз про аргументы функций #####################################
// const usdCurr = 28;
// const eurCurr = 32;
// function convert(amount, curr) {
//     console.log(curr * amount);
// }
// convert(500, usdCurr);
// convert(500, eurCurr);

// ##################################### Про важность return #####################################
// const usdCurr = 28;
// const discount = 0.9;
// function convert(amount, cur) {
//     return cur * amount;
// }

// function promation(result) {
//     console.log(result * discount);
// }

// // const res = convert(500, usdCurr);
// promation(convert(500, usdCurr));

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 5) {
//             return;
//         }
//     }
//     console.log('Done');
// }
// test();

// function doNothing() {}
// console.log(doNothing() === undefined);