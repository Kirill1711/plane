let items = document.querySelectorAll('.slider__item');
let slider_line = document.querySelector('.slider__line');


let i = 0;

let temerID = setInterval(function () {
    i++;
    if(i == 1) {
        slider_line.style.marginLeft = '0px';
    }
    if(i == 4) {
        slider_line.style.marginLeft = -items[0].offsetWidth + 'px';
    }
    if(i == 8) {
        slider_line.style.marginLeft = -(items[0].offsetWidth * 2) + 'px';
    }
    if(i == 12) {
        slider_line.style.marginLeft = -(items[0].offsetWidth * 3) + 'px';
    }
    if(i == 16) {
        i = 0;
    }
}, 1000);




