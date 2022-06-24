// Dark mode

let body = document.querySelector('body');
let darkmode = localStorage.getItem('darkmode');
let navbar = document.querySelector('nav');
// let footer = document.querySelector('footer');
let trait = document.querySelectorAll('.trait');
// let accordeon = document.querySelectorAll('.accordion-item');
let darkbtn = document.querySelector('.dark-btn');
let uls = document.querySelectorAll('nav ul li a');

//activer le mode dark
const enableDarkmode = () => {
        body.classList.add('dark')
        navbar.classList.add('navbar-dark')
        navbar.classList.add('bg-dark')
        darkbtn.classList.add('bg-dark')
        darkbtn.classList.add('text-light')
        darkbtn.classList.add('border-light')
        darkbtn.innerHTML = "<i class='bi bi-brightness-high-fill'></i>"
        for (let i = 0; i < trait.length; i ++) {
            trait[i].classList.add('bg-dark')
            trait[i].classList.add('trait-dark')
        }
        for (let i = 0; i < uls.length; i ++) {
            uls[i].classList.add('text-light')
        }
        localStorage.setItem('darkmode','enabled')
    }
    
    //desactiver le dark mode
    const disableDarkmode = () => {
        body.classList.remove('dark')
        navbar.classList.remove('bg-dark')
        darkbtn.classList.remove('bg-dark')
        darkbtn.classList.remove('text-light')
        darkbtn.classList.remove('border-light')
        darkbtn.innerHTML = "<i class='bi bi-moon-fill'></i>"
        for (let i = 0; i < trait.length; i ++) {
            trait[i].classList.remove('bg-dark')
            trait[i].classList.remove('trait-dark')
        }
        for (let i = 0; i < uls.length; i ++) {
            uls[i].classList.remove('text-light')
        }
        navbar.classList.remove('navbar-dark')
        localStorage.setItem('darkmode', null)
}

if (darkmode === 'enabled') {
        enableDarkmode();
}

darkbtn.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
    if (darkmode !== 'enabled') {
        enableDarkmode();
    } else {
        disableDarkmode();
    }
})
