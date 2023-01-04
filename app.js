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
const res =prompt('Сколько будет 7 + или - 15?');
switch(true) {
    case res === 'Я не робот':
    case Number(res) === 22:
    case Number(res) === -8:
        console.log('Успех');
        break;
        default:
            console.log('Вы робот!');
}
if (res === 'Я не робот') {
    console.log('Успех');
} else {
    const resNum = Number(res);
    switch(resNum) {
        case 22:
        case -8:
        case 8:
            console.log('успех');
            break;
        default:
            console.log('Вы робот!');
    }
}