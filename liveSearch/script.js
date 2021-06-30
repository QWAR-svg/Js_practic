window.onload = () => {
    function searching (enter,hide) {

    let input = document.querySelector(enter);
    
    input.addEventListener("input", function () {
        // this.value

        let value = this.value.trim().toUpperCase();

        // trim позволяет записывать только существующие значения

        let list = document.querySelectorAll('.ol li');

        if (value) {
            list.forEach(elem => {
                if (elem.innerText.search(value) == -1) {
                    elem.classList.add(hide);
                }
            });
        } else {
            list.forEach(elem => {
                elem.classList.remove(hide);
            })
        }
        
    });

    }

    searching("#input", "hide");
};

// https://www.youtube.com/watch?v=K4-NWyjRAyo&list=PLTHqtjbWQyvQdDJAvm90-IJkrXyriCOc1&index=1 --> practic video