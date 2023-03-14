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
    },
    popup: {
        index: document.getElementById('add-hobbit-popup'),
        iconField: document.querySelector('.popup__form input[name="icon"]')

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

function togglePopup() {
    if (page.popup.index.classList.contains('cover_hidden')) {
        page.popup.index.classList.remove('cover_hidden');
    } else {
        page.popup.index.classList.add('cover_hidden');
    }
}

function resetForm(form, fields) {
    for (const field of fields) {
        form[field].value = '';
    }
}

function validateAndGetFormData(form, fields) {
    const formData = new FormData(form);
    const res = {}
    for (const field of fields) {
        const fieldValue = formData.get(field);
        form[field].classList.remove('error');
        if (!fieldValue) {
            form[field].classList.add('error');
        }
        res[field] = fieldValue;
    }
    let isValid = true;
    for (const field of fields) {
        if (!res[field]) {
            isValid = false;
        }
    }
    if (!isValid) {
        return;
    }
    return res;
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
    event.preventDefault();
    const data = validateAndGetFormData(event.target, ['comment']);
    if (!data) {
        return;
    }
    hobbits = hobbits.map(hobbit => {
        if (hobbit.id === globalActiveHobbitId) {
            return {
                ...hobbit,
                days: hobbit.days.concat([{comment: data.comment}])
            }
        }
        return hobbit;
    });
    resetForm(event.target, ['comment'])
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

/* working with hobbits */

function setIcon(context, icon) {
    page.popup.iconField.value = icon;
    const activeIcon = document.querySelector('.icon.icon_active');
    activeIcon.classList.remove('icon_active');
    context.classList.add('icon_active')
}

function addHobbit(event) {
    event.preventDefault();
    console.log(event.target)
    const data = validateAndGetFormData(event.target, ['name', 'icon', 'target']);
    console.log(data);
    if (!data) {
        return;
    }
    const maxId = hobbits.reduce((acc, hobbit) => acc > hobbit.id ? acc : hobbit.id, 0)
    hobbits.push({
        id: maxId + 1,
        name: data.name,
        target: data.target,
        icon: data.icon,
        days: []
    });
    resetForm(event.target, ['name', 'target']);
    togglePopup();
    saveData();
    rerender(maxId + 1)
}

/* init */
(() => {
    loadData();
    rerender(hobbits[0].id);
})();