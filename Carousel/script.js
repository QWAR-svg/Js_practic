window.addEventListener('load', () => {
    const left = document.querySelector('.btn__left');
    const right = document.querySelector('.btn__right');

    const carousel = document.querySelector('.carousel__slide');

    const images = document.querySelectorAll('.carousel__slide img');

    let count = 0;
    const point = images[0].clientWidth;

    // left.addEventListener('click', () => {
    //     if (count == 0) {
            
    //     }
    //     count++;
    //     carousel.style.transform = `translateX( + ${point * count}px)`;
    // });

    right.addEventListener('click', () => {
        if (count > images.length - 2) {
            count = 0;
            carousel.style.transform = 'translateX(' + `${-point * count}px)`;

        } else {
            count++;
            carousel.style.transform = 'translateX(' + `${-point * count}px)`;
            carousel.classList.add('transformAnim');
        }
        
    });

    left.addEventListener('click', () => {
        
            if (count <= 0) {
                count = images.length - 1 ;
                carousel.style.transform = 'translateX(' + `${-point * count}px)`;
                carousel.classList.add('transformAnim');

            } else {
            count--;
            carousel.style.transform = 'translateX(' + `${-point * count}px)`;
            carousel.classList.add('transformAnim');
        }
        
        
    }); 


});