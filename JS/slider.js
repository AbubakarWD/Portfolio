// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const projectGrid = document.querySelector('.project-grid');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
const projectCards = document.querySelectorAll('.project-card');

// Menu Toggle
menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});

// Carousel - Right to Left Rotation
if (projectGrid && prevBtn && nextBtn && projectCards.length > 0) {
    let currentIndex = 0;
    let autoSlideInterval;
    let cardsPerView = 3;

    function getCardsPerView() {
        if (window.innerWidth <= 576) return 1;
        if (window.innerWidth <= 768) return 2;
        return 3;
    }

    function updateCarousel() {
        cardsPerView = getCardsPerView();
        const cardWidth = projectCards[0].offsetWidth + 24; // card width + gap
        const offset = -currentIndex * cardWidth;
        projectGrid.style.transform = `translateX(${offset}px)`;
    }

    // Rotate Right to Left (move next/forward)
    function rotateLeft() {
        const maxIndex = projectCards.length - cardsPerView;
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to start
        }
        updateCarousel();
    }

    // Rotate Left to Right (move prev/backward)
    function rotateRight() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = Math.max(0, projectCards.length - cardsPerView); // Loop to end
        }
        updateCarousel();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            rotateLeft(); // Auto-rotate from right to left
        }, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event Listeners
    nextBtn.addEventListener('click', () => {
        rotateLeft(); // Right arrow = rotate left (move projects right to left)
        stopAutoSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        rotateRight(); // Left arrow = rotate right (move projects left to right)
        stopAutoSlide();
        startAutoSlide();
    });

    projectGrid.addEventListener('mouseenter', stopAutoSlide);
    projectGrid.addEventListener('mouseleave', startAutoSlide);

    window.addEventListener('resize', () => {
        currentIndex = 0;
        updateCarousel();
    });

    // Initialize carousel
    updateCarousel();
    startAutoSlide();
}
