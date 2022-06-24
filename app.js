let button = document.querySelector('.burger');
let lien = document.querySelectorAll('.lien');
let bg = document.querySelector('nav');
let position = document.querySelector('main');
let ul = document.querySelector('ul');
let logo =document.querySelector('.logo');


//console.log(button)
//console.log(open_nav)

button.addEventListener('click', () => {

    bg.classList.toggle('opened')
    position.classList.toggle('position')
    ul.classList.toggle('opacity')
    logo.classList.toggle('center')
    
    for (let i = 0; i < lien.length; i++) {
        lien[i].classList.toggle('opacity')
    }
})


//particules 


