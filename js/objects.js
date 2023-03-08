// Объекты же используются для хранения коллекций различных значений и более сложных сущностей
/* Свойство – это пара «ключ: значение», где ключ – это строка (также называемая «именем свойства»),
   а значение может быть чем угодно.

   Мы можем представить объект в виде ящика с подписанными папками. Каждый элемент данных хранится в своей папке,
   на которой написан ключ. По ключу папку легко найти, удалить или добавить в неё что-либо.

   let user = new Object(); // синтаксис "конструктор объекта"
   let user = {};  // синтаксис "литерал объекта"

   let user = { // объект
    имя-name: "John",  // под ключом "name" хранится значение "John"
    имя-age: 30 // под ключом "age" хранится значение 30
    };

    Можно сказать, что наш объект user – это ящик с двумя папками, подписанными «name» и «age».

    Для удаления свойства мы можем использовать оператор delete: delete user.age;
 */

// const dog = {
//     name: "Оладушек",
//     age: "6",
//     color: "белый"
// };
//
// const cat = {
//     name: "Гармония",
//     age: "8",
//     color: "Черепаховый"
// };
// console.log(Object.keys(dog)); //
// console.log(dog);

/*
    В массиве
    var arr = ['a', 'b', 'c'];
    console.log(Object.keys(arr)); // консоль: ['0', '1', '2']
    В объекте
    var obj = { 0: 'a', 1: 'b', 2: 'c' };
    console.log(Object.keys(obj)); // консоль: ['0', '1', '2']
*/

// // Добавление элемента объекта
// const cat = {};
// cat["legs"] = 3;
// cat["name"] = "Гармония";
// cat["color"] = "Черепаховый";
// console.log(cat);

// // Добавление ключей через точку
// const cat1 = {};
// cat.legs = 3;
// cat.name = "Гармония";
// cat.color = "Черепаховый";
// console.log(cat);

// Массивы объектов
// const dinosaurs = [
//     {name: "Тираннозавр рекс", period: "Верхнемеловой"},
//     {name: "Стегозавр", period: "Верхнеюрский"},
//     {name: "Платеозавр", period: "Триасовый"}
// ];
// console.log(dinosaurs[0]);
// console.log(dinosaurs[0].name); // Тираннозавр рекс
// console.log(dinosaurs[1]);
// console.log(dinosaurs[1]["name"]); // Стегозавр

// Массив друзей
// const anna = {name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16]};
// const dave = {name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40]};
// const kate = {name: "Кейт", age: 9, luckyNumbers: [1, 2, 3,]};
//
// const friends = [anna, dave, kate];
// console.log(friends[1]);
// console.log(friends[1].luckyNumbers[0]); // 3

// // Учет долгов
// const owedMoney = {};
// owedMoney['Джимми'] = 5 ;
// owedMoney['Анна'] = 7;
// owedMoney['Джимми'] += 3;
// console.log(owedMoney);

// Хранение информации о фильмах
// const movies = {
//     "В поисках Немо": {
//         releaseDate: 2003,
//         duration: 100,
//         actors: ["Альберт Брукс", "Эллен Дедженерес", "Александр Гоулд"],
//         format: "DVD"
//     },
//     "Звездные войны: Эпизод 6 -- Возвращение джедая": {
//         releaseDate: 1983,
//         duration: 134,
//         actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
//         format: "DVD"
//     },
//     "Гарри Поттер и Кубок огня": {
//         releaseDate: 2005,
//         duration: 157,
//         actors: ["Дэниел Рэдклифф", "Эмма Уотсон", "Руперт Грит"],
//         format: "Blu-ray"
//     }
// };
// const cars = {
//     releaseDate: 2006,
//     duration: 117,
//     actors: ["Оуэн Уилсон", "Бонни Хант", "Пол Ньюман"],
//     format: "Blu-ray"
// };
// movies["Тачки"] = cars; // Добавил его в объект movies с ключом "Тачки"
// // console.log(movies);
// console.log(Object.keys(movies));
// // console.log(movies["Гарри Поттер и Кубок огня"].actors[0]);
//
// /*
//     Объекты нужны для хранение множества элементов данных в одном месте.
//     Массивы отсортированы по порядку, а Объект нет
//  */

// Упражнение
// const scores = {};
// scores.nurbolot = 0;
// scores.nursultan = 0;
// scores.adilet = 0;
// scores.nurbolot += 1;
// console.log(scores);

/*######################## Предопределенные объекты в JavaScript ########################*/
/*
    Тип     Назначение
    Array - Помогает хранить, извлекать и манипулировать наборам данных.
    Boolean - Служить оболочкой примитива Boolean, а также работает посредством значений true и false.
    Data - Упрощает работу с датами и их представление
    Function - Позволяет вызвать заданный код
    Math - Умник среди типов, расширяющий возможности работы с числами
    Number - Служить оболочкой примитива number
    RegExp - Предоставляет богаты возможности сопоставления текстовых шаблонов
    String - Служить оболочкой примитива string
*/
// // Массив
// let names = ["Jerri", "Elaine", "George", "Kramer"];
// let alsoNames = new Array("Dennis", "Frank", "Dee", "Mac");
// console.log(names);
// console.log(alsoNames);
//
// // Округление число
// let roundNumber = Math.round(3.14);
// console.log(roundNumber);
//
// // Текущая дата
// let today = new Date();
// console.log(today);
//
// // объект Boolean
// let booleanObject = new Boolean(true);
// console.log(booleanObject);
//
// //  бесконечность
// let unquantifiablyBigNumber = Number.POSITIVE_INFINITY;
// console.log(unquantifiablyBigNumber);
//
// // объект String
// let hello = new String("Hello!");
// console.log(hello);
//
// let movie = "Pulp Function";
// let moveObj = new String("Pulp Function");
// console.log(movie);
// console.log(moveObj);


/*############################### Когда примитивы ведут себя как объект ###############################*/
// let name = new String("Batman");
// console.log(name);
//
// let game = "Drago Age: Origins";
// console.log("length is: " + game.length);
//
// let gameObject = new String("Drago Age:Origins");
//
// console.log(typeof game); // строка
// console.log(typeof  game.length); // число
// console.log(typeof gameObject); // объект

/*############################### Методы получения и изменения данных ###############################*/
// let foo = {
//     a: "hello",
//     b: "Monday"
// };
// foo.a = "Manic";
// console.log(foo);
//
// let zorb = {
//     message: "Blah",
//
//     // Геттер
//     get greeting() {
//         return this.message;
//     },
//
//     // Сеттер
//     set greeting(value) {
//         this.message = value;
//     }
// };

// Генератор крика
// let shout = {
//     _message: "Hello!",
//
//     get message() {
//         return this._message;
//     },
//
//     set message(value) {
//         this._message = value.toUpperCase();
//     }
// };
// shout.message = "This is sparta!";
// console.log(shout.message);

// Регистрирование действий
// let superSecureTerminal = {
//     allUserNames: [],
//     _username: "",
//
//     showHistory() {
//         console.log(this.allUserNames);
//     },
//
//     get username() {
//         return this._username;
//     },
//
//     set username(name) {
//         this._username = name;
//         this.allUserNames.push(name);
//     }
// };
//
// let myTerminal = Object.create(superSecureTerminal);
// myTerminal.username = "Michael Gary Score";
// myTerminal.username = "Dwight K. Schrut";
// myTerminal.username = "Greed Bratton";
// myTerminal.username = "Pam Beasley";
//
// myTerminal.showHistory();

// Проверка значения свойства
// var person = {
//     _name: "",
//     _age: "",
//
//     get name() {
//         return this._name;
//     },
//
//     set name(value) {
//         if (value.length > 2) {
//             this._name = value;
//         } else {
//             console.log("Name is too short!")
//         }
//     },
//
//     get age() {
//         return this._age
//     },
//
//     set age(value) {
//         if (value < 5) {
//             console.log("Too young!");
//         } else {
//             this._age = value;
//         }
//     },
//
//     get details() {
//         return "Name: " + this.name + ", Age: " + this.age;
//     }
// }
// let muTerminal2 = Object.create(person);
// muTerminal2.name = "da";
// muTerminal2.age = 7;
// console.log(muTerminal2.details);

/*########################### Об объектах подробнее ###########################*/
// let funnyGuy = {};
//
// funnyGuy.firstName = "Conan";
// funnyGuy["firstAge"] = 20;
// console.log(funnyGuy);

// Удаление свойств
// let color = {
//     header: "blue",
//     footer: "gray",
//     content: {
//         title: "black",
//         body: "darkgray",
//         signature: "light blue"
//     }
// };
// delete color.footer;
// console.log(color);

// color.header = undefined;
// console.log(color);

// Что же происходить под капотом?
// let funnyGuy = {};
// funnyGuy.toString();
//
// console.log(funnyGuy);

// Создание пользовательских объектов
// let funnyGuy = {
//     firstName: "Conan",
//     lastName: "O'Brien",
//
//     getName: function () {
//         return "Name is: " + this.firstName + " " + this.lastName;
//     }
// };
//
//
// let thenDude = {
//     firstName: "Jeffrey",
//     lastName: "Lebowski",
//
//     getName: function () {
//         return "Name is: " + this.firstName + " " + this.lastName;
//     }
// };
//
// let detective = {
//     firstName: "Adrian",
//     lastName: "Monk",
//
//     getName: function () {
//         return "Name is: " + this.firstName + " " + this.lastName;
//     }
// };
// console.log(funnyGuy.getName());
// console.log(thenDude.getName());
// console.log(detective.getName());

/* Цепочки */
// let person = {
//     getName: function () {
//         return "Name is: " + this.firstName + " " + this.lastName;
//     },
//     getInitials: function () {
//         if (this.firstName && this.lastName) {
//             return this.firstName[0] + this.lastName[0];
//         }
//     }
// };
//
// let funnyGuy = Object.create(person);
// funnyGuy.firstName = "Conan";
// funnyGuy.lastName = "O'Brien";
//
// let thenDude = Object.create(person);
// thenDude.firstName = "Jeffrey";
// thenDude.firstName = "Lebowski";
//
// let detective = Object.create(person);
// detective.firstName = "Adrian";
// detective.lastName = "Monk";
//
// console.log(detective.getName()); //Name is: Adrian Monk
// console.log(detective.getInitials()); // AM

/*########################### Расширение встроенных объектов ###########################*/
// function shuffle(input) {
//     for (let i = input.length - 1; i >= 0; i--) {
//
//         let randomIndex = Math.floor(Math.random() * (i + 1));
//         let itemAtIndex = input[randomIndex];
//
//         input[randomIndex] = input[i];
//         input[i] = itemAtIndex;
//     }
//     return input;
// }
// let shuffleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// shuffle(shuffleArray);
//
// console.log(shuffleArray);


// ############################ Объекты ############################

// const person = {
//     namee: 'Vladilen',
//     age: 26,
//     isProgrammer: true,
//     languages: ['ru', 'en', 'de'],
//     'complex key': 'Comlex Value',
//     ['key_' + (1 + 3)]: 'Computed Key',
//     greet() {
//         console.log('greet from person');
//     },
//     info() {
//         console.log("this", this);
//         console.log('Информаци про человека по имени:', this.namee);
//     }
// };
// console.log(person.namee);
// console.log(person.age);
// console.log(person['complex key']);
// console.log(person.languages);
// console.log(person['key_' + (1 + 3)]);

// person.age++;
// person.languages.push('by');
// console.log(person);

// const {namee, age, languages} = person;
// console.log(namee, age, languages);

// for (const key in person) {
//     if (person.hasOwnProperty((key))) {
//         console.log('key:', key);
//         console.log('value:', person[key]);
//     }
// }

// Object.keys(person).forEach((key) => {
//     console.log('key:', key);
//     console.log('value:', person[key]);
// });

// Context
// person.info();
//
// const logger = {
//     keys(obj) {
//         console.log('Object Keys:', Object.keys(this));
//     },
//     keysAndValues(){
//         Object.keys(this).forEach(key => {
//             console.log(`"${key}": ${this[key]}`);
//         });
//     },
//     withParams(top = false, between = false, bottom = false) {
//         if (top) {
//             console.log('--------Start-------');
//         }
//         Object.keys(this).forEach((key, index, array) => {
//             console.log(`"${key}": ${this[key]}`);
//             if (bottom && index !== array.length -1) {
//                 console.log('--------------');
//             }
//         });
//         if (bottom) {
//             console.log('------end------');
//         }
//     }
// };
// // const bound = logger.keys.bind(person);
// // bound();
// // logger.keys.call(person);
// // logger.keysAndValues.call(person);
// logger.withParams.call(person, true, true , true);
// logger.withParams.apply(person, [true, true , true]);

/*############################### Упражнение - сортировка пользователей. ###############################*/
// const users = [
//     {name: "Вася", age: 30},
//     {name: "Катя", age: 18},
//     {name: "Аня", age: 40},
//     {name: "Петя", age: 25}
// ]
// console.log(users.sort((a, b) => a.age - b.age))

/*###############################  Упражнение - преобразование объектов. ###############################*/
/*
    преобразовать пользователей до вида {fullName: "Вася Пупкин', skillNum: 2
*/
// const users = [
//     {
//         name: "Вася",
//         surname: "Пупкин",
//         age: 30,
//         skills: ["Разработка", "DevOps"]
//     },
//     {
//         name: "Катя",
//         surname: "Белова",
//         age: 18,
//         skills: ["Дизайн"]
//     }
// ]
//
// const userData = users.map(user => {
//     return {
//         fullName: `${user.name} ${user.surname}`,
//         skillNum: user.skills.length
//
//     }
// })
// console.log(userData)

/*###############################  Методы объектов ###############################*/
// const user = {
//     name: "Вася",
//     surname: "Пупкин",
//     age: 24,
//     getFullName: function (name, surname) {
//         return  this.name + " " + this.surname
//     }
// }
//
// // function getFullName(user) {
// //     return user.name + " " + user.surname
// // }
// //
// console.log(user.getFullName("name" , "sf"))

/*###############################  Упражнение - кошелёк. ###############################*/
/*
    Реализовать методы увеличения и уменьшения баланса, при котором каждая операция сохраняется
    в массив operations в виде {reason: 'Оплата налогов', sum: - 100 }.
    Возвращается true, если успешно и false, если не хватает баланс
    Так же реализовать метод вывода числа операций по кошельку
*/
// const wallet = {
//     balance: 0,
//     operations: [],
//     increase: function (sum, reason) {
//         this.balance += sum;
//         this.operations.push({
//             reason: reason,
//             sum: sum
//         })
//         return true
//     },
//     decrease: function (sum, reason) {
//         if (this.balance < sum) {
//             console.log("Недостаточно баланса")
//             return false;
//         }
//         this.balance -= sum
//         this.operations.push({
//             reason: reason,
//             sum: -sum
//         })
//         return true;
//     },
//     getOperationLength: function () {
//         return this.operations.length
//     }
// }
//
// console.log(wallet.increase(1000, "Зарплата"));
// console.log(wallet.getOperationLength());
// console.log(wallet.decrease(2000, "Покупка ноутбука"));
// console.log(wallet.getOperationLength());
// console.log(wallet.decrease(500, "Покупка телефона"));
// console.log(wallet.getOperationLength());
// console.log(wallet.balance);
// console.log(wallet.operations);

/*###############################  Итерирование по объекту. ###############################*/
// const cities = {
//     msk: {
//         let: 200,
//         temp: 25
//     },
//     spb: {
//         it: 100,
//         temp: 20
//     }
// }
// // 1)
// //     let sumTemp = 0;
// //     let citiesCount = 0;
// //     for (const key in cities) {
// //         console.log(key)
// //         citiesCount++;
// //         sumTemp += cities[key].temp;
// //     }
// //     console.log(sumTemp / citiesCount)
// // 2)
// //     let sumTemp = 0;
// //     console.log(Object.keys(cities))
// //     let citiesCount = Object.keys(cities).length;
// //     for (const key in cities) {
// //         sumTemp += cities[key].temp;
// //     }
// //     console.log(sumTemp / citiesCount)
// // 3)
// //     let sumTemp = 0;
// //     let citiesCount = Object.keys(cities).length;
// //     for (const key of Object.keys(cities)) {
// //         console.log(key);
// //         sumTemp += cities[key].temp;
// //     }
// //     console.log(sumTemp / citiesCount)

/*###############################  Деструктуризация и rest. ###############################*/
// // const arr = [1, 2, 3];
// // const [z, x, y] = arr;
// // console.log(z)
//
// const user = {
//     name: "Вася",
//     age: 40,
//     city: "Moscow"
// }
// const {age, ...userWidthOuAge} = user;
// console.log(age);
// console.log(userWidthOuAge)
//
// const additionalData = {
//     skills: ['Разработка', "Дизайн"],
//     creditCard: "222323343433"
// }
// // user.skills = additionalData.skills;
// // user.creditCard = additionalData.creditCard;
//
// user.test = "jsjfkl"
//
// // user = {
// //     ...user,
// //     ...additionalData
// // }
// console.log(user)

/*###############################  Optional chaining. ###############################*/
// const cities = {
//     msk: {
//         temp: {
//             celcius: 25
//         }
//     },
//     spb: {
//
//     }
// }
//
// const city = "spb"
// if (cities[city] != undefined && cities[city].temp != undefined) {
//     console.log(cities[city].temp.celcius)
// }
//
// console.log(cities[city]?.temp?.celcius)

/*###############################  Упражнение - склад. ###############################*/
/*
    Сделать объект склад с методами добавления на склад, поиска по складку товара и расчёт веса
*/
// const warehouse = {
//     goods: [],
//     findGoodById: function (id) {
//         return this.goods.find(g => g.id == id);
//     },
//     addGood: function (good) {
//         const existedGood = this.findGoodById(good.id);
//         if (existedGood) {
//             console.log('Этот товар уже есть на складе');
//             return;
//         }
//         this.goods.push(good)
//     },
//     getWeightKg: function () {
//         return this.goods.reduce((acc, el) =>
//             acc += el.weight?.kg ? el.weight.kg : 0,
//             0
//         )
//     }
// };
//
// /* Товары */
// const car = {
//     id: 1,
//     weight: {
//         kg: 1000
//     },
//     brand: "Ford"
// };
//
// const chair = {
//     id: 2,
//     weight: {
//         kg: 2
//     },
// };
// const parer = {
//     id: 3,
//     color: 'red'
// }
//
// warehouse.addGood(car);
// warehouse.addGood(car);
// warehouse.addGood(chair);
// warehouse.addGood(parer);
// console.log(warehouse.goods);
// let finDedItem = warehouse.findGoodById(6);
// console.log(finDedItem);
// finDedItem = warehouse.findGoodById(1);
// console.log(finDedItem);
// const w = warehouse.getWeightKg();
// console.log(w)

// ############################ Примитивы и объекты. ############################
// let firstName = "Anton";
// let firstName2 = firstName;
// firstName = "New"
// console.log(firstName);
// console.log(firstName2);
//
// const user1 = {
//     name: "Anton"
// }
// const user2 = user1;
// user2.name = "New";
// console.log(user1);
// console.log(user2);

// ############################ Пример примитивов и объектов. ############################
// const user = {
//     name: "Anton",
//     id: 1,
//     roles: ["Admin"]
// }
//
// // const newUser = Object.assign({}, user);
// // user.name = "NewUser";
// // console.log(user);
// // console.log(newUser);
//
// const newUser2 = {
//     ...user
// };
// // user.name = "NewUser";
// // console.log(user);
// // console.log(newUser2);
//
// newUser2.name = "NewUser";
// newUser2.roles.push("User")
// console.log(user);
// console.log(newUser2);
