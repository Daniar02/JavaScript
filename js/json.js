// ########################################## JSON. ##########################################
/*
    JSON (JavaScript Object Notation) - простой формат обмена данными, удобный для чтения и написания как человеком,
    так и компьютером. Он основан на подмножестве языка программирования JavaScript, определенного в стандарте
    ECMA-262 3rd Edition - December 1999. JSON - текстовый формат, полностью независимый от языка реализации,
    но он использует соглашения, знакомые программистам C-подобных языков, таких как C, C++, C#, Java, JavaScript, Perl,
    Python и многих других. Эти свойства делают JSON идеальным языком обмена данными.
*/

// const obj = JSON.parse('{"a": 1}');
// console.log(obj);
// const str = JSON.stringify(obj);
// console.log(str);

// ###################################### JSON формат передачи данных, глубокое клонирование объектов ######################################
// const persone = {
//     name: 'Alex',
//     tel: '+996709785590',
//     parents: {
//         mom: 'Olga',
//         dad: 'Mike'
//     }
// }
//
// const clone = JSON.parse(JSON.stringify(persone));
// clone.parents.mom = 'Ann';
// console.log(persone);
// console.log(clone);

// ###################################### AJAX и общение с сервером ######################################
// const inputRub = document.querySelector('#rub'),
//       inputUsd = document.querySelector('#usd');
//
// inputRub.addEventListener('input', () => {
//     const request = new XMLHttpRequest();
//
//
//     request.open('GET', 'js/current1.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();
//     console.log(request)
//
//     request.addEventListener('load', () => {
//         if (request.status === 200) {
//             console.log(request.response);
//             const data = JSON.parse(request.response);
//             inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//         } else {
//             inputUsd.value = "Что-то пошло не так";
//         }
//     })

    // status
    // statusText
    // response
// })

