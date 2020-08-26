import { row, col } from './utils.js';

function title(block) {
    const {tag, styles} = block.options;
    return row(col(`
                <${tag}>${block.value}</${tag}>
        `), styles);
}

function text(block) {
    const {tag} = block.options;
    return row(col(`
                <${tag}>${block.value}</${tag}>
        `), block.options.styles);
}

function textColumn(block) {
    const html = block.value.map(item => col(item));
    return row(html.join(''), block.options.styles);
}

export const templates = {title, text, textColumn};