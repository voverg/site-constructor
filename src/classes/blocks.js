import { row, col, css } from '../utils.js';

class Block {
    constructor(value, options, rowId) {
        this.value = value;
        this.options = options;
        this.rowId = rowId;
    }

    toHtml() {
        throw new Error('Method toHtml should be created!');
    }
}

// Subclasses
export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {tag, styles, rowId} = this.options;
        const htmlContent = `<${tag}>${this.value}</${tag}>`;
        return row(col(htmlContent, styles), rowId);
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {tag, styles, alt, imageStyles} = this.options;
        const htmlContent = `<img src="${this.value}" alt="${alt}" style="${imageStyles}">`;
        return row(col(htmlContent, styles));
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {tag, styles} = this.options;
        const htmlContent = `<${tag}>${this.value}</${tag}>`;
        return row(col(htmlContent, styles));
    }
}

export class TextColumnBlock extends Block {
    constructor(value, options, rowId) {
        super(value, options, rowId);
    }

    toHtml() {
        const {styles} = this.options;
        const html = this.value.map((item, index) => col(item, css(styles), index));
        return row(html.join(''), this.rowId);
    }
}