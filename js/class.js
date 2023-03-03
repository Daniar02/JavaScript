/*
    Класс в JS - это расширяемый шаблон кода, заготовка для создания объекта. Классы в JS предназначены для
    упрощения создания объектов и организации прототипного наследования.

    В объектно-ориентированном программировании класс – это расширяемый шаблон кода для создания объектов,
    который устанавливает в них начальные значения (свойства) и реализацию поведения (методы).

    Классы в JavaScript были введены в ECMAScript 2015 и представляют собой синтаксический сахар над существующим
    в JavaScript механизмом прототипного наследования. Синтаксис классов не вводит новую объектно-ориентированную
    модель, а предоставляет более простой и понятный способ создания объектов и организации наследования.

    Синтаксис класса значительно упрощает работы с объектами.

    // Определение классов
        На самом деле классы — это "специальные функции", поэтому точно также, как вы определяете функции
        (function expressions и function declarations), вы можете определять и классы с помощью:
        class declarations и class expressions.
*/
// Создание объекта
// class Planet {
//
// }
// let myPlanet = new Planet()

/*
    new
        1) Новый объект имеет тип Planet
        2) [[Prototype]] нашего нового объекта является новой функцией или свойствам класса prototype
        3) Выполняется функция-конструктор, которая занимается инициализацией нашего созданного объекта
*/

// Конструктор
// class Planet {
//     constructor(name, radius) {
//         this.name = name;
//         this.radius = radius;
//     }
// }
// // Вызываем класс Planet для создания объекта
// let myPlanet = new Planet("Earth", 6378);
// console.log(myPlanet)

// Если не использовать синтаксис класс, то можно сделать так
// function planet(name, radius) {
//     this.name = name;
//     this.radius = radius;
// }
// let myPlanet2 = new planet("Earth", 6378);
// console.log(myPlanet2);

/*######################### Что помещается в класс #########################*/
// class Planet {
//     constructor(name, radius) {
//         this.name = name;
//         this.radius = radius;
//     }
//     getSurfaceArea() {
//         let surfaceArea = 4 * Math.PI * Math.pow(this.raadius, 2);
//         console.log(surfaceArea + " square km!");
//         return surfaceArea
//     }
//
//     set gravity(value) {
//         console.log("Setting value!")
//         this._gravity = value;
//     }
//
//     get gravity() {
//         console.log("Getting value!")
//         return this._gravity
//     }
// }
// let earth = new Planet("Earth", 6378);
// earth.gravity = 9.81;
// earth.getSurfaceArea()
// console.log(earth.gravity)

// Упрощение функции
/*
    let blah = {
        zor: function () {

        }
    }

    let blah = {
    zor() {}
    }
*/

/*######################### Расширение объектов #########################*/
// class PotatoPlanet {
//     constructor(name, radius, potatoType) {
//         this.name = name;
//         this.radius = radius;
//         this.potatoType = potatoType;
//     }
//
//     getSurfaceArea() {
//         let surfaceArea = 4 * Math.PI * Math.pow(this.radius, 2);
//         console.log(surfaceArea + " square km!");
//         return surfaceArea;
//     }
//
//     getPotatoType() {
//         var thePotato = this.potatoType.toUpperCase() + "!!1!!";
//         console.log(thePotato);
//         return thePotato
//     }
//
//     set gravity(value) {
//         console.log("Setting value!");
//         this._gravity = value;
//     }
//
//     get gravity() {
//         return this._gravity;
//     }
// }

class Planet {
    constructor(name, radius) {
        this.name = name;
        this.radius = radius;
    }

    getSurfaceArea() {
        let surfaceArea = 4 * Math.PI * Math.pow(this.radius, 2);
        console.log(surfaceArea + " square km!");
        return surfaceArea;
    }

    set gravity(value) {
        console.log("Setting value!");
        this._gravity = value;
    }

    get gravity() {
        return this._gravity;
    }
}
class PotatoPlanet extends Planet {
    constructor(name, width, potatoType) {
        super(name, width);
        this.potatoType = potatoType;
    }

    getPotatoType() {
        let thePotato = this.potatoType.toUpperCase() + "!!1!!";
        console.log(thePotato);
        return thePotato
    }
}
let sputnik = new PotatoPlanet("Sputnik", 12411,"Russet");
sputnik.gravity = 42.1;
sputnik.getPotatoType()
