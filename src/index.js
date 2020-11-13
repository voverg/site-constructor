import {toLocalStorage, editBlockContent, getSidebarValues, setSidebarValues} from './utils.js';
import { model } from './model.js';
import {Site} from './classes/site.js';
import {Sidebar} from './classes/sidebar.js';
import './styles/main.css';

const site = new Site('#site');

const updateCallback = newBlock => {
    model.push(newBlock);
    toLocalStorage(model);
    site.render(model);
}

const  sidebar = new Sidebar('#panel', updateCallback);
const deleteBlockBtn = document.querySelector('.btn-delete-block');

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


deleteBlockBtn.addEventListener('click', deleteBlock);

function deleteBlock() {
    if (rowId == undefined || colId == undefined) return;
    const block = model[rowId].value[colId];
    const sureToDel = confirm(`Точно хотите удалить блок "${block}"?`)
    if (!sureToDel) return;

    // console.log(model[rowId].length);
    console.log(model[rowId].value.length);
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




