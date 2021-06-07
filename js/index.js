// меню в хэедере
let burgerBtn = document.querySelector(".menu__burger");
let nav = document.querySelector(".menu__nav");

let quitBtn = document.querySelector(".menu__quit");



burgerBtn.onclick = function () {
    nav.classList.toggle('open');
    nav.classList.toggle('close');
}


quitBtn.onclick = function () {
    nav.classList.remove('open');
    nav.classList.add('close')
}


// Слайдер  на странице продукта


const imgArr = ['images/backproducttop.jpg', 'images/catalog2.png', 'images/catalog3.png'];
let count = 0;

//получили кнопки и стартовое изображение
let img = document.querySelector('#slider__img')
let nextBtn = document.querySelector('#next');
let prewBtn = document.querySelector('#prew');

nextBtn.onclick = function () {

    if (count < imgArr.length - 1) {
        count++;
        img.src = imgArr[count]
    } else if (count == imgArr.length - 1) {
        count = 0;
        img.src = imgArr[count]
    }
};

prewBtn.onclick = function () {
    if (count > 0) {
        count--;
        img.src = imgArr[count];
    } else if (count <= 0) {
        count = imgArr.length - 1;
        img.src = imgArr[count]
    }


}