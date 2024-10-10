let currentIndex = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.nav-dot');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

function changeSlide(n) {
    showSlide(currentIndex + n);
}

function currentSlide(index) {
    showSlide(index - 1);
}

document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(-1);
});

document.querySelector('.next').addEventListener('click', () => {
    changeSlide(1);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide(index + 1);
    });
});

setInterval(() => {
    changeSlide(1);
}, 5000);
