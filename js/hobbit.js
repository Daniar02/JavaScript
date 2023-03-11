// ########################################## Загрузка и сохранение данных. ##########################################
let hobbits = [];
const HOBBIT_KEY = 'HOBBIT_KEY';

/* utils */

function loadData() {
    const hobbitsString = localStorage.getItem(HOBBIT_KEY);
    const hobbitArray = JSON.parse(hobbitsString);
    if (Array.isArray(hobbitArray)) {
        hobbits = hobbitArray
    }
}

function saveData() {
    localStorage.setItem(HOBBIT_KEY, JSON.stringify(hobbits));
}

(() => {
    loadData();
})()