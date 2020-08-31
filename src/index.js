import { model } from './model.js';
import './styles/main.css';

const siteEl = document.querySelector('#site');

model.forEach(block => {
    siteEl.insertAdjacentHTML('beforeend', block.toHtml());
})


