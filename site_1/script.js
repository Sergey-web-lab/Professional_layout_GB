'use strict'

let brand_dark = document.querySelector('.brand_dark');
let header_bars = document.querySelector('.header_bars');
let menu_close = document.querySelector('.menu_close');

function toggle_menu() {
    brand_dark.classList.toggle('hidden');
}

header_bars.addEventListener('click', toggle_menu);
menu_close.addEventListener('click', toggle_menu);
