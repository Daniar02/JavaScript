// ########################################## Загрузка и сохранение данных. ##########################################
let hobbits = [];
const HOBBIT_KEY = 'HOBBIT_KEY';
let globalActiveHobbitId;
/* page */
const page = {
    menu: document.querySelector('.menu__list'),
    header: {
        h1: document.querySelector('.h1'),
        progressPercent: document.querySelector('.progress__percent'),
        progressCoverBar: document.querySelector('.progress__cover-bar')
    },
    content: {
        daysContainer: document.getElementById('days'),
        nextDays: document.querySelector('.hobbit__day')
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
    page.header.h1.innerText = activeHobbit.name;
    const progress = activeHobbit.days.length / activeHobbit.target > 1
        ? 100
        : activeHobbit.days.length / activeHobbit.target * 100;
    page.header.progressPercent.innerText = progress.toFixed(0) + '%';
    page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`)
}

function rerenderContent(activeHobbit) {
    page.content.daysContainer.innerHTML = "";
    for (const index in activeHobbit.days) {
        const element = document.createElement('div');
        element.classList.add('hobbit');
        element.innerHTML = `
                        <div class="hobbit__day">День ${Number(index) + 1}</div>
                        <div class="hobbit__comment">${activeHobbit.days[index].comment}</div>
                        <button class="hobbit__delete" onclick="deleteDay(${index})">
                            <img src="./images/delete.svg" alt="Удалить день ${index + 1}">
                        </button>
                       `
        page.content.daysContainer.appendChild(element);
    }
    page.content.nextDays.innerHTML = `День ${activeHobbit.days.length + 1}`
}

function rerender(activeHobbitId) {
    globalActiveHobbitId = activeHobbitId;
    const activeHobbit = hobbits.find(hobbit => hobbit.id === activeHobbitId);
    if (!activeHobbit) {
        return;
    }
    rerenderMenu(activeHobbit);
    rerenderHead(activeHobbit);
    rerenderContent(activeHobbit);
}

/* work with days */
function addDays(event) {
    const form = event.target;
    event.preventDefault();
    const data = new FormData(form);
    const comment = data.get('comment');
    form['comment'].classList.remove('error');
    if (!comment) {
        form['comment'].classList.add('error');
    }
    hobbits = hobbits.map(hobbit => {
        if (hobbit.id === globalActiveHobbitId) {
            return {
                ...hobbit,
                days: hobbit.days.concat([{ comment }])
            }
        }
        return hobbit;
    });
    form['comment'].value = '';
    rerender(globalActiveHobbitId);
    saveData();
}

function deleteDay(index) {
    hobbits = hobbits.map(hobbit => {
        if (hobbit.id === globalActiveHobbitId) {
            hobbit.days.splice(index, 1);
            return {
                ...hobbit,
                days: hobbit.days
            };
        }
        return hobbit;
    });
    rerender(globalActiveHobbitId);
    saveData();
}

/* init */
( () => {
    loadData();
    rerender(hobbits[0].id);
})();