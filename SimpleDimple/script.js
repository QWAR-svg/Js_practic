const wrapper = document.querySelector('.wrapper');
for (let i = 0; i < 10; i++) {
    let box = document.createElement("div");
    box.classList.add(`box_${i}`);
    box.style.display = "flex";
    box.style.justifyContent = "center";
    wrapper.append(box);

    for(let j =0; j < 10; j++) {
        
        let div = document.createElement("div");
        if (j > 4) {
            div.classList.add("red");
        }
        div.classList.add('box');
        box.append(div);
        
    }

}

const boxes = document.querySelectorAll('.box');

const music = new Audio('music.mp3');


boxes.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('change');
        music.play();

    });
});


