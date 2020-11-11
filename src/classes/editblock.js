import {model} from '../model.js';

export class EditBlock {
    constructor(block, update) {
        this.block = block;
        this.update = update;

        this.init();
    }

    init() {
        this.block.setAttribute('contenteditable', 'true');
        this.block.focus();
        this.block.addEventListener('blur', this.noContenteditable.bind(this))
    }

    get blockList() {
        return data();
    }

    noContenteditable(event) {
        event.target.removeAttribute('contenteditable');
        // console.log(this.blockList, this.block.textContent);
        model = this.blockList;
    }
}


function data() {
    const rowsEl = document.querySelector('#site').querySelectorAll('.row');
    const resultList = Array.from(rowsEl).map(item => {
        const blockEls = Array.from(item.querySelectorAll('.block-content'));
        const value = blockEls.map(item => item.textContent);
        let styles = blockEls.map(item => item.attributes.style.value);
        styles = getAttrList(styles[0]);

        return {value: value, options: styles};
    });

    return resultList;
}

function getAttrList(styles) {
    const cat = styles.split(';');
    let result = {};
    cat.forEach(item => {
        const elem = item.split(':');
        result[elem[0]] = elem[1];
    })

    return result;
}