/*############################# Базовые методы ##############################*/
// const userName = "Вася Пупкина";
// console.log(userName[0] + userName[1]) // Ва
// console.log(userName[2]) // с
// console.log(userName.indexOf("а")) // 1
// console.log(userName.lastIndexOf("а")) // 11
// console.log(userName.includes("п")) // true
// console.log(userName.slice(5)) // Пупкина
// console.log(userName.slice(5, 8)) // Пуп


/*############################# Упражнение - выделение имени ##############################*/
const fullUserName = 'Вася aka Terminator Пупкин';
const userName = fullUserName.slice(0, fullUserName.indexOf(" "));
console.log(userName);
const userSurname = fullUserName.slice(fullUserName.lastIndexOf(" ") +1, fullUserName.length);
console.log(userSurname)