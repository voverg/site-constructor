import { model } from './model.js';
import { templates } from './templates.js';
import './styles/main.css';

const siteEl = document.querySelector('#site');

model.forEach(block => {
    const generate = templates[block.type];
    if (generate) {
        const htmlEl = generate(block);
        siteEl.insertAdjacentHTML('beforeend', htmlEl);
    }
})


