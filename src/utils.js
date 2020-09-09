export function row(data, rowId=0) {
    return `<div class="row" data-row-id="${rowId}">${data}</div>`;
}

export function col(data, styles='') {
    return `<div class="col-sm" style="${styles}" contenteditable>${data}</div>`;
}

export function css(styles={}) {
    const toString = key => `${key}: ${styles[key]}`;
    return Object.keys(styles).map(toString).join(';');
}