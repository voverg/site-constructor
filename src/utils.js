export function row(data, styles='') {
    return `<div class="row" style="${styles}">${data}</div>`;
}

export function col(data) {
    return `<div class="col-sm">${data}</div>`;
}