// ########################################## forEach ##########################################
// Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
// const score = [5, 10, 0, 15]
// for(const [i, el] of score.entries()) {
//     console.log(`Раунд: ${i + 1} ${el}`)
// }

// score.forEach((scroleEL, i) => {
//     console.log(`Раунд: ${i + 1} ${scroleEL}`)
// })
// (5, 0) => {...};
// (10, 0) => {...};
// ########################################## map ##########################################
// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

// const transactionInUSD = [10, -7, 50, -10, 100];

// const transactionInRUB = []
// for (const transaction of transactionInUSD) {
//     transactionInRUB.push(transaction * 60)
// }

// console.log(transactionInUSD);
// console.log(transactionInRUB);

// // map
// const transactionInRUB2 = transactionInUSD.map((transaction) => {
//  return transaction * 60
// })
// console.log(transactionInUSD);
// console.log(transactionInRUB2);

// ########################################## filter ##########################################
// Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
// const operations = [100, -20, 7, -20, 50];
// // const positiveOperations = [];
// // for (const operation of operations) {
// //     if (operation > 0) {
// //         positiveOperations.push(operation);
// //     }
// // }
// // console.log(positiveOperations);

// const positiveOperations = operations.filter((operation) => {
//     return operation > 0;
// })
// console.log(positiveOperations);

// const positiveRUBOperations = operations
//     .filter(operation => {
//         return operation > 0;
//     })
//     .map(operation => operation + 60);
// console.log(positiveRUBOperations);

// ########################################## Упражнение - вывод изменений цен ##########################################
// Имеется массив изменения цен prices, где внутри
// 1й элемент массива является ценой в момент Х,
// 2й - ценой в момент Y.
// Нужно преобразовать данные в массив, где будут отображены
// только положительные изменения цен: [100, 150]
// const prices = [[100, 200], [120, 100], [200, 350]];
// const result = prices
//     .map(product => product[1] - product[0])
//     .filter(price => price > 0);
// console.log(result);

// ########################################## reduce ##########################################
// Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
// const operations = [100, -20, 7, -30, 50];
// let balance = 0;
// for (const operation of operations) {
//     balance += operation;
// }
// console.log(balance);

// const finalBalance = operations.reduce((acc, operation, i) => {
//     console.log(`Итерация ${i}, acc ${acc}, operations ${operation}`)
//     return acc += operation
// }, 0)
// console.log(finalBalance)

// const minElement = operations.reduce((acc, operation, i) => {
//     if (operation > acc) {
//         return acc;
//     } else {
//         return operation
//     }
// }, 0) ;
// console.log(minElement);

// 0 - acc = 0, operation = 100;
// 1 - acc = 0, operation = 100;

// ########################################## Упражнение - среднее значение ##########################################
// Найти среднее значение последовательность
// числе с помощью reduce

// const arr = [2, 4, 4, 10];

// const avg = arr.reduce((acc, el, i) => {
//     if (i != arr.length - 1) {
//         return acc + el;
//     } else {
//         return (acc + el) / arr.length
//     }
// },0)
// console.log(avg)

// ########################################## find и findIndex ##########################################
/*
    Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию
    переданному в callback функции. В противном случае возвращается undefined.

    Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции.
    В противном случае возвращается -1.
 */
// const arr = [2, 4, 4, 10];
// let elGT5;
// for (const el of arr) {
//     if (el > 5) {
//         elGT5 = el;
//         break;
//     }
// }
// console.log(elGT5)

// elGT5 = arr.find(el => el > 5);
// findIndex = arr.findIndex(el => el > 5);
// console.log(elGT5);
// console.log(findIndex)

// ########################################## Упражнение - реализация some. ##########################################
/*
    Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
*/
// Написать функцию, которые возващает true,
// если элемент есть, u false, если нет.

// const arr = [2, 4, 4, 10, 20];
// function some(array, element) {
//     const res = array.find(el => el === element);
//     return res == undefined ? false : true;
// }
// console.log(some(arr, 0));

// console.log(arr.some(el => el === 2));

// ########################################## flat и flatMap ##########################################
/*
    Метод flat() возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно
    "подняты" на указанный уровень depth.

    Метод flatMap() сначала применяет функцию к каждому элементу, а затем преобразует полученный результат
    в плоскую структуру и помещает в новый массив. Это идентично map функции, с последующим применением
    функции flat с параметром depth (глубина) равным 1, но flatMap часто бывает полезным, так как работает
    немного более эффективно.
*/
// const prices = [[2, 4], [3, 4], [10, [20, 50]]];
// const res = prices.flat(2);
// const res2 = prices.flatMap(el => el.concat([]));
// console.log(res);
// console.log(res2);

// ########################################## sort ##########################################
// const users = ['Вас', 'Маша', 'Катя', 'Аня']
// console.log(users);
// users.sort();
// console.log(users);
// const operations = [-20, -300, -100, 50, 480];
// console.log(operations);

// operations.sort((a, b) =>  a - b
//     // if (a > b) {
//     //     return 1;
//     // }
//     // if (a < b) {
//     //     return -1;
//     // }
// );
// console.log(operations);

// operations.sort((a, b) => {
//     if (a < b) {
//         return 1;
//     }
//     if (a > b) {
//         return -1;
//     }
// })
// console.log(operations);

// ########################################## Быстрое создание массивов ##########################################
// const arr = [1, 2, 3, 4, 5];

// console.log(new Array(1, 2, 3, 4, 5));

// const arr2 = new Array(5);
// console.log(arr2);
// arr2.fill(1, 0, 3);
// arr2.fill(2, 3, 5)
// console.log(arr2);

// const arr3 = Array.from({ length: 5}, () => );
// console.log(arr3)
