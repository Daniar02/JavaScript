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
