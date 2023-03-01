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
// const fullUserName = 'Вася aka Terminator Пупкин';
// const userName = fullUserName.slice(0, fullUserName.indexOf(" "));
// console.log(userName);
// const userSurname = fullUserName.slice(fullUserName.lastIndexOf(" ") +1, fullUserName.length);
// console.log(userSurname);


/*############################# Преобразование строки ##############################*/
// const str = 'Вася Пупкин';
// console.log(str.includes("В")); // true
// console.log(str.startsWith("а")); // false
// console.log(str.endsWith("н")); // true
// console.log(new String('Вася Пупкин').includes("а")); // true
// console.log(str.replace("П", "б")); // бупкин
// console.log(str.replaceAll("a", "б")); // все
// console.log(str.replace(/а/g, "б")) // все
//
// const str2 = '  Вася Пупкин   ';
// console.log(str2.trim()) // убирает личные пробелы
// console.log(str2.trimStart())
// console.log(str2.trimEnd())


/*############################# Упражнение - проверка номера ##############################*/
/* Проверить является ли это номером телефона Кыргызстана */
/* верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = ' +7(910) 323-53-56 '

/* не верные */
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

function isPhoneNumber(num) {
    num = num.trim();
    num = num.replace("+7", "8");
    if (!num.startsWith("8")) {
        return false;
    }
    num = num.replaceAll("(", "");
    num = num.replaceAll(")", "");
    num = num.replaceAll(" ", "");
    num = num.replaceAll("-", "");
    if (num.length != 11) {
        return false;
    }
    let onlyNumber = true;
    for (const char of num) {
        if (isNaN(Number(char))) {
            onlyNumber = false;
            break;
        }
    }
    return onlyNumber;
}

console.log(isPhoneNumber(num1));
console.log(isPhoneNumber(num2));
console.log(isPhoneNumber(num3));
console.log(isPhoneNumber(num4));
console.log(isPhoneNumber(num5));

console.log(isPhoneNumber(num1Error));
console.log(isPhoneNumber(num2Error));
console.log(isPhoneNumber(num3Error));
console.log(isPhoneNumber(num4Error));

/*############################# Строки и массивы ##############################*/
const userFullName = "Вася Пупкин Васильевич";
console.log(userFullName.split(" "));
const [firstName, familyName, lastName] = userFullName;
console.log(firstName);
console.log(familyName);
console.log(lastName);
const arr = ["Ты", "знаешь", "JS"];
console.log(arr.join(" "));

/*############################# Дополнение строк ##############################*/
const film = "Звёздные Воины ";
console.log(film.padStart(50, "*"));
console.log(film.padEnd(50));
console.log(film.repeat(10));

/*############################# Упражнение - маскировка карты ##############################*/
/* Замаскировать всё, кроме последних 4х символов */
const card = "2324252627282920222323";
console.log(card.slice(-4).padStart(16, "*"));
