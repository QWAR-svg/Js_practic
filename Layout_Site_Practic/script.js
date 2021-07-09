const text = document.querySelector('.text');

const block = document.querySelector('.wrapper__items-item');

text.style.display = "none";

block.addEventListener('click', ()=> {
    text.style.display = "";
    block.style.transition = "0.3s";

});
