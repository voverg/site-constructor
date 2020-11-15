import {toLocalStorage, editBlockContent, getSidebarValues, setSidebarValues} from './utils.js';
import { model } from './model.js';
import {Site} from './classes/site.js';
import {Sidebar} from './classes/sidebar.js';
import './styles/main.css';
import './styles/burger.css';
// import './burger.js';

const site = new Site('#site');

const updateCallback = newBlock => {
    model.push(newBlock);
    toLocalStorage(model);
    site.render(model);
}

const  sidebar = new Sidebar('#panel', updateCallback);
const deleteBlockBtn = document.querySelector('.btn-delete-block');
const addImgBtn = document.querySelector('.btn-add-img');
const addLinkBtn = document.querySelector('.btn-add-link');

site.render(model);


let rowId, colId;

document.querySelector('#site').addEventListener('click', event => {
    if(!event.target.classList.contains('block-content')) return;

    const block = event.target;
    rowId = parseInt(block.closest('.row').dataset.rowId);
    colId = parseInt(block.dataset.colId);

    setSidebarValues(rowId, colId);

    editBlockContent(block);
});


addImgBtn.addEventListener('click', addImg);

function addImg() {
    if (rowId == undefined || colId == undefined) return;
    const title = 'Введите ссылку на картинку, чтобы добавить её в выделенный блок.'
    const imgLink = prompt(title);
    if(imgLink) {
        let value = `${model[rowId].value[colId]} <img src="${imgLink}">`;
        model[rowId].value[colId] = value;
        toLocalStorage(model);
        site.render(model);
    }
}

// addLinkBtn.addEventListener('click', addLink);

// function addLink() {
//     if (rowId == undefined || colId == undefined) return;
//     const title = 'Введите ссылку, которую хотите добавить в выделенный блок.'
//     const link = prompt(title);
//     if(link) {
//         let value = `${model[rowId].value[colId]} <a href="${link}">${link}</a>`;
//         model[rowId].value[colId] = value;
//         toLocalStorage(model);
//         site.render(model);
//     }
// }


deleteBlockBtn.addEventListener('click', deleteBlock);

function deleteBlock() {
    if (rowId == undefined || colId == undefined) return;
    const block = model[rowId].value[colId];
    const sureToDel = confirm(`Точно хотите удалить блок "${block}"?`)
    if (!sureToDel) return;

    if (model[rowId].value.length <= 1) {
        model.splice(rowId, 1);
    } else {
        model[rowId].value.splice(colId, 1);
    }

    toLocalStorage(model);
    site.render(model);

    rowId = colId = undefined;
}


document.querySelector('#panel').addEventListener('input', editBlockStyle);

function editBlockStyle(event) {
    if (rowId == undefined || colId == undefined) return;
    const block = model[rowId].value[colId];

    const value = event.target.value;

    const styles = getSidebarValues();
    model[rowId].options.styles = styles;
    toLocalStorage(model);
    site.render(model);
}


// Burger menu
const body = document.querySelector('body');
const burgerMenu = document.querySelector('.burger-menu');
const openCloseBurgerBtn = burgerMenu.querySelector('.burger-menu__button');
const overlay = burgerMenu.querySelector('.burger-menu__overlay');

function toggleMenu() {
    burgerMenu.classList.toggle('burger-menu_active');
    body.classList.toggle('hidden');
}

// Burger menu
openCloseBurgerBtn.addEventListener('click', event => {
    event.preventDefault();
    toggleMenu();
});

// overlay.addEventListener('click', toggleMenu);




