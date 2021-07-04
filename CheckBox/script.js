// const check = document.querySelector("#check");

// check.addEventListener('click', (e) => {
//     //  
//     if (check.checked) {
//         alert("Good");
//     } else {
//         alert("You are not a human");
//     }
// });

// const towns = document.querySelector("#select");

// console.log(towns.value);

// btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//     console.log(towns.value);
// })

function duplicate(a) {
    let b = [];
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            b.push(a[j]);
        }
    }


    return b;

}

console.log(duplicate([3,6,7,2,64]));