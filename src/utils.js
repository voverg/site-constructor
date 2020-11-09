export function row(data, rowId=0) {
    return `<div class="row" data-row-id="${rowId}">${data}</div>`;
}

export function col(data, styles='') {
    return `<div class="col-sm"><div class="block-content" style="${styles}">${data}</div></div>`;
}

export function css(styles={}) {
    const toString = key => `${key}: ${styles[key]}`;
    return Object.keys(styles).map(toString).join(';');
}