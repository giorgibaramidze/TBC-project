let currentSlideIndex = 1;
let slideInterval;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const dotsContainer = document.getElementById('slider-dots');

    if (index > slider.children.length) {
        currentSlideIndex = 1;
    } else if (index < 1) {
        currentSlideIndex = slider.children.length;
    } else {
        currentSlideIndex = index;
    }

    slider.style.transform = `translateX(${-100 * (currentSlideIndex - 1)}%)`;

    // Update active dot
    const dots = Array.from(dotsContainer.children);
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlideIndex - 1);
    });
}

function prevSlide() {
    clearInterval(slideInterval);
    showSlide(currentSlideIndex - 1);
    startAutoSlide();
}

function nextSlide() {
    clearInterval(slideInterval);
    showSlide(currentSlideIndex + 1);
    startAutoSlide();
}

function autoSlide() {
    nextSlide();
}

function startAutoSlide() {
    slideInterval = setInterval(autoSlide, 5000);
}

function createDots() {
    const dotsContainer = document.getElementById('slider-dots');
    const slider = document.querySelector('.slider');

    for (let i = 0; i < slider.children.length; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(i + 1);
            startAutoSlide();
        });
        dotsContainer.appendChild(dot);
    }

    // Highlight the active dot
    dotsContainer.children[currentSlideIndex - 1].classList.add('active');
}

// Initial slide display, auto slide, and create dots
showSlide(currentSlideIndex);
startAutoSlide();
createDots();