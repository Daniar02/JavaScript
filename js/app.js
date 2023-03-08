// let a = 1;
// console.log(a)
// a = 'test'
// console.log(a)

// ########################################## Базовые арифметические операторы ##########################################
// const width = 10;
// const height = 5;
// const space = width * height; // пространство
// const newWidth = width - 4;
// const newWidth2 = width + 4;
// const division = newWidth / newWidth2; // разделение
// const volume = 2 ** 3; // 2 * 2 * 2
// console.log(volume);

// ########################################## Строки ##########################################
// const sity = 'Бишкек';
// const street = 'Манас';
// console.log(sity + ', ' + street + ' ' + 5)

// ########################################## Операторы присваивания ##########################################
// let  age = 20; // возраст
// age += 2; // возраст = возраст + 2
// age -= 3; // возраст = возраст - 3
// age *= 2; // возраст = возраст * 2
// age /= 2; // возраст = возраст / 2
// age ++ ; // возраст = возраст + 1
// age -- ; // возраст = возраст - 1
// console.log(age);

// ########################################## Операторы сравнения ##########################################
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

// ########################################## Данные ##########################################
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
// ########################################## ложный ##########################################
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
// ########################################## switch ##########################################
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

// ########################################## Тернарный оператор ##########################################
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
// ########################################## Домашняя работа ##########################################
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

// ########################################## логический оператор ##########################################
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

// ########################################## Операторы с другими типами ##########################################
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

// ########################################## Оператор нулевого слияния ##########################################
// let username = "";
// console.log(username || 'Default Username')
// console.log(username ?? 'Default Username')
// let age = 0;
// console. log (age || 18);
// console. log (age ?? 18);

// ########################################## Проверка прав ##########################################
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

// ########################################## Знакомство с массивами. ##########################################
// const role1 = 'admin'
// const role2 = 'user'
// const role3 = 'superuser'
// const roles = ['admin', 'user', 'superuser'];
// const userInfo = ['Аня', 25]
// console.log(roles[2]);
// console.log(roles.length);
// console.log(roles[roles.length -3]);
// console.log(roles.at(0));
// console.log(roles.at(-2));
// const usersAge = [2040 - 2022, 10 > 0 ? 5 : 0];
// console.log(usersAge.at(1));
// const userNames = new Array('Вася', 'Петя', 'Катя');
// console.log(userNames[userNames.length -3]);
// function square(el) {
//     return el * el;
// }
// console.log(square(5))
// const nameN = prompt('Введите имя')
// nameN === 'nursultan' ? console.log('Nursultan') : console.log('Error');
// if (nameN === 'nursultan') {
//     console.log("Nursultan")
// } else if (nameN === 'daniar') {
//     console.log("Daniar")
// } else {
//     console.log('Error')
// }
// const name1 = prompt('Введите имя')
// name1 === 'daniar' ? console.log('Daniar') : 
// name1 === 'nursultan' ? console.log(' Nursultan') :
// console.log('no');

// ########################################## Управление элементами массива ##########################################
// const users = ['Аня', 'Вика', 'Катя'];
// console.log(users)
// users[2] = 'Кристина';
// console.log(users)
// users[3] = 'Никита';
// console.log(users);
// const arrlenght = users.push('Нурсултан');
// console.log(users);
// console.log(arrlenght)
// users.unshift('Нурболот');
// console.log(users)
// const el = users.pop(0);
// console.log(el);
// console.log(users);
// const el2 = users.shift();
// console.log(el2)
// console.log(users)

// ########################################## Поиск элемента ##########################################
// const roles = ['user', 'admin', 'manager', 'daniar'];
// console.log(roles.indexOf('manager'));
// const elIndex = roles.indexOf('daniar');
// console.log(elIndex);
// const elIndex2 = roles.indexOf('superuser');
// console.log(elIndex2);
// if (roles.indexOf('manager') >= 1) {
//     console.log('Доступ есть')
// } else {
//     console.log('Доступ нет')
// }
// console.log(roles.includes('admin'));
// console.log(roles.includes('superuser'))
// if (roles.includes('admin')) {
//     console.log('Доступ есть');
// } else {
//     console.log('Доступ нет')
// }

// ########################################## Slice, splice, concat, reverse ##########################################
// const roles = ['user', 'admin', 'manager', 'superuser'];

// const res = roles.slice(2);
// console.log(roles);
// console.log(res);

// const res2 = roles.slice(2, 3);
// console.log(roles);
// console.log(res2);

// const res3 = roles.slice(-1);
// console.log(roles);
// console.log(res3);

// const res4 = roles.slice(1, -2);
// console.log(roles);
// console.log(res4)

// const res5 = roles.splice(2);
// console.log(roles);
// console.log(res5);

// const res6 = roles.splice(2, 1);
// console.log(roles);
// console.log(res6);

// const res7 = roles.splice(-1);
// console.log(roles);
// console.log(res7);

// const res8 = roles.reverse();
// console.log(roles);
// console.log(res8);

// const newRoles = ['sysandmin', 'developer'];
// const res9 = roles.concat(newRoles);
// console.log(res9)

// ########################################## Slice, splice, concat, reverse ##########################################
// const roles = ['user', 'admin','manager','superuser'];
// const url = ['auth/user/login'];
// const res = url.split('/');
// console.log(res);
// console.log(roles.join('-'));

// ########################################## Обновление списка задач ##########################################
// Дан список задач
// const tasks = ['Задача 1'];
// Сделать функции:
// - Добавление задачи в конец
// Удаление задачи по названию
// Перенос задачи в начало списка по названию
// Всегда меняем исходный массив
// const tasks = ['Задача 1'];
// const tasks1 = tasks.push('Задача 2')
// console.log(tasks)
// function Add(task) {
//     tasks.push(task)
// };

// function Remove(task) {
//     const index = tasks.indexOf(task);
//     if (index === -1) {
//         return;
//     }
//     tasks.splice(index, 1)
// };

// function Prioritize(task) {
//     const index = tasks.indexOf(task)
//     if (index === -1) {
//         return;
//     }
//     const oldTask = tasks[index];
//     tasks.splice(index, 1);
//     tasks.unshift(oldTask);
// }
// Add('Задача 2');
// Add('Задача 3');
// console.log(tasks);

// Remove('Задача 4');
// console.log(tasks);

// Prioritize('Задача 3');
// console.log(tasks);

// ########################################## Принцип DRY ##########################################
// function Remove(task) {
//     const index = tasks.indexOf(task);
//     if (index === -1) {
//         return;
//     }
//    return tasks.splice(index, 1)
// };

// function Prioritize(task) {
//     const result =  Remove(task);
//     if (!result) {
//          return;
//      }
//      tasks.unshift(result[0])
// }

// ########################################## Деструктуризация ##########################################
// const userData = ['Антон', 18, 'Москва']
// // function getData() {
// //     return ['Антон', 18, 'Москва'];
// // }
// // const userName = getData()[0];
// // const age = getData()[1];
// // const sity = getData()[2];
// const [userName, _, sity] = userData;

// console.log(userName, sity);

// ########################################## Rest оператор ##########################################
// const data = [1, 2, 3, 4, 5, 6];
// const [one, two, ... others] = data;
// console.log(one, two, others);

// ########################################## Функция разбора URL ##########################################
// Дан произвольный url
// https://purpleschool.ru/course/javascript'
// Нужно сделать функцию, которая выводит в консоль:
// Протокол (https)
// Доменное имя (purpleschool.ru)
// Путь внутри сайта (/course/javascript)
// const url = "https://purpleschool.ru/course/javascript";
// const url2 = "https://purpleschool..ru/course/javascript";
// function getUrlParts(url) {
//     const [protocol, _, host, ...path] = url.split('/');
//     if (protocol === 'http:' || protocol === 'https:') {
//         if (!host.includes('.')) {
//             return;
//         }
//         console.log(protocol, _, host, path);
//         console.log(`Протокол: ${protocol.split(':')[0]}`);
//         console.log(`Доменное имя ${host}`);
//         console.log(`Путь внутри сайт /${path.join('/')}`)
//     }
// }
// getUrlParts(url2)

// ##########################################  Цикл for. ##########################################
// console.log('Наш баланс 1$');
// console.log('Наш баланс 2$');
// console.log('Наш баланс 3$');
// console.log('Наш баланс 4$');
// console.log('Наш баланс 5$');
// console.log('Наш баланс 6$');
// console.log('Наш баланс 7$');
// console.log('Наш баланс 8$');
// console.log('Наш баланс 9$');
// for (let i = 1; i < 10; i++) {
//     console.log(`Наш баланс ${i}$`);
// }

// ##########################################  Break и continue. ##########################################
// const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];
// // console.log(tasks[0]);
// for(let i = 0; i < tasks.length; i++ ) {
//     if (tasks[i] === 'Задача 2') {
//         continue;
//     }
//     console.log(tasks[i]);
// }
// console.log("---------");
// for(let i = 0; i < tasks.length; i++) {
//     if (tasks[i] === 'Задача 3') {
//         break;
//     }
//     console.log(tasks[i])
// }

// ########################################## Цикл в обратном порядке ##########################################
// Задача вывести в консоль строку "Я люблю JS !" из массива,
//  проходя циклом в обратном порядке, не используя метод reverse.
// const arr = '!' "JS', "люблю" 'Я'];

// const arr = ['!', "js", "люблю", 'Я'];
// const resultArray = [] ;

// for (let i = arr.length - 1; i >= 0 ; i--) {
//     resultArray.push(arr[i])
// }
// console.log (resultArray.join (' '));

// const user = prompt("Введите значение")
// const massiv  = [...user]
// const res = massiv.reverse().join('')
// console.log(res)

// ########################################## Цикл в цикле ##########################################
// for (let i = 1; i < 5; i++) {
//     console.log(`Цикл  ${i}`);
//     for (let j = 1; j < 5; j++) {
//         console.log(`Дом ${j}`)
//     }
// }

// const tasks = [[1, 'Задача 1'], [2, 'Задача 2']];
// for (let i = 0; i < tasks.length; i++) {
//     for (let j = 0; j < tasks[i].length; j++) {
//         console.log(tasks[i][j])
//     }
// }

// ########################################## Цикл while ##########################################
// for (let i = 1; i < 5; i++) {
//     console.log(` Цикл  ${i}`)
// }

// let i = 1;
// while (i < 5) {
//     console.log(` Цикл  ${i}`)
//     i++
// }

// const arr = [1, 4, 8, 7]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//         break;
//     }
//     console.log(arr[i]);
// }
// let i = 0;
// while (arr[i] <= 5 && i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// let j = 0
// do {
//     console.log(j)
//  j++
// } while(j < 1)

// ########################################## Циклы for of и for in ##########################################
// const arr = [1, 4, 8, 7];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let element of arr) {
//     console.log(element)
// }

// for (index in arr) {
//     console.log(index)
// }

// ########################################## Расчёт итогового баланса ##########################################
// Есть выгрузка операций пользователя
// const operations = [1000, -700, 300, -500, 10000];
// а так же начальный баланс в 100$
// Необходимо сделать функции расчёта:
// Итогового баланса
// Наличия отрицательного баланса (если после очередной операции
// баланс < 0, то выдавать false)
// - Расчёта среднего расхода и среднего дохода

// const operations = [1000, -700, 300, -500, 10000];
// const startinngBalance = 100;

// function getBalance(arrayOfOperations, initailBalance) {
//     let balance = initailBalance;
//     for (const element of arrayOfOperations) {
//         balance += element;
//     }
//     return balance;
// }
// console.log(getBalance(operations, startinngBalance));

//     function chekOperations(arrayOfOperations, initailBalance) {
//         let balance = initailBalance;
//         let isOk = true;
//     for (const element of arrayOfOperations) {
//         balance += element;
//         if (balance < 0) {
//             isOk = false;
//             break;
//         }
//     }
//     return isOk
// }

// console.log(chekOperations(operations, startinngBalance));

// function avarageOperations(arrayOfOperations) {
//     let positiveCount = 0;
//     let positiveSum = 0;
//     let negativeCount = 0;
//     let negativeSum = 0;
//     for (const element of arrayOfOperations) {
//         if (element > 0) {
//             positiveCount++
//             positiveSum += element
//         }
//         if (element < 0) {
//             negativeCount++
//             negativeSum += element
//         }
//     }
//     return [positiveSum / positiveCount, negativeSum / negativeCount];
// }
// console.log(avarageOperations(operations))

// ########################################## Домашняя работа ##########################################

// const res = prompt("Введите имя")
// const i = res[0].toUpperCase() + res;
// console.log(i)

// const res = prompt("Введите пороль");
// const res1 = prompt("Подвердите пороль");
// const i = res.toLowerCase()
// const j = res1.toLowerCase()
// if (i === j) {
//     console.log(true)
// } else {
//     console.log(false)
// };

// for (let i = 0; i < 11; i++) {
//     if (i % 2 == 1) {
//         console.log(i)
//     }
// }   



// ############################ Строки ############################

// const nameN = "Нурсултан";
// const age = 25;
// function  getAge() {
//     return age;
// }
// const outpit = `Привет: меня зовут ${nameN} и мой возраст ${age < 20 ? "A" : "B"} лет.`;
// console.log(outpit);

// const neme = "Нурсултан";
// console.log(neme.length); // (Длина)
// console.log(neme.toUpperCase()); // (верхний регистр)
// console.log(neme.toLowerCase()); // (нижний регистр)
// console.log(neme.charAt(2)); // (возвращает указанный символ из строки)
// console.log(neme.indexOf("тан")); // (воз-в первого вхождения указанного значения в строковый объект,если не-н -1)
// console.log(neme.startsWith("Нур")); // (true)
// console.log(neme.endsWith("тан")); // (true)
// console.log(neme.repeat(3)); // (НурсултанНурсултанНурсултан)
// const string = '  Нурсултан   ';
// console.log(string.trim()); // (удаляет пробелов "Нурсултан")
// console.log(string.trimEnd()); // (удаляет пробелов end "  Нурсултан")
// console.log(string.trimStart()); // (удаляет пробелов start "Нурсултан  ")

// function logPerson(s, name, age) {
//     if (age < 0) {
//         age = 'Еще не родился';
//     }
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`;
// }
//
// const personName = "Нурсултан";
// const personName2 = "Нурболот";
// const personAge = 25;
// const personAge2 = -10;
// const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`;
// const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`;
// console.log(output);
// console.log(output2);


// ############################ Массивы ############################
// const cars = ["Мазда", "Форд", "БМВ", "Мерседес"];
// const people = [
//     {name: "Vladilin", budget: 4200},
//     {name: "Elena", budget: 3500},
//     {name: "Victoria", budget: 1700},
// ]
// const fib = [1, 1, 2, 3, 5, 8, 13]
//
// // Method
// cars.push("Рено"); // (добавить в конец массива)
// cars.unshift("Волга") // (добавить в начало массива)
// cars.shift() // (удаляет первый элемент из массива)
// cars.pop()// (удаляет последний элемент из массива)
// cars.reverse() // (Перевёрнутый массив)
// console.log(cars)

// const index = cars.indexOf("Форд");
// cars[index] = "Лада";
// console.log(cars)

// let findedPerson
// for (const person of people) {
//     if (person.budget === 3500) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson);

// const index = people.findIndex(function (percon) {
//     return percon.budget === 3500
// });
// console.log(people[index])

// const person = people.find(person => person.budget === 3500);
// console.log(person);

// const toUppercCaseCar = cars.map(car => {
//     return car.toUpperCase()
// })
// console.log(toUppercCaseCar)

// const sqrt = num => Math.sqrt(num)

// const pow2 = num => num ** 2;

// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// const pow2Fib = fib.map(pow2)
// const filterNumbers = pow2Fib.filter(num => {
//     return num > 20
// })
// console.log(filterNumbers)

// Задача 1
// const text = "Я, люблю Js"
// const reverseText = text.split(",").reverse().join(' ')
// console.log(reverseText)

// const people = [
//     {name: "Vladilin", budget: 4200},
//     {name: "Elena", budget: 3500},
//     {name: "Victoria", budget: 1700},
// ]
//
// const allBudget = people
//     .filter(person => person.budget > 2000)
//     .reduce((acc, person) => {
//         acc += person.budget
//     return acc
// },0)
// console.log(allBudget)

// ############################ Быстрое создание массивов ############################

// const arr = [1, 2, 3, 4, 5];
// console.log(new Array(1, 2, 3, 4, 5));
// const arr2 = new Array(5);
// console.log(arr2.fill(1, 0, 3));
// console.log(arr2.fill(2, 3, 5));
//
// const arr3 = Array.from({ length: 5}, (cur, i) => i + 1);
// console.log(arr3);



// ############################ Асинхронность ############################

// const timeout = setTimeout(()=> {
//     console.log("Afret timeout")
// }, 2500);
// clearTimeout(timeout)
//
// const interval = setInterval(()=> {
//     console.log("Afret interval")
// }, 2500);
// // setInterval(interval)

// const delay = (callbak, wait = 100) => {
//     setTimeout(callbak, wait)
// }
// delay(()=> {
//     console.log('After 2 seconds')
// }, 2000)

// const delay = (wait = 1000) => {
//     const promise = new Promise( (resolve, reject) => {
//         setTimeout(() =>{
//             resolve()
//             // reject("Что-то пошло не так. Повторите попутку")
//         }, wait)
//     })
//     return promise
// }
//
// // delay(2500)
// //     .then( () => {
// //         console.log('After 2 seconds')
// //     })
// //     .catch(err => console.error('Error',err))
// //     .finally(() => console.log('Finally'))
//
// const getData = () => new Promise(resolve => resolve([
//     1, 1, 2, 3, 5, 8, 13
// ]))
// // getData().then(data => console.log(data))
//
// async function asyncExsample() {
//     try {
//         await delay(3000)
//         const data = await getData()
//         console.log("Data", data)
//     }catch (e) {
//         console.log(e)
//     } finally {
//         console.log('Finally')
//     }
// }
// asyncExsample()

// ############################ Работа с DOM ############################

// Menu
// const lemonChicken = false;
// const beefWithBlackBean = true;
// const sweetAndSourPork = true;
// const res = lemonChicken + beefWithBlackBean + sweetAndSourPork;
// if (lemonChicken) {
//     console.log("Отлично! я буду курицу");
// } else if (beefWithBlackBean) {
//     console.log("Заказываю говядину");
// }
// else if (sweetAndSourPork) {
//     console.log("Заказываю свинину");
// } else {
//     console.log("Что ж, остается рис с яйцом");
// }
// console.log(res);


/*
    («Document Object Model», коротко DOM)
    HTML-тег является объектом. Вложенные теги являются «детьми» родительского элемента.
    Текст, который находится внутри тега, также является объектом.

    DOM - это средство, позволяющее JavaScript-коду взаимодействовать с содержимым веб-страниц.
    Браузеры используют DOM для структурирования страниц и их элементов (параграф, заголовок и т.д.),
    а Javascript может разными способами манипулировать элементами DOM.
    document.body.style.background = 'red'; // сделать фон красным

    document.body.style.background = 'red'; // сделать фон красным
    setTimeout(() => document.body.style.background = '', 3000); // вернуть назад

    //jQuery
    jQuery который кардинально упрощает работу с DOM
    jQuery содержит набор функций, которые позволяют найти нужные вам элементы и провести с ними определенные действия
 */

// ############################ Пример работы call stack. ############################
// const sum = 1;
// console.log('start')
// console.log(sum);
// function add5(n) {
//     n = n + 5
//     if (n > 100) {
//         return n;
//     }
//     console.log(n);
//     return add5(n);
// }
// add5(sum);
// console.log("ended");

// ############################ Scope chain. ############################
/* Scope - область вашего кода, где определенная переменная может быть доступна. */

// ############################ Пример scope chain. ############################
// const successMessage = "Успех"
// const user = {
//     name: "Вася",
//     roles:  []
// }
//
// function addRole(user, role) {
//     if (role == "admin") {
//         const message = "Ошибка";
//         console.log(message);
//         return user;
//
//     }
//     user.roles.push(role);
//     console.log(successMessage);
//
//     function logRoles() {
//         console.log(user.roles)
//     }
//     logRoles()
//     return user;
// }
//
// console.log(addRole(user, "dev"))