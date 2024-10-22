'use strict'

window.addEventListener('DOMContentLoaded', function () {
    console.log('DOM дерево загружено!')

    if (document.querySelector('.js-products-equipment')) {
        customSelect(document.querySelector('.js-products-equipment'));
    }
});

/**
 * обработчик для кастомного селекта
 * @param selector
 */
function customSelect(selector) {
    const selectImitation = selector.querySelector('.js-select-imitation');
    if (!selectImitation)
        return 0;

    const selectWrapper = selectImitation.querySelector('.js-custom-select-wrapper');
    const selectTrigger = selectImitation.querySelector('.js-custom-select-trigger');
    const selectBody    = selectImitation.querySelector('.js-select-body');
    const mainValue     = selectImitation.querySelector('.js-custom-main-option-value');

    /**
     * Отслеживаем клик по шапке селекта
     */
    addOnEventCallback('click', '.js-custom-select-trigger', (e, item) => {
        if (!selectWrapper.classList.contains('open')) {
            selectWrapper.classList.add('open');
        } else  {
            selectWrapper.classList.remove('open');
        }
    });

    /**
     * Отслеживаем клик вне элемента
     */
    addOnEventCallback('click', 'body', (e, item) => {
        if (!selectImitation.contains(e.target)) {
            selectWrapper.classList.remove('open');
        }
    })

    /**
     * Отслеживаем клик по элементу селекта
     */
    addOnEventCallback('click', '.js-custom-option-value', (e, item) => {
        mainValue.dataset.value = item.dataset.value;
        mainValue.querySelector('span').innerHTML = item.dataset.value;
        selectWrapper.classList.remove('open');
    })
}

/**
 * добавляет колбэк на эвент
 * @param event
 * @param selector
 * @param callback
 * @param arCustomArgs
 */
function addOnEventCallback(event, selector, callback, ...arCustomArgs) {
    document.addEventListener(event, function (e) {
        if (e.target.closest(selector)) {
            callback(e, e.target.closest(selector), arCustomArgs);
        }
    });
}