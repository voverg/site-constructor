import {TitleBlock, ImageBlock, TextBlock, TextColumnBlock} from './blocks.js';

export class Sidebar {
    constructor(selector, update) {
        this.$addEl = document.querySelector(selector);
        this.update = update;

        this.init();
    }

    init() {
        this.$addEl.addEventListener('click', this.addBlock.bind(this));
        this.$addEl.innerHTML = this.template;
    }

    get template() {
        return block();
    }

    addBlock(event) {
        if(!event.target.classList.contains('btn-create-block')) return;
        const columns = parseInt(document.querySelector('#columns').value);

        const styles = {};
        const inputsElems = document.querySelectorAll('input, select');
        const pixElemsArray = ['border-width', 'margin', 'padding', 'border-radius', 'font-size'];
        inputsElems.forEach(elem => {
            if(pixElemsArray.includes(elem.name)) {
                styles[elem.name] = elem.value + 'px';
            } else {
                styles[elem.name] = elem.value;
            }
        });
        delete styles.columns;

        const Constructor = TextColumnBlock;

        const columnsArray = new Array(columns).fill('Кликни сюда, чтобы добавить текст');
        const newBlock = new Constructor(columnsArray, {styles});
        this.update(newBlock);
    }
}

function block(type='button') {
    return `
        <button type="${type}" class="btn btn-create-block">Создать новый блок</button>
        <hr>

        <h4>Базовые настройки</h4>
        <div class="row">
            <label for="columns">Количество колонок</label>
            <input type="number" id="columns" name="columns" class="range" value="1" min="1" max="6">
        </div>

        <div class="row">
            <label for="margin">Внешний отступ</label>
            <input type="range" id="margin" name="margin" class="range" min="0" max="100" value="0">
        </div>
        <div class="row">
            <label for="padding">Внутренний отступ</label>
            <input type="range" id="padding" name="padding" class="range" min="0" max="100" value="0">
        </div>
        <br><hr>

        <h4>Фон и шрифт</h4>
        <div class="row">
            <label for="background">Цвет фона</label>
            <input type="color" id="background" name="background" class="range" value="#ffffff">
        </div>
        <div class="row">
            <label for="font-color">Цвет текста</label>
            <input type="color" id="font-color" name="font-color" class="range" value="#333333">
        </div>
        <div class="row">
            <label for="font-size">Размер шрифта</label>
            <input type="range" id="font-size" name="font-size" class="range" min="8" max="50" value="16">
        </div>
        <br><hr>

        <h4>Рамка колонки</h4>
        <div class="row">
            <label for="border-width">Ширина рамки</label>
            <input type="range" id="border-width" name="border-width" class="range" min="0" max="10" value="0">
        </div>
        <div class="row">
            <label for="border-radius">Радиус скругления (%)</label>
            <input type="range" id="border-radius" name="border-radius" class="range" min="0" max="50" value="0">
        </div>
        <div class="row">
            <label for="border-style">Тип рамки</label>
            <select type="select" name="border-style" id="border-style" class="range">
                <option value="solid" selected>Линия</option>
                <option value="dushed">Пунктир</option>
                <option value="dotted">Точки</option>
            </select>
        </div>
        <div class="row">
            <label for="border-color">Цвет рамки</label>
            <input type="color" id="border-color" name="border-color" class="range" value="#333333">
        </div>
    `;
}