
let SearchBtn=document.querySelector("#search_btn");
let SearchBar=document.querySelector(".search-Bar-container");
let formBtn=document.querySelector("#login_btn");
let loginForm=document.querySelector(".login-form-container");
let formClose=document.querySelector("#form-close");
let menu=document.querySelector("#menu-bar");
let navBar=document.querySelector(".navbar");
let videoBtn=document.querySelectorAll(".vid-btn");

SearchBtn.addEventListener('click' ,()=>{
    SearchBtn.classList.toggle("fa-times");
    SearchBar.classList.toggle("active");

})

menu.addEventListener('click' ,()=>{
    menu.classList.toggle("fa-times");
    navBar.classList.toggle("active");

})
window.onscroll=()=>{
    SearchBtn.classList.remove("fa-times");
    SearchBar.classList.remove("active");
    menu.classList.remove("fa-times");
    navBar.classList.remove("active");
    loginForm.classList.remove("active");

}

formBtn.addEventListener('click' ,()=>{
    
    loginForm.classList.add("active");

})

formClose.addEventListener('click' ,()=>{
    
    loginForm.classList.remove("active");

})

videoBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;
    });
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});