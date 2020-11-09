import { model } from './model.js';
import {Site} from './classes/site.js';
import {Sidebar} from './classes/sidebar.js';
import './styles/main.css';

console.log(model);

const site = new Site('#site');

const updateCallback = newBlock => {
    model.push(newBlock);
    site.render(model);
}

new Sidebar('#panel', updateCallback);

site.render(model);


