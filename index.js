        // Navbar

const navList = document.querySelector(".nav-menu");
const button = document.querySelector(".btn-wrapper-child");
const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector('.mobile-menu-box')

console.log(menuIcon);

menuIcon.addEventListener('click', () => {

    console.log(mobileMenu);

    // mobileMenu.classList.toggle('hidden');


    if(mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }

})




          // logos-slider

const sliderBox = [...document.querySelectorAll('.slider-box')];
const prevBtn = [...document.querySelectorAll('.prev-btn')];
const nextBtn = [...document.querySelectorAll('.next-btn')];


sliderBox.forEach((card, i) => {
    let sliderDimension = card.getBoundingClientRect();
    let width = sliderDimension.width;

    nextBtn[i].addEventListener('click', () => {
        card.scrollLeft = card.scrollLeft + width;
    })

    prevBtn[i].addEventListener('click', () => {
        card.scrollLeft = card.scrollLeft - width;
    })
});






        // FAQs

const accordOpen = document.querySelectorAll('.accord-open');
const accordClose = document.querySelectorAll('.accord-close');
const ansBox = document.querySelectorAll('.answer');

 console.log(accordOpen);

for(let i = 0; i<accordClose.length; i++) {
    accordOpen[i].addEventListener('click', () => {
        ansBox[i].classList.toggle('hidden');
        accordOpen[i].classList.toggle('hidden');
        accordClose[i].classList.toggle('hidden'); 
    });

    accordClose[i].addEventListener('click', () => {
        ansBox[i].classList.toggle('hidden');
        accordOpen[i].classList.toggle('hidden');
        accordClose[i].classList.toggle('hidden'); 
    })
}



// testimonials

const testimonialsBox = [...document.querySelectorAll('.testimonials-wrapper-box')];
const prevIcon = [...document.querySelectorAll('.previous-icon')];
const nextIcon = [...document.querySelectorAll('.next-icon')];


testimonialsBox.forEach((card, i) => {
    let sliderDimension = card.getBoundingClientRect();
    let width = sliderDimension.width;

    nextIcon[i].addEventListener('click', () => {
        card.scrollLeft = card.scrollLeft + width;
    })

    prevIcon[i].addEventListener('click', () => {
        card.scrollLeft = card.scrollLeft - width;
    })
});




// testimonials-stars

const stars = document.querySelectorAll('.fa-star');

console.log(stars);

for(let i=0; i<stars.length; i++) {
    stars[i].addEventListener('click', () => {
        stars[i].classList.toggle('checked');
    })
}






// brand-logo-slider

const brandLogobox = [...document.querySelectorAll('.brand-logos-slider')];
const prevbutton = [...document.querySelectorAll('.previous-button')];
const nextbutton = [...document.querySelectorAll('.next-button')];


brandLogobox.forEach((card, i) => {
    let sliderDimension = card.getBoundingClientRect();
    let width = sliderDimension.width;

    nextbutton[i].addEventListener('click', () => {
        card.scrollLeft = card.scrollLeft + width;
    })

    prevbutton[i].addEventListener('click', () => {
        card.scrollLeft = card.scrollLeft - width;
    })
});



/*.......................slider................... */

// let slider = document.querySelector('.slider .list');
// let items = document.querySelectorAll('.slider .list .item');
// let next = document.getElementById('next');
// let prev = document.getElementById('prev');
// let dots = document.querySelectorAll('.slider .dots li');


// let lengthItems = items.length - 1;
// let active = 0;
// next.onclick = function(){
//     active = active + 1 <= lengthItems ? active + 1 : 0;
//     reloadSlider();
// }
// prev.onclick = function(){
//     active = active - 1 >= 0 ? active - 1 : lengthItems;
//     reloadSlider();
// }
// let refreshInterval = setInterval(()=> {next.click()}, 3000);
// function reloadSlider(){
//     slider.style.left = -items[active].offsetLeft + 'px';
//     // 
//     let last_active_dot = document.querySelector('.slider .dots li.active');
    
//     last_active_dot.classList.remove('active');
//     dots[active].classList.add('active');

//       clearInterval(refreshInterval);
//     refreshInterval = setInterval(()=> {next.click()}, 3000);

    
// }

// dots.forEach((li, key) => {
//     li.addEventListener('click', ()=>{
//          active = key;
//          reloadSlider();
//     })
// })
// window.onresize = function(event) {
//     reloadSlider();
// };


let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');


let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

