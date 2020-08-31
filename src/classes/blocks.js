import { row, col } from '../utils.js';

class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }

    toHtml() {
        throw new Error('Method toHtml should be created!');
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {tag, styles} = this.options;
        const htmlContent = `<${tag}>${this.value}</${tag}>`;
        return row(col(htmlContent), styles);
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {tag, styles, alt, imageStyles} = this.options;
        const htmlContent = `<img src="${this.value}" alt="${alt}" style="${imageStyles}">`;
        return row(htmlContent, styles);
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {tag, styles} = this.options;
        const htmlContent = `<${tag}>${this.value}</${tag}>`;
        return row(col(htmlContent), styles);
    }
}

export class TextColumnBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {styles} = this.options;
        const html = this.value.map(item => col(item));
        return row(html.join(''), styles);
    }
}