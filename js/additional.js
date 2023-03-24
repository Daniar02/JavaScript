// ################################ Оператор нулевого слияния (Nullish, ) ES11 ################################
// const box = document.querySelector(".box");
//
// const newHeight = 100;
// const newWidth = 500;
//
// function changeParams(elem, h , w) {
//     elem.style.height = `${h ?? 200}px`;
//     elem.style.width = `${w ?? 200}px`;
//     elem.innerHTML = (h ?? 200) * (w ?? 200);
// }
// changeParams(box, newHeight, newWidth);
//
// let userName;
// let userKey;
// console.log(userName ?? userKey ?? 'user');

// ################################ Оператор опциональной цепочки (.) ES11. ################################
// const box = document.querySelector('.box');
// const block = document.querySelector('.block');
//
// console.log(block);

// if (block) {
//     console.log(block.textContent);
// }

// console.log(block?.textContent);

// console.log(1 + 2);

// const userData = {
//     name: 'Ivan',
//     age: null,
//     say: function () {
//         console.log("Hello");
//     }
// };
// userData.say();
// userData.hey?.();

// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }

// console.log(userData?.skills?.js);

// ################################ Живые коллекции и полезные методы. ################################\
// const boxesQuery = document.querySelectorAll('.box');
// const boxesGet = document.getElementsByClassName('box');

// boxesQuery.forEach(box => {
//     if(box.matches('.this')) {
//         console.log(box);
//     }
// });

// console.log(boxesQuery[0].closest('.wrapper'));



// // boxesQuery[0].remove();
// // boxesGet[0].remove();

// // for (let i = 0; i < 5; i++) {
// //     const div = document.createElement('div');
// //     div.classList.add('box');
// //     document.body.append(div);
// // }

// // console.log(boxesQuery);
// // console.log(boxesGet);
// // // console.log(document.body.children);

// // console.log(Array.from(boxesGet));

// ################################ Тип данных Symbol ################################
// // let id = Symbol('id');

// const obj = {
//     'name': 'Test',
//     [Symbol("id")]: 1,
//     // getId: function() {
//     //     return this[id];
//     // }
// };

// // // let id = Symbol('id');
// // // let id2 = Symbol('id');

// // // console.log(id == id2);

// // // obj[id] = 1;

// // // console.log(obj.getId());

// // console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// // // for (let value in obj) {
// // //     console.log(value);
// // // }

// const myAwesomeDB = {
//     movies: [],
//     actors: [],
//     [Symbol.for('id')]: 123
// };

// // Сторонний код библиотеки

// myAwesomeDB.id = '323232';
// console.log(myAwesomeDB[Symbol.for('id')]);
// console.log(myAwesomeDB);

// ################################ Итерируемые конструкции ################################
// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };
// // in
// // for (const key in user) {
// //     console.log(user[key]);
// // }
//
// // const arr = ['b', 'a', 'c'];
//
// // for (const key in arr) {
// //     console.log(arr[key]);
// // }
//
// // const str = 'string';
//
// // for (const key in str) {
// //     console.log(str[key]);
// // }
// // of
// // for (const key of user) {
// //     console.log(key);
// // }
//
// const arr = ['b', 'a', 'c'];
// Array.prototype.someMethod = function() {};
// for (const key of arr) {
//     console.log(key);
// }
//
// // const str = 'string';
//
// // for (const key of str) {
// //     console.log(key);
// // }
//
// const salaries = {
//     jonh: 500,
//     ivan: 1000,
//     ann: 5000,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// salaries[Symbol.iterator] = function() {
//     return {
//         curent: this.jonh,
//         last: this.ann,

//         next() {
//             if (this.curent < this.last) {
//                 this.curent = this .curent + 500;
//                 return {done: false, value: this.curent};
//             } else {
//                 return {done: true};
//             }
//         }
//     };
// };

// const iterator = salaries[Symbol.iterator]();
// console.log(iterator.next());

// // for (let res of salaries) {
// //     console.log(res);
// // }

// ################################ Map() ################################
// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };

// const userMap = new Map(Object.entries(user));


// const newUserObj = Object.fromEntries(userMap);
// console.log(newUserObj);

// const shops =[
//     {rice: 500},
//     {oil: 200},
//     {bread: 50}
// ];

// const budget = [5000,15000, 25000];

// const map = new Map([
//     [{paper: 400}, 8000]
// ]);

// shops.forEach((shop, i) => {
//     map.set(shop, budget[i]);
// });

// // map.set(shops[0], 5000);
// // map.set(shops[1], 15000);
// // map.set(shops[2], 25000);

// console.log(map);
// // console.log(map.get(shops[0]));
// // console.log(map.has(shops[0]));
// // map.delete(key);
// // map.clear();
// // map.size;
// // map.keys()

// // const goods = [];
// // for (let shop of map.keys()) {
// //     goods.push(Object.keys(shop)[0]);
// // }
// // console.log(goods);

// // for (let price of map.values()) {
// //     console.log(price);
// // }

// // for (let [shop, price] of map.entries()) {
// //     console.log(price, shop);
// // }

// // map.forEach((value, key, map) => {
// //     console.log(key, value);
// // });

// ################################ Set() ################################
// const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// console.log(unique(arr));

// const set = new Set(arr);

// set.add('Ivan');
// set.add('Oleg');

// console.log(set);

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// for (let value of set) {
//     console.log(value);
// }

// set.forEach((value, valueAgaing, set) => {
//     console.log(value, valueAgaing);
// });

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());

// ################################ BigInt.() ################################
// const bigint = 123123123313313131131131133n;

// const sameBigint = BigInt(123123123313313131131131133);

// console.log(2n === 4);

// let bigint = 1n;
// let number = 2;

// console.log(bigint + BigInt(number));
// console.log(Number(bigint) + number);

