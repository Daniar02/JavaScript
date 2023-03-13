// ########################################## Загрузка и сохранение данных. ##########################################
let hobbits = [];
const HOBBIT_KEY = 'HOBBIT_KEY';

/* page */
const page = {
    menu: document.querySelector('.menu__list'),
    header: {
        h1: document.querySelector('.h1'),
        progressPercent: document.querySelector('.progress__percent'),
        progressCoverBar: document.querySelector('.progress__cover-bar')
    }
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
            element.addEventListener('click', () => rerender(hobbit.id))
            element.innerHTML = `<img src="./images/${hobbit.icon}.svg" alt="${hobbit.name}" />`;
            if (activeHobbit.id === hobbit.id) {
                element.classList.add('menu__item_active');
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

function rerenderHead(activeHobbit) {
    if (!activeHobbit) {
        return;
    }
    page.header.h1.innerText = activeHobbit.name;
    const progress = activeHobbit.days.length / activeHobbit.target > 1
        ? 100
        : activeHobbit.days.length / activeHobbit.target * 100;
    page.header.progressPercent.innerText = progress.toFixed(0) + '%';
    page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`)
}

function rerender(activeHobbitId) {
    const activeHobbit = hobbits.find(hobbit => hobbit.id === activeHobbitId);
    rerenderMenu(activeHobbit);
    rerenderHead(activeHobbit);
}

/* init */
( () => {
    loadData();
    rerender(hobbits[0].id);
})();