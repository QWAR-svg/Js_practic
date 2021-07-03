const input = document.querySelector('#input');

const btn = document.querySelector('#btn');

const result = document.querySelector('.result');

let list = [];
btn.addEventListener('click', (e) => {
    let val = input.value;
    input.value = '';    
    list.push(val);

    add();
});

function add() {
    let value = '';
    for (const todo of list) {
        value = todo;
    }

    result.innerHTML += `
    <li>${value}</li>
    `;
}
