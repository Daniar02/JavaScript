// let a = 1;
// console.log(a)
// a = 'test'
// console.log(a)

// Базовые арифметические операторы
// const width = 10;
// const height = 5;
// const space = width * height; // пространство
// const newWidth = width - 4;
// const newWidth2 = width + 4;
// const division = newWidth / newWidth2; // разделение
// const volume = 2 ** 3; // 2 * 2 * 2
// console.log(volume);

//Строки
// const sity = 'Бишкек';
// const street = 'Манас';
// console.log(sity + ', ' + street + ' ' + 5)

// Операторы присваивания
// let  age = 20; // возраст
// age += 2; // возраст = возраст + 2
// age -= 3; // возраст = возраст - 3
// age *= 2; // возраст = возраст * 2
// age /= 2; // возраст = возраст / 2
// age ++ ; // возраст = возраст + 1
// age -- ; // возраст = возраст - 1
// console.log(age);

//Операторы сравнения
// const vasia = 18;
// console.log(age > vasia);
// console.log(age >= vasia);
// console.log(age < vasia);
// console.log(age <= vasia);
// console.log(age == vasia);

// const isSuited = 100 - 10 > 90 - 5;
// console.log(isSuited);
// 100 - (12) 10 > (10) 90 - (12) 5

// const a = (6 + 10) / 2;
// console.log(a);

// let b;
// let c;
// b = c = 100 + 50;
// console.log(b);
// console.log(c);

// let a = 5;
// let b = 5.6;
// console.log(typeof a);
// console.log(typeof b);
// a = 'страока';
// console.log(typeof a);
// e = "sdfsf"
// console.log(typeof e);
// let isAdmin = a > 10;
// console.log(typeof isAdmin);

// let c = undefined;
// console.log(typeof c);
// c = 5;
// console.log(typeof c);

// let d = null;
// console.log(d == null);

/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/

//Данные
// const payRateUSD = 80;
// const projectHours = 40;
// const availableHours = (11 - 2) * 5;
// // Результат
// console.log('Cмогу ли я работать' + '? ' + (availableHours > projectHours));
// console.log('Стоимость работ ' + projectHours * payRateUSD + "$");

// const projectName = 'Сайт магазина'
// const price = 2000;
// const author = 'Данияр Абыкеев';
// const template = author + ' заказал ' + projectName + ' по цене ' + price + '$';
// console.log(template);
// const template2 = `${author} заказал ${projectName} по цене ${price}$`;
// console.log(template2);
// const template3 = `Проект \n` + `Цена: ` + price + '$'
// console.log(template3);
// const template4 = `Проект
// Цена ${price}$`;
// console.log(template4);

// const age = '18';
// console.log(Number(age) + 5); //номер
// console.log(age * 3);
// const userName = 'вася';
// console.log(userName + 5);
// console.log(typeof NaN);
// console.log(String(4) + 5) // Строка
// console.log(Boolean('') + 10) // Логический
// console.log(true + 2);
// const a = 2 + '10';
// console.log(a - 10);
//ложный
// console.log(Boolean(0));
// console.log(Boolean(''))
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// const money = 100;
// if (money > 50) {
//     console.log('Можете купить наш продукт');
// } else if (money > 5) {
//     console.log('Можете купить mini продукт');
// } else  { //ещё
//     console.log('Не хватаеть баланса')
// }
// console.log('Итог');

// Васи положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц.
// Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года после снятия вклада. И остаток после покупки.
// Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах 
// const deposit = 10000;
// const rate = 0.07;
// const depositLenght = 24;
// const houseCost = 13500;

// const res = deposit * (1 + rate / 12) ** 24;
// if (res > houseCost) {
//     console.log(`Мы нокопили: ${res}.  Можем купить. Остаток ${res - houseCost}`);
// } else {
//     console.log(`Мы нокопили: ${res}. Купить не можем (((`);
// }

// const   secterNumber = `7`;
// if (Number(secterNumber) === 7) {
//     console.log(`Угадал строго`);
// }
// if (secterNumber == 7) {
//     console.log(`Угадал не строго`);
// }
// const q = Number(prompt(`Введите данияр`));
// if (q == 7) {
//     console.log(`!`)
// }
// switch
// const role = 'manager';
// if (role === 'manager') {
//     console.log('Менеджер')
// } else if (role === 'admin') {
//     console.log('админ')
// } else if (role === 'ceo') {
//     console.log('СЕО')
// } else {
//     console.log('Мы тебя не знаем!')
// }
// switch (role) {
//     case 'manager' : // role === 'manager'
//         console.log('Менеджер')
//         break;
//     case 'admin' : // role === 'admin'
//         console.log('Админ')
//         break;
//     case 'ceo' : // role === 'ceo'
//         console.log('СЕО')
//         break;
//     default:
//         console.log('Мы тебя не знаем!  ')
// }
// switch (role) {
//     case 'manager':  // role === 'manager'
//     case 'admin': // role === 'admin'
//         console.log('Не руководитель')
//         break;
//     case 'ceo': // role === 'ceo'
//         console.log('Руководитель')
//         break;
//     default:
//         console.log('Мы тебя не знаем!')
// }
// const num = 1;
// switch(true) {
//     case num > 0: // true === num > 0
//         console.log('Положительный');
//         break;
//     case num < 0:
//         console.log('Положительный');
//         break;
//     default:
//         console.log('Ноль!')
// }

//Тернарный оператор
// const bmwX3Price = 100000;
// const fordFocusPrice = 10000;
// const budget = 20000;
// let message;
// if (budget > bmwX3Price) {
//     message = 'BMW';
// } else if (budget > fordFocusPrice) {
//     message = 'ford';
// } else {
//     message = 'Велосипед';
// }
// let message = budget > bmwX3Price ? `BMW` : budget > fordFocusPrice  ? `ford` : `Велосипед`;
// console.log(`Я хочу купить ${message}`);
// 10 > 0 ? console.log('Больше 0') : console.log('Не больше');
// if (10 > 0) {
//     console.log('Больше 0');
// } else {
//     console.log('Не больше');
// }
// const str = 10 > 0 ? ('Больше 0') : ('Не больше');
// console.log(str);
// const nameD = 'Nursultan'
// const age = 12
// if (age >= 18 ) {
//     console.log(`Привет ${nameD}` + ` тебе ${age}`);
// } else {
//     console.log(`Иди ты пожалуйста ${age} ${age - 18}`)
// }

// Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15?".
// Если ответ верен выведите в консоле "Успех", если нет -"Вы робот!"
// а если он введёт "Я не робот", то тоже "Успех"
// const res = prompt('Сколько будет 7 + или - 15?');
// switch(true) {
//     case res === 'Я не робот':
//     case Number(res) === 22:
//     case Number(res) === -8:
//         console.log('Успех');
//         break;
//         default:
//             console.log('Вы робот!');
// }
// if (res === 'Я не робот') {
//     console.log('Успех');
// } else {
//     const resNum = Number(res);
//     switch(resNum) {
//         case 22:
//         case -8:
//         case 8:
//             console.log('успех');
//             break;
//         default:
//             console.log('Вы робот!');
//     }
// }
//  Домашняя работа
// const res = prompt('Выборите + или -');
// switch(true) {
//     case res === '-':
//     case Number(res) === 1:
//         console.log('+')
//         break;
//     case res === '2':
//         console.log('-');
// }
// const res1 = + prompt('Выборите цифру');
// switch(true) {
//     case res1 === res1:
// }
// const res2 =  + prompt('Выборите цифру');
// switch(true) {
//     case res2 === res2:
//     console.log(res1 + res2);
//     console.log(res1 - res2);
//     break;
// }

//## логический оператор
// const isAdmin = true;
// const canWrite = true;
// console.log(`Системный файл ${isAdmin && canWrite}`);
// console.log(`Обычный файл ${isAdmin || canWrite}`)
// console.log(`Инвертируем права админа ${!isAdmin}`)
// const isEdited = true;
// const isSuperAdmin = true;
// console.log(`Системный файл с редактированием ${
//     isAdmin && canWrite && (!isEdited || isSuperAdmin)
// }`)
// const res = prompt(`Выборите имю`)
// switch(true) {
//     case res === true:
//     case res === 'daniar':
//     case res === 'nursultan':  
//     console.log(true);
//     break;
//     default:
//         console.log('Вы робот!');
// }
// const res = prompt(`Введите имя:`)
// if (res === 'Daniar' || res == 'Nursultan') {
//     console.log(true)
// } else {
//     console.log('вы робот')
// }
// const login = prompt(`Введите логин`)
// const paswword = prompt(`Введите пороль`)
// const paswword1 = prompt(`Подвердите пороль`)
// if (paswword === paswword1) {
//     console.log(`вы успешно зарегистрировались`)
// } else {
//     console.log(`Ошибка регистрации`)
// }
// const loginU = prompt(`Логин`)
// const paswwordU = prompt(`пороль`) 
// if (login === loginU && paswword === paswwordU) {
//     console.log(`Прошло успешно`)
// } else {
//     console.log(`введен неправильно логин или пароль`)
// }

// ## Операторы с другими типами
// console.log(`Вася` || `Иван`);
// console.log(false || `Иван`);
// console.log(`Вася` || false);
// console.log(false || false);

// console.log(`Вася` && `Иван`);
// console.log(false && `Иван`);
// console.log(`Вася` && false);
// console.log(false && false);

// let a = 'Марина'
// const username = a || 'Петя';
// console.log(username);

// const isAdmin = false;
// const filename = isAdmin && 'file.mp4'
// console.log(filename);

// ## Оператор нулевого слияния
// let username = "";
// console.log(username || 'Default Username')
// console.log(username ?? 'Default Username')
// let age = 0;
// console. log (age || 18);
// console. log (age ?? 18);

// ## Проверка прав
// Пользователь хочет приобрести игру в магазине
// Он может это сделать только если:
// - Его баланс больше 1000 (balance) или число бонусов больше 100 (bonusBalance)
// - Он не забанен (isBanned)
// - Игра не куплена (isExist)
// - Игра в продаже (isSelling)
// Напишите услоовие для покупки и выведите в консоль результат
// const balance = 1200;
// const bonusBalance = 90;
// const isBanned = false;
// const isExist = false;
// const isSelling = true;
// const canBuy = (balance > 1000 || bonusBalance > 100)
//     && !isBanned
//     && !isExist
//     && isSelling;
// console.log(`Могу купить игру: ${canBuy ? 'Да' : 'Нет'}`);
// const nameN = prompt('Ваедите имя')
// if (nameN === "Nursultan" || nameN === "nursultan" || nameN === "Нурсултан" || nameN === "нурсултан") {
//     console.log(true)
// } else {     
//     console.log(false)
// }
    // const family = prompt("Vedide family")
    // const nameR = prompt("Vedide name")
    // const ote = prompt("Vedide ote")
    // const age = prompt("Vedite age")
    // if (family === "Abykeev" && nameR === "Nursultan" && ote === "Rysbekovich" && age === "19") {
    //  console.log(true)
    // } else {
    //     console.log(false)
    // }

//## Введение в функции
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

// ## Анонимные функции.
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

// ## Стрелочные функции
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

// ##  Упрощение функции
// function toPower(num, power) {
//     const res = num ** power;
//     return res;
// }
// console.log(toPower(2, 3));
// const toPowerArrow = (num, power) => num ** power;
// console.log(toPowerArrow(2, 3));

// ## Параметры по умолчанию
// function toPower(num, power = 2) {
//     // console.log(typeof power)
//     // const power2 = power ?? 2;
//     const res = num ** power;
//     return res;
// }
// console.log(toPower(2, 3))
// console.log(toPower(2))

// ## Условия в функциях
// function canAccessWebsite(age) {
//     if (age < 18){
//         return false;
//     } 
//     return true;
// }
// console.log(canAccessWebsite(16));
// const canAccessWebsite2 = age => age < 18 ? `нет` : `да`;
// console.log(canAccessWebsite2(17))

// ## Функции в функциях
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

// ##  Упражнение - Кредит на MacBook.
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