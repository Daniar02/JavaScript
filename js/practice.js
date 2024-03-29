// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', "");
//
//         while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?');
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             let a = prompt('Один из последних просмотренных фильмов?').trim(),
//                 b = prompt('На сколько оцените его?');
//              if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                  personalMovieDB.movies[a] = b;
//                  console.log('Done');
//              } else {
//                  console.log('error');
//                  i--;
//              }
//          }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30 ) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i < 2; i++) {
//             // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//
//             // if (genre === '' || genre === null) {
//             //     console.log('Вы ввели некорректные данные или  ввели их вообще');
//             //     i--;
//             // } else {
//             //     personalMovieDB.genres[i - 1] = genre;
//             // }
//             let genres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase();
//             if (genres === '' || genres === null) {
//                 console.log('Вы ввели некорректные данные или  ввели их вообще');
//                 i--;
//             } else {
//                 personalMovieDB.genres = genres.split(', ');
//                 personalMovieDB.genres.sort();
//             }
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//
//     }
// };

/*--------------------------- Объединение интервалов --------------------------*/
// let input1 = [[1,3], [2,6], [8,10], [15,18]];
// let input2 = [[1,4], [4,5]];
// let input3 = [[11,12], [2,3], [5,7], [1,4], [8,10], [6,8]]
//
// function merge(intervals) {
//     if (intervals.length < 2) {
//         return intervals
//     }
//
//     intervals.sort((a,b) => a[0] - b[0])
//
//     let result = [intervals[0]];
//
//     for (let interval of intervals) {
//         let recent = result[result.length -1];
//
//         if (recent[1] >= interval[0]) {
//             recent[1] = Math.max(recent[1], interval[1])
//         } else {
//             result.push(interval)
//         }
//
//     }
//
//     return result
//
// }
//
// console.log(merge(input1));
// console.log(merge(input2));
// console.log(merge(input3));

/*--------------------------- Лучшее время для покупки акций #1 --------------------------*/
// let prices1 = [7, 1, 5, 3, 6, 4];
// let prices2 = [7, 6, 4, 3, 1];
//
// const maxProfit = (prices) => {
//     let minPrice = prices[0]
//     let maxProfit = 0;
//
//     for (let i = 0; i < prices.length; i++) {
//         const current = prices[i];
//
//         if (current < minPrice) {
//             minPrice = current;
//         }
//
//         if (current - minPrice > maxProfit) {
//             maxProfit = current - minPrice;
//         }
//     }
//     return maxProfit;
// }
//
// console.log(prices1, maxProfit(prices1));
// console.log(prices2, maxProfit(prices2));

/*--------------------------- Лучшее время для покупки акций #2 --------------------------*/
// let prices1 = [7, 1, 5, 3, 6, 4]; // 7
// let prices2 = [7, 6, 4, 3, 1]; // 0
//
// let maxProfit = (prices) => {
//     let result = 0;
//
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] > prices[i -1]) {
//             result += prices[i] - prices[i -1]
//         }
//     }
//
//     return result
// }
//
// console.log(prices1, maxProfit(prices1));
// console.log(prices2, maxProfit(prices2));

/*--------------------------- Уникальность всех символов в строке --------------------------*/
// function isUnique(string) {

/* 1)
    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (string.lastIndexOf(char) !== i) {
            return false
        }
    }
    return true
*/

/* 2)
    return new Set(string).size === string.length
*/
// }
// console.log(isUnique('abcdef')) // -> true
// console.log(isUnique('1234567')) // -> true
// console.log(isUnique('abcABC')) // -> true
// console.log(isUnique('abcadef')) // -> false

/*--------------------------- Плоский массив --------------------------*/
/*
function flatten(array) {
    const res = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            const flat = flatten(array[i])
            console.log('Flat',flat)
            for (let j = 0; j < flat.length; j++) {
                res.push(flat[j])
                console.log('Flat', flat[j])
            }
        } else {
            res.push(array[i])
        }
    }
    return res
}
console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4];
*/

/*--------------------------- Удаление всех повторяющихся значений в строке --------------------------*/
// function removeDupes(str) {
/* 1)
    const res = [];
    const map = {}
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (!map[char]) {
            map[char] = true;
            res.push(char)
        }
    }
    return res.join('')
*/
/* 2)
    return Array.from(new Set(str)).join('');
 */
// }
// console.log(removeDupes('abcd')) // -> 'abcd'
// console.log(removeDupes('aabbccdd')) // -> 'abcd'
// console.log(removeDupes('abcddbca')) // -> 'abcd'
// console.log(removeDupes('abababcdcdcd')) // -> 'abcd'

/*--------------------------- Какая строка встречается чаще всего --------------------------*/
/*
function highestFrequency(array) {
    const map = {};
    let maxFreq = 0;
    let maxFreqStr = array[0]

    for (let i = 0; i < array.length; i++) {
        const current = array[i];

        if (map[current]) {
            map[current]++
        } else {
            map[current] = 1;
        }

        if (map[current] > maxFreq) {
            maxFreq = map[current];
            maxFreqStr = current
        }
    }
    return maxFreqStr
}
console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi
*/

/*--------------------------- Повернута ли строка? --------------------------*/
// function isStringRotated(source, test) {
/* 1)
    if (source.length !== test.length) {
        return false
    }
    for (let i = 0; i < source.length; i++) {
        const rotate = source.slice(i, source.length) + source.slice(0, i)
        if (rotate === test) {
            return true
        }
    }
    return false
*/
/* 2)
    return (source + source).includes(test) && source.length === test.length
 */
// }
// console.log(isStringRotated('javascript', 'scriptjava')) // -> true
// console.log(isStringRotated('javascript', 'iptjavascr')) // -> true
// console.log(isStringRotated('javascript', 'java')) // -> false

/*--------------------------- Является ли массив подмножеством другого массива --------------------------*/
/*
function arraySubset(source, subset) {
    if (source.length < subset.length) {
        return false
    }

    for (let i = 0; i < subset.length; i++) {
        const index = source.indexOf(subset[i])
        if (index === -1) {
            return false
        }
        delete source[index]
    }
    return true
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // -> false
console.log(arraySubset([1, 2], [1, 2, 3])) // -> false
*/

/*--------------------------- Анаграммы --------------------------*/
/*
function allAnagrams(array) {
    const sorted = array.map(str => str.split('').sort().join(''));
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] !== sorted[0]) {
            return false
        }
    }
    return true
}
console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false
*/

/*--------------------------- Алгоритмы --------------------------*/
// function search(array, target) {
/* 1) Time: O(n)
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
    return -1
*/

/* 2) Time: O(log(n))
    let start = 0;
    let end = array.length -1;

    if (target < array[start] || target > array[end]) {
        return -1
    }

    while (true) {
        if (target === array[start]) {
            return start
        }
        if (target === array[end]) {
            return end
        }
        if (end - start <= 1) {
            return -1
        }
        const middle = Math.floor((start + end) / 2);

        if (target > array[middle]) {
            start = middle + 1
        } else if (target < array[middle]) {
            end = middle - 1
        } else  {
            return middle
        }
    }
 */
// }
// console.log(search([1, 3, 6, 13, 17], 13)) // -> 3
// console.log(search([1, 3, 6, 13, 17], 12)) // -> -1

/*--------------------------- Сбалансированные скобки --------------------------*/
/*
function isBalanced(string) {
    const start = '([{';
    const end = '}])';
    const queue = [];
    const map = {
        '}':'{',
        ']':'[',
        ')':'('
    };
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (start.includes(char)) {
            queue.push(char)
        } else if (end.includes(char)) {
            const last = queue.pop();
            if (map[char] !== last) {
                return false;
            }
        }
    }
    return !queue.length
}
console.log(isBalanced('(x + y) - (4)')) // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // -> true
console.log(isBalanced('[{()}]')) // -> true
console.log(isBalanced('(50)(')) // -> false
console.log(isBalanced('[{]}')) // -> false
*/

/*--------------------------- Deep Equal --------------------------*/
/*
function deepEqual(a, b) {
    if (Number.isNaN(a) && Number.isNaN(b)) {
        return true
    }
    if (typeof a !== typeof b) {
        return false
    }
    if (typeof  a !== 'object' || a === null || b === null) {
        return a === b
    }
    if (Object.keys(a).length !== Object.keys(b).length) {
        return false
    }
    for (const key of Object.keys(a)) {
        if (!deepEqual(a[key], b[key])) {
            return false
        }
    }
    return true
}
const source = {a: 1, b: {c: 1}}
const test1 = {a: 1, b: {c: 1}}
const test2 = {a: 1, b: {c: 2}}
console.log(deepEqual(source, test1)) // -> true
console.log(deepEqual(source, test2)) // -> false
console.log(deepEqual(NaN, NaN)) // -> true
console.log(deepEqual('test', 'test!')) // -> false
console.log(deepEqual()) // -> true
console.log(deepEqual(25, 'str')) // -> false
*/

/*--------------------------- Последовательность Фибоначчи --------------------------*/
/* 1)
function fibonacci(n) {
    const seq = [1, 1]
    if (n < 2) {
        return seq.splice(0, n)
    }
    while (seq.length < n) {
        const last = seq[seq.length -1]
        const prev = seq[seq.length -2]
       seq.push(last + prev)
    }
    return seq
}
*/
/* 2)
const fibonacci = (function () {
    const seq = [1, 1]
    return function (n) {
        console.log('Called with ', n)
        if (seq.length >= n) {
            console.log('No compute')
            return seq.slice(0, n)
        }
        while (seq.length < n) {
            const last = seq[seq.length -1]
            const prev = seq[seq.length -2]
            seq.push(last + prev)
            console.log('Pushed: ', seq[seq.length -1])
        }
        return seq
    }
})()
*/
// console.log(fibonacci(10)) // -> [1, 1, 2, 3, 5, 8, 13, 21]
// console.log(fibonacci(8)) // -> [1, 1, 2, 3, 5, 8, 13, 21]
// console.log(fibonacci(12)) // -> [1, 1, 2, 3, 5, 8, 13, 21]

/*--------------------------- Универсальная сумма --------------------------*/
/*
function add(a, b) {
    if (typeof a === 'undefined') {
        return add
    }
    if (typeof b === 'undefined') {
        return function sum(c) {
            if (typeof c === 'undefined') {
                return sum
            }
            return a + c
        }
    }
    return a + b
}
console.log(add(20, 22)) // -> 42
console.log(add(20)(22)) // -> 42
console.log(add(20)()(22)) // -> 42
console.log(add(20)()()()(22)) // -> 42
console.log(add(20)()()()()()()()()()()()(22)) // -> 42
console.log(add()(20)(22)) // -> 42
console.log(add()()()()(20)(22)) // -> 42
console.log(add()(20)()(22)) // -> 42
console.log(add()()()()()(20)()()()(22)) // -> 42
*/

/*--------------------------- GroupBy --------------------------*/
/*
function groupBy(array, fn) {
    return array.reduce((res, current) => {
        const key = typeof fn === 'function' ? fn(current) : current[fn]

        if (!res[key]) {
            res[key] = []
        }
        res[key].push(current)

        return res
    }, {})
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) // -> { '4': [4.2], '6': [6.1, 6.3] }
console.log(groupBy(['one', 'two', 'three'], 'length')) // -> { '3': ['one', 'two'], '5': ['three'] }
*/

/*--------------------------- Очередь с О(1) сложностью операций --------------------------*/
/*
class LinkedList {
    #length = 0

    constructor() {
        this.head = null
        this.tail = null
    }

    addToTail(value) {
        const node = {
            value,
            next: null
        }

        if (this.#length === 0) {
            this.head = node
            this.tail = node
        } else {
            this.tail = node
        }

        this.#length++
    }

    removeFromHead() {
        if (this.#length === 0) {
            return
        }

        const value = this.head.value

        this.head = this.head.next
        this.#length--

        return value
    }

    size() {
        return this.#length
    }
}


class Queue extends LinkedList {
    constructor() {
        super()

        this.enqueue = this.addToTail
        this.dequeue = this.removeFromHead
    }

    get size() {
        return super.size()
    }
}
*/

/*--------------------------- Сумма элементов массива --------------------------*/
// const array = [1, 2, 2, 3, 4, 5, 6, 6, 1];
//
// let sum = array.reduce((acc, next) => acc + next, 0)
//
// console.log(sum)

/*--------------------------- Максимальный или минимальный элемент массива  --------------------------*/
// const array = [1, 2, 2, 4, 5, 6, 6];

/* 1)
let max = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i]
    }
}
*/

/* 2)
let max = array.reduce((acc, next) => Math.max(acc, next));
*/
// console.log(max);

/*--------------------------- Сортировка массива --------------------------*/
// const array = [2, 1, 3, 4, 6, 5];
// array.sort((x1, x2) => x1 - x2 );
// console.log(array);
//
// const users = [
//     {
//         name: 'Alex',
//         age: 30
//     },
//     {
//         name: 'Olga',
//         age: 20
//     }
// ];
//
// /*users.sort((u1, u2) => u1.age - u2.age);*/
// /*
// users.sort((u1, u2) => {
//     return u1.name.localeCompare(u2.name)
// });
// */
// console.log(users)

/*--------------------------- Развернуть массива --------------------------*/
const array = [2, 1, 3, 4, 6, 5];
const reversed = array.map((e, i, arr) => arr[arr.length - i - 1]);
console.log(reversed);
// console.log(
//     [...array].map(array.pop, array)
// )

/*--------------------------- Удалить falsy значения --------------------------*/
// const array = [7, 'correct', 0, false, 9, NaN, ''];
// const notFalsy = array.filter(Boolean);
// const notFalsy = array.filter(n => !!n);
// console.log(notFalsy);

/*--------------------------- Сколько раз каждый элемент встречается в массиве --------------------------*/
// {kiwi: 3, apple: 2, orange: 1}
// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
//
// const countFruit = (list) => {
//     const count = {};
//
//     list .forEach(f => {
//         if (!count[f]) {
//             count[f] = 1;
//         } else {
//             count[f] ++;
//         }
//     });
//
//     return count;
// }
// console.log(countFruit(fruits));

/*--------------------------- Создать массив который содержит только уникальные значения --------------------------*/
// ['kiwi', 'apple', 'orange']
// const myFruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
//
// const uniqueItems = (list) => {
//     const unique = {};
//
//     list.forEach(f => {
//         unique[f] = true;
//     });
//
//     return Object.keys(unique);
// };
// console.log(uniqueItems(myFruits));

/*--------------------------- Создать функцию, которая сгруппирует студентов по возрасту. --------------------------*/
/*--------------------------- На выходе получить объект, где ключ - возраст, а значение - массив студентов --------------------------*/
/*
{
    '20': [{name: 'alex', age: 20}, {name: 'masha', age: 20}],
    '24': [{name: 'miki', age: 24}],
    '18': [{name: 'ivan', age: 18}],
}
*/

// const students = [
//     {name: 'alex', age: 20},
//     {name: 'miki', age: 24},
//     {name: 'masha', age: 20},
//     {name: 'ivan', age: 18},
// ];
//
// const groupStudents = (list) => {
//     const grouped = {};
//
//     list.forEach(s => {
//         if (!grouped[s.age]) {
//             grouped[s.age]= [s];
//         } else {
//             grouped[s.age].push(s);
//         }
//     });
//
//     return grouped;
// };
//
// console.log(groupStudents(students));

/*--------------------------- Написать функцию, которая принимает два аргумента: --------------------------*/
/*
    массив из уникальных целых чисел и сумму в виде целого числа.
    Если сумма двух любых чисел массива из аргумента равна числу,
    которое приходит вторым аргументом, функция должна
    вернуть новый массив из этих двух чисел в любом порядке.
    Если решения нет, вернуть пустой массив.
*/
// [-1, 11] или [11, -1] - так как -1 + 11 = 10;

// const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];
// const sum = 10;
//
// const findPairs = (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         const numFirst = nums[i];
//
//         for (let j = i + 1; j< nums.length; j++) {
//             const numSecond = nums[j];
//
//             if (numFirst + numSecond === target) {
//                 return [numFirst, numSecond];
//             }
//         }
//     }
//
//     return [];
// }
//
// console.log(findPairs(myNumbers, sum));

/*--------------------------- Получить единый массив из любимых пицц каждого друга --------------------------*/
// [ 'cheese', 'pepperoni', 'salami', 'margarita', 'meat', 'fish' ]

// const friends = [
//     {name: 'alex', pizzas: ['cheese', 'pepperoni']},
//     {name: 'mike', pizzas: ['salami', 'margarita']},
//     {name: 'stos', pizzas: ['meat']},
//     {name: 'anna', pizzas: ['fish']},
// ];
//
// const pizzas = friends.reduce((accum, current) => {
//     return [...accum, ...current.pizzas];
// }, []);
//
// console.log(pizzas);

/*--------------------------- Записать строку (символы строки) в обратном порядке (2 способа) --------------------------*/
// pizza => azzip
// const myStr = 'pizza';
// const reverseString = (str) => {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString(myStr));

/*--------------------------- Правильная последовательность скобок --------------------------*/
// let s1 = '()'; // true;
// let s2 = '()[]{}'; // true;
// let s3 = '(]'; // false;
// let s4 = '{[]}'; // true;
// let s5 = '([)]'; // false;
// let s6 = '{[[]{}]}'; // true;
//
// function isValid(s) {
//     let stack = [];
//     let brackets = {
//         ')': '(',
//         '}': '{',
//         ']': '[',
//     }
//
//     for (let i = 0; i < s.length; i++) {
//         const current = s[i];
//         if (isClosedBracket(current)) {
//             if (brackets[current] !== stack.pop()) return false;
//         } else {
//             stack.push(current);
//         }
//     }
//     return stack.length === 0;
// }
//
// function isClosedBracket (ch) {
//     return [')', '}', ']'].indexOf(ch) > -1;
// }
//
// console.log(s1, isValid(s1));
// console.log(s2, isValid(s2));
// console.log(s3, isValid(s3));
// console.log(s4, isValid(s4));
// console.log(s5, isValid(s5));
// console.log(s6, isValid(s6));

/*--------------------------- сделай так чтобы при клике кнопки добавлялся класс active и удалялся при повторном клике на  кнопку --------------------------*/
// DOM container box 4
// let $container = window.document.querySelectorAll('#container button');
//
// console.log($container);
//
// for (let i = 0; i < $container.length; i++) {
//     $container[i].addEventListener('click', () => {
//         if ($container[i].classList.contains('active')) {
//             $container[i].classList.remove('active');
//         } else {
//             $container[i].classList.add('active');
//         }
//     });
// }
