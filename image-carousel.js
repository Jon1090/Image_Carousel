const slides = document.querySelectorAll(".imageWrapper");
let slideIndex = 0;

function changeSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides.forEach(element => element.classList.add("hidden"));
    }

    slideIndex = slideIndex + n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    slides[slideIndex].classList.toggle("hidden");

}

changeSlide(0);

function setSlide(x) {
    slideIndex = x;
    for (let i = 0; i < slides.length; i++) {
        slides.forEach(element => element.classList.add("hidden"));
    }
    slides[slideIndex].classList.toggle("hidden");
}