let items = document.querySelectorAll('.slider__item');
let slider_line = document.querySelector('.slider__line');


let i = 0;
let temerID = setInterval(function () {
    i++;
    if(i == 1) {
        slider_line.style.marginLeft = '0px';
    }
    if(i == 3) {
        slider_line.style.marginLeft = -items[0].offsetWidth + 'px';
    }
    if(i == 6) {
        slider_line.style.marginLeft = -(items[0].offsetWidth * 2) + 'px';
    }
    if(i == 9) {
        slider_line.style.marginLeft = -(items[0].offsetWidth * 3) + 'px';
    }
    if(i == 11) {
        i = 0;
    }
}, 1000);


document.querySelector('.btnUp').addEventListener('click', function() {
    scrollTo({
        top: 0,
        behavior: "smooth",
    })
});