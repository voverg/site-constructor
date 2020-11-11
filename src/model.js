import image from './assets/zhopa.jpg';
import {TitleBlock, ImageBlock, TextBlock, TextColumnBlock} from './classes/blocks.js';
import {fromLocalStorage, css} from './utils.js';


const data = fromLocalStorage();
console.log(data);
export const model = data.map(item => new TextColumnBlock(item.value, item.options));

// export const model = [
//     new TitleBlock('Это простой конструктор сайтов', {
//         tag: 'h1',
//         rowId: 0,
//         styles: 'background: darkred; color: #fff; text-align: center; padding: 15px; font-size: 14px;'
//     }),
//     new ImageBlock(image, {
//         tag: 'img',
//         styles: 'display: flex; justify-content: center;', 
//         alt: 'Some testing picture',
//         imageStyles: 'width: 50%;'
//     }),
//     new TextColumnBlock([
//             'С помощью данного конструктора вы можете легко создавать простые статичные сайты',
//             'Выбирайте нужные вам эелементы, вводите текста и увидите изменения прямо на лету',
//             'Попробуйте и у вас получится'
//         ], {
//             styles: {
//                 background: 'lightgreen',
//                 color: 'blue',
//                 'border-width': '2',
//                 'border-color': 'black',
//                 'border-style': 'solid',
//                 padding: '10px'
//             }
//     }),

//     new TextBlock('Vladimir Petrov 2020', {
//         tag: 'p',
//         styles: 'background: #0d1f1a; color: #ccc; text-align: center;'
//     })
// ];