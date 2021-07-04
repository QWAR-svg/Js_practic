const inputs = document.querySelectorAll('.input-div');
const wou = document.querySelectorAll('.input');
const btn = document.querySelector('.btn');
console.log(inputs);
inputs.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.add('focus');
    })

   
});

// console.log(btn.className);


window.addEventListener('click', (e) => {
   wou.forEach(point => {
       console.log(e.target.className == point.className);
       if (e.target.className != point.className) {
        inputs.forEach(element => {
            element.classList.remove('focus');
        });
       }
   })
})








