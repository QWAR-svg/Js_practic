const subs = document.querySelectorAll('.root__nav ul');
console.log(subs[0])

document.querySelector('.root__nav').onclick = function(event) {
    
    subs.forEach(element => {
        element.classList.remove('sub-menu-active');
    });

        event.target.nextElementSibling.classList.toggle('sub-menu-active');
}