

// btn_1 = document.querySelector('.btn');
// text = document.querySelector('.text');

// btn_1.addEventListener('click', () => {
//     // if (!(text.classList.contains('hide'))) {
//     //     text.classList.add('hide');
//     // } else {
//     //     text.classList.remove('hide');
//     // }
//     // text.classList.toggle('hide');
// });

const ball = document.querySelector('.fa-basketball-ball');
const wrapper = document.querySelector('.main__wrapper');
const sidebar = document.querySelector('.sidebar');
const globalWrapper = document.querySelector('.main');
const closeBtn = document.querySelector('.fa-window-close');
const social = document.querySelector('.social');
closeBtn.style.display = "none";
social.style.display = "none";
console.log(wrapper);
sidebar.addEventListener('click', () => {
    social.style.display = "";
    wrapper.classList.add('main__wrapper-bg');

    globalWrapper.classList.add('main__bg');
    ball.style.display = "none";
    closeBtn.style.display = "";
    
    sidebar.classList.add('sidebar__width');
    
});



globalWrapper.addEventListener('click', () => {
    social.style.display = "none";
    wrapper.classList.remove('main__wrapper-bg');

    globalWrapper.classList.remove('main__bg');
    ball.style.display = "";
    closeBtn.style.display = "none";
    
    sidebar.classList.remove('sidebar__width');


});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar__width');

    wrapper.classList.remove('main__wrapper-bg');
    social.style.display = "none";

    globalWrapper.classList.remove('main__bg');
    ball.style.display = "";
    closeBtn.style.display = "none";
    
});


