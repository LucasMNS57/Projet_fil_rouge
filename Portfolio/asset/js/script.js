let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
})

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

const typed = new Typed('.text1',{
    strings: ['Developer Fullstack'],
    typeSpeed: 100, 
    backSpeed: 100, 
    backDelay: 1000, 
    loop: true
})

const typed1 = new Typed('.text2',{
    strings: ['Moi'],
    typeSpeed: 100, 
    backSpeed: 100, 
    backDelay: 1000, 
    loop: true
})

const typed2 = new Typed('.text3',{
    strings: ['Projets'],
    typeSpeed: 100, 
    backSpeed: 100, 
    backDelay: 1000, 
    loop: true
})

const typed3 = new Typed('.text4',{
    strings: ['Moi'],
    typeSpeed: 100, 
    backSpeed: 100, 
    backDelay: 1000, 
    loop: true
})