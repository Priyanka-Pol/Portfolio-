/* ----------------- toggle icon navvbar-------------------- */
let  menuIcon = document.querySelector('#menu-icon');
let  navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*------------------ Scroll section active link------------------- */
let  sections = document.querySelectorAll('section');
let  navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach (sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop  - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']'.classList.add('active'));
           });
        };
      });
     /*------------------ Sticky navbar------------------- */ 
     let header = document.querySelector('header');
     header.classList.toggle('sticky', window.scrollY > 100);
     /* ---------------------------Remove toggle icon & navbar when click navbar when click nabar link */
     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');
};

/* -------------------Read More-------------------- */
const readMoreBtn = document.querySelector('.btn-more');
const  text = document.querySelector('.text');

readMoreBtn.addEventListener('click', (e)=>{
    text.classList.toggle('show-more');
    if(readMoreBtn.innerText === 'Read More'){
        readMoreBtn.innerText = 'Read Less';
    }else{
        readMoreBtn.innerText = 'Read More';
    }
});

/* -------------------Scroll reveal-------------------- */
ScrollReveal({
    //  reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
 });

 ScrollReveal().reveal('.home-content,  .heading',{ origin: 'top' });
 ScrollReveal().reveal('.home-img,  .service-container, .portfolio-box, .contact form' ,{ origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right' });
