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
    const pixElemsArray = ['border-width', 'margin', 'padding', 'border-radius', 'font-size'];
    inputsElems.forEach(elem => {
        if(pixElemsArray.includes(elem.name)) {
            styles[elem.name] = elem.value + 'px';
        } else {
            styles[elem.name] = elem.value;
        }
    });
    delete styles.columns;

    return styles;
}
