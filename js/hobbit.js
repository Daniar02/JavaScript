// ########################################## Загрузка и сохранение данных. ##########################################
let hobbits = [];
const HOBBIT_KEY = 'HOBBIT_KEY';

/* page */
const page = {
    menu: document.querySelector('.menu__list')
}

/* utils */
function loadData() {
    const hobbitsString = localStorage.getItem(HOBBIT_KEY);
    const hobbitArray = JSON.parse(hobbitsString);
    if (Array.isArray(hobbitArray)) {
        hobbits = hobbitArray;
    }
}

function saveData() {
    localStorage.setItem(HOBBIT_KEY, JSON.stringify(hobbits));
}

/* render */
function rerenderMenu(activeHobbit) {
    if (!activeHobbit) {
        return;
    }

    for (const hobbit of hobbits) {
        const existed = document.querySelector(`[menu-hobbit-id="${hobbit.id}"]`);
        if (!existed) {
            // создание
            const element = document.createElement('button');
            element.setAttribute('menu-hobbit-id', hobbit.id);
            element.classList.add('menu__item');
            element.innerHTML = `<img src="./images/${hobbit.icon}.svg" alt="${hobbit.name}" />`;
            if (activeHobbit.id === hobbit.id) {
                existed.classList.add('menu__item_active');
            }
            page.menu.appendChild(element);
            continue;
        }
        if (activeHobbit.id === hobbit.id) {
            existed.classList.add('menu__item_active');
        } else {
            existed.classList.remove('menu__item_active');
        }
    }
}

function rerender(activeHobbitId) {
    const activeHobbit = hobbits.find(hobbit => hobbit.id === activeHobbitId);
    rerenderMenu(activeHobbit);
}

/* init */
( () => {
    loadData();
    rerender(hobbits[0].id);
})();