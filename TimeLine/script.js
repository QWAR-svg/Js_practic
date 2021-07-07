const line = document.querySelector('.line');
const timeHeight = document.querySelector('.line').dataset.height;
const show = document.querySelector('active');
const items = document.querySelectorAll('.item');

items.forEach((item) => {
    item.style.display = "none";
});



const timeCont = document.querySelector('.timeline__container');
// console.log(timeHeight);


let i = 1;
window.addEventListener('scroll', () => {

    if (window.scrollY >= timeHeight) {
        line.style.height = timeHeight + 'px';
    } else {
        line.style.height = window.scrollY + 'px';
    }
    console.log(window.scrollY)
    if (Math.floor(window.scrollY) >= i * 100 && i < items.length) {
        items[i - 1].style.display = "";
        console.log(items[i - 1]);
        i++;
    }

    
})