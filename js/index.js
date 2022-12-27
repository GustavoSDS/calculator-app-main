'use strict';
let page = document.querySelector('.page');
let btnChangeTheme = document.querySelector('#btnTheme');

/* get class Names and ID */
let classButton = document.querySelector('.theme__button-change');
let toogle = document.querySelector('.theme__circle');
let result = document.querySelector('.calculator__result');
let keys = document.querySelector('.calculator__keys');
let key = document.querySelectorAll('.calculator__key');
let keyDel = document.querySelector('#keyDel');
let keyRest = document.querySelector('#keyReset');
let keyEqual = document.querySelector('#keyEqual');

let theme = 3;
btnChangeTheme.addEventListener('click', () => {
    if (theme === 1) {
        changeClassName('violet', 'light');
        btnChangeTheme.style.justifyContent = 'left';
        theme = 2;
    } else if (theme === 2) {
        changeClassName('light', 'dark');
        btnChangeTheme.style.justifyContent = 'center';
        theme = 3;
    } else {
        changeClassName('dark', 'violet');
        btnChangeTheme.style.justifyContent = 'right';
        theme = 1;
    }
});

let val1, val2, res, operator, valueKey;

key.forEach((key) => {
    key.addEventListener('click', () => {
        valueKey = key.innerText;

        result.innerText === '00' ? empty() : '';

        if (isFinite(valueKey)) { val1 = result.innerText += valueKey; }

        valueKey === '+' ? (changeVal(val1, '+')) : valueKey === '-' ? (changeVal(val1, '-')) :
        valueKey === 'x' ? (changeVal(val1, '*')) : valueKey === '/' ? (changeVal(val1, '/')) : 
        valueKey === 'RESET' ? reset() : valueKey === 'DEL' ? empty() : '';

        if (valueKey === '=') {
            result.innerText = valueKey === '=' ? operations(operator, val2, parseInt(val1)) : 'is not a valid';
            val1 = parseInt(result.innerText);
        }

    });
});

function empty() {
    return result.innerText = '';
}

function reset() {
    return empty(), operator = '', val1 = '', val2 = 0;
}
function changeVal(val1, operat) {
    val2 = parseInt(val1);
    empty();
    operator = operat;
    return val2, operator;
}

function operations(operator, val1, val2) {
    switch (operator) {
        case '+': return val1 + val2;
            break;
        case '-': return val1 - val2;
            break;
        case '/': return val1 / val2;
            break;
        case '*': return val1 * val2;
            break;
        default:
            break;
    }
}
















/* FUNCTIONS */
function changeClassName(actualClass, className) {
    addRemoveClass(page, actualClass, className);
    addRemoveClass(classButton, 'btn-' + actualClass, 'btn-' + className);
    addRemoveClass(toogle, 'circle-' + actualClass, 'circle-' + className);
    addRemoveClass(result, 'result-' + actualClass, 'result-' + className);
    addRemoveClass(keys, 'keys-' + actualClass, 'keys-' + className);
    addRemoveClass(keyDel, 'color1-' + actualClass, 'color1-' + className);
    addRemoveClass(keyRest, 'color1-' + actualClass, 'color1-' + className);
    addRemoveClass(keyEqual, 'color2-' + actualClass, 'color2-' + className);
    key.forEach((key) => {
        addRemoveClass(key, 'key-' + actualClass, 'key-' + className);
    });

}

function addRemoveClass(element, actualClass, className) {
    element.classList.remove(actualClass);
    element.classList.add(className);
}