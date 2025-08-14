
const imgItems = document.querySelectorAll('.portfolio-carousel .img-items');
const projectDetails = document.querySelectorAll('.portfolio-box .portfolio-detail');
const carousel = document.querySelector('.portfolio-carousel');
const btnPrev = document.createElement('button');
const btnNext = document.createElement('button');

btnPrev.textContent = '⟨';
btnNext.textContent = '⟩';
btnPrev.className = 'slider-btn prev-btn';
btnNext.className = 'slider-btn next-btn';

carousel.appendChild(btnPrev);
carousel.appendChild(btnNext);

let current = 0;
let intervalId;

function showSlide(idx) {
    imgItems.forEach((item, i) => {
        item.style.opacity = i === idx ? '1' : '0';
        item.style.position = i === idx ? 'relative' : 'absolute';
        item.style.zIndex = i === idx ? '2' : '1';
        item.style.transition = 'opacity 0.5s ease';
    });
    projectDetails.forEach((detail, i) => {
        detail.classList.toggle('active', i === idx);
    });
}

function startSlider() {
    intervalId = setInterval(() => {
        current = (current + 1) % imgItems.length;
        showSlide(current);
    }, 4000);
}

function stopSlider() {
    clearInterval(intervalId);
}

btnNext.addEventListener('click', () => {
    current = (current + 1) % imgItems.length;
    showSlide(current);
});

btnPrev.addEventListener('click', () => {
    current = (current - 1 + imgItems.length) % imgItems.length;
    showSlide(current);
});

carousel.addEventListener('mouseenter', stopSlider);
carousel.addEventListener('mouseleave', startSlider);

showSlide(current);
startSlider();