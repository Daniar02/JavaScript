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
var person = {
    _name: "",
    _age: "",

    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length > 2) {
            this._name = value;
        } else {
            console.log("Name is too short!")
        }
    },

    get age() {
        return this._age
    },

    set age(value) {
        if (value < 5) {
            console.log("Too young!");
        } else {
            this._age = value;
        }
    },

    get details() {
        return "Name: " + this.name + ", Age: " + this.age;
    }
}
let muTerminal2 = Object.create(person);
muTerminal2.name = "da";
muTerminal2.age = 7;
console.log(muTerminal2.details);
