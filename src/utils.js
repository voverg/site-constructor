import { model } from './model.js';


export function fromLocalStorage() {
    const data = localStorage.getItem('siteData');
    if(data) {
        return JSON.parse(data);
    }
    return [];
}

export function toLocalStorage(data) {
    localStorage.setItem('siteData', JSON.stringify(data));
}


export function row(data, rowId=0) {
    return `<div class="row" data-row-id="${rowId}">${data}</div>`;
}

export function col(data, styles='', colId=0) {
    return `<div class="col-sm"><div class="block-content" data-col-id="${colId}" style="${styles}">${data}</div></div>`;
}

export function css(styles={}) {
    const toString = key => `${key}: ${styles[key]}`;
    return Object.keys(styles).map(toString).join(';');
}


export function getSidebarValues() {
    const styles = {};
    const inputsElems = document.querySelectorAll('input, select');
    inputsElems.forEach(elem => {
        styles[elem.name] = elem.value + elem.dataset.unit;
    });
    delete styles.columns;
    // console.log(styles);

    return styles;
}

export function setSidebarValues(rowId, colId) {
    const {styles} = model[rowId].options;
    const cleanStyles = {};
    for(let key in styles) {
        if (styles[key].includes('px')) {
            cleanStyles[key] = parseInt(styles[key]);
        } else {
            cleanStyles[key] = styles[key];
        }
    }

    const inputElems = document.querySelectorAll('input, select');
    const inputs = Array.from(inputElems).splice(1);
    inputs.map(item => item.value = cleanStyles[item.name]);
}


export function editBlockContent(block) {
    block.setAttribute('contenteditable', 'true');
    block.focus();

    const row = parseInt(block.closest('.row').dataset.rowId);
    const blockId = parseInt(block.dataset.colId);

    block.addEventListener('blur', () => {
        const text = block.innerHTML;
        model[row].value[blockId] = text;
        toLocalStorage(model);
    })
}
