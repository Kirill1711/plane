

//анимация при скролле
let anima_items = document.querySelectorAll('.anima_item');

if (anima_items.length > 0) {
    window.addEventListener('scroll', animaOnScrolle);
    function animaOnScrolle() {
        for(let i = 0; i < anima_items.length; i++) {
            const anima_item = anima_items[i];
            const anima_itemHeight = anima_item.offsetHeight;
            const anima_itemOffset = offset(anima_item).top;
            const anim_start = 3;

            let animItemPoint = window.innerHeight - anima_itemHeight / anim_start;
            if (anima_itemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / anim_start;
            }

            if ((pageYOffset > anima_itemOffset - animItemPoint) && pageYOffset < (anima_itemOffset - anima_itemHeight)){
                anima_item.classList.add('show_item');
                anima_item.classList.add('no-hidde');
            }
        }
    }
}
function offset (el) {
    const rect = el.getBoundingClientRect();
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft};
}


//плавное появление после загрузки
let title = document.querySelector('.title_show');
let first_articles = document.querySelectorAll('.first_article');

if(first_articles.length > 0) {
setTimeout(function() {
    title.classList.add('show_item');
},300);


setTimeout(function() {
    for(let i = 0; i < first_articles.length; i++) {
        first_articles[i].classList.add('show_item');
    }
},800);
}