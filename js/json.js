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

