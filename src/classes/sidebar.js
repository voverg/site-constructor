import {toLocalStorage, getSidebarValues} from '../utils.js'
import {model} from '../model.js'
import {TitleBlock, ImageBlock, TextBlock, TextColumnBlock} from './blocks.js';

export class Sidebar {
    constructor(selector, update) {
        this.$addEl = document.querySelector(selector);
        this.update = update;

        this.init();
    }

    init() {
        this.$addEl.innerHTML = this.template;
        this.$addEl.addEventListener('click', this.addBlock.bind(this));
    }

    get template() {
        return block();
    }

    addBlock(event) {
        if (event.target.tagName === 'H4') {
            const tmp = event.target.closest('.Block').classList.toggle('show');
        }
        if(!event.target.classList.contains('btn-create-block')) return;

        const columns = parseInt(document.querySelector('#columns').value);

        const styles = getSidebarValues();
        const columnsArray = new Array(columns).fill('Кликни сюда, чтобы добавить текст');
        const rowId = model.length;

        const Constructor = TextColumnBlock;
        const newBlock = new Constructor(columnsArray, {styles}, rowId);
        this.update(newBlock);
    }
}

function block(type='button') {
    return `
<a href="#" class="burger-menu__button">
    <span class="burger-menu__lines"></span>
</a>

<div class="Settings">
    <div class="Block" id="Base-Settings">
        <h4>Базовые настройки</h4>
        <div class="row">
            <label for="columns">Количество колонок</label>
            <input type="number" id="columns" name="columns" class="range input" value="1" min="1" max="6" data-unit="">
        </div>
        <div class="row">
            <label for="margin">Внешний отступ</label>
            <input type="number" id="margin" name="margin" class="range input" min="0" max="100" step="5" value="0"
                data-unit="px">
        </div>
        <div class="row">
            <label for="padding">Внутренний отступ</label>
            <input type="number" id="padding" name="padding" class="range input" min="0" max="100" step="5" value="0"
                data-unit="px">
        </div>
    </div>
    <div class="Block" id="Background-Font">
        <h4>Фон и шрифт</h4>
        <div class="row">
            <label for="background">Цвет фона</label>
            <input type="color" id="background" name="background" class="range input" value="#ffffff" data-unit="">
        </div>
        <div class="row">
            <label for="color">Цвет текста</label>
            <input type="color" id="color" name="color" class="range input" value="#333333" data-unit="">
        </div>
        <div class="row">
            <label for="font-size">Размер шрифта</label>
            <input type="range" id="font-size" name="font-size" class="range input" min="8" max="50" value="16"
                data-unit="px">
        </div>
        <div class="row">
            <label for="text-align">Позиционирование</label>
            <select type="select" name="text-align" id="text-align" class="range input" data-unit="">
                <option value="left" selected>Влево</option>
                <option value="center">Центр</option>
                <option value="right">Вправо</option>
            </select>
        </div>
    </div>

    <!-- <div class="Block" id="Position">
    <p onclick='document.getElementById("Position").style.height === "auto" ? document.getElementById("Position").style.height = "50px" : document.getElementById("Position").style.height = "auto"'>Позиционирование</p>
    <input type="radio" id="radio-left" name="text-align" class="range input" value="left" data-unit="">
    <input type="radio" id="radio-center" name="text-align" class="range input" value="center" data-unit="" checked>
    <input type="radio" id="radio-right" name="text-align" class="range input" value="left" data-unit="">
    <div class="row">
        <label for="radio-left" class="radio-left">Влево</label>
        <label for="radio-center" class="radio-center">Центр</label>
        <label for="radio-right" class="radio-right">Вправо</label>
    </div> 
    </div> -->

    <div class="Block" id="Row-Border">
        <h4>Рамка колонки</h4>
        <div class="row">
            <label for="border-width">Ширина рамки</label>
            <input type="range" id="border-width" name="border-width" class="range input" min="0" max="10" value="0"
                data-unit="px">
        </div>
        <div class="row">
            <label for="border-radius">Радиус скругления (px)</label>
            <input type="range" id="border-radius" name="border-radius" class="range input" min="0" max="50" value="0"
                data-unit="px">
        </div>
        <div class="row">
            <label for="border-style">Тип рамки</label>
            <select type="select" name="border-style" id="border-style" class="range input" data-unit="">
                <option value="solid" selected>Линия</option>
                <option value="dashed">Пунктир</option>
                <option value="dotted">Точки</option>
            </select>
        </div>
        <div class="row">
            <label for="border-color">Цвет рамки</label>
            <input type="color" id="border-color" name="border-color" class="range input" value="#333333" data-unit="">
        </div>
    </div>
</div>

<button type="${type}" class="btn btn-create-block">Создать новый блок</button>
<button type="${type}" class="btn btn-add-img">Добавить картинку в блок</button>
<!-- <button type="${type}" class="btn btn-add-link">Добавить ссылку в блок</button> -->
<button type="${type}" class="btn btn-delete-block">Удалить выделенный блок</button>
    `;
}