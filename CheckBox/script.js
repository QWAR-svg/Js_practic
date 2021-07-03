const check = document.querySelector("#check");

check.addEventListener('click', (e) => {
    //  
    if (check.checked) {
        alert("Good");
    } else {
        alert("You are not a human");
    }
});

const towns = document.querySelector("#select");

console.log(towns.value);

btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    console.log(towns.value);
})