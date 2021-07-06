scroll = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
    const top = Math.floor(document.documentElement.scrollTop);
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let x = top / height * 100 ;
    scroll.style.height = `${x}%`;
    

    if (top + 1== height) {
        alert('cool');
    }

    console.log("top", top);
    console.log("height", height);

})
