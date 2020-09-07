import { model } from './model.js';
import {Site} from './classes/site.js';
import {Sidebar} from './classes/sidebar.js';
import './styles/main.css';

const site = new Site('#site');

new Sidebar('#panel');

site.render(model);


