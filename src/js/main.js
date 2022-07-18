import accordion from './modules/accordion';
import  { customSelect, customSelect2 } from './modules/select';
import validateEmail from './modules/validateEmail';



window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    accordion();
    customSelect('custom-select');
    customSelect2('custom-select2');
    // validateEmail('#email');

    const sortBadge = document.querySelector('.offers_sort-select-badge'),
          arrowUp = sortBadge.querySelector('#arrow-up'),
          arrowDown = sortBadge.querySelector('#arrow-down');

    sortBadge.addEventListener('click', function(e) {
        let val = arrowUp.getAttribute('aria-sort');

        if (val === 'down') {
            arrowUp.style.fill = "#8d8d8d";
            arrowDown.style.fill = "#df4e3c";
            arrowUp.setAttribute('aria-sort', 'up');
        }
        
        if (val === 'up') {
            arrowUp.style.fill = "#df4e3c";
            arrowDown.style.fill = "#8d8d8d";
            arrowUp.setAttribute('aria-sort', 'down');
        }

    });

    const checker = document.querySelector('.offers_sort-checkbox');
    const checkInput = checker.querySelector('#check-available');
    checker.addEventListener('click', function() {
        if (checkInput.checked) {
            checker.style.color = '#df4e3c';
        } else {
            checker.style.color = "#8d8d8d";
        }

        console.log(checkInput.checked);
    });
});