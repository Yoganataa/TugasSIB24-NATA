// keyframe
function createKeyframesStyle() {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
        @keyframes slide {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-200%);
            }
        }
    `;
    document.head.appendChild(styleTag);
}

// styling
function setupCarousel() {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    
    carousel.style.display = 'flex';
    carousel.style.width = '300%';
    carousel.style.animation = 'slide 15s infinite linear';

    carouselItems.forEach(item => {
        item.style.flex = '0 0 100%';
        item.style.height = '100vh';
        item.style.backgroundSize = 'auto';
        item.style.backgroundPosition = 'center';
        item.style.transition = 'opacity 0.5s ease-in-out';
    });

    carouselItems[0].classList.add('active');
}
setupCarousel();
createKeyframesStyle();


// scrl1
function scrollToCarousel() {
    const carouselElement = document.getElementById('carousel');
    carouselElement.scrollIntoView({ behavior: 'smooth' });
}

//scrl2
function scrollToFitur() {
    const carouselElement = document.getElementById('fitur');
    carouselElement.scrollIntoView({ behavior: 'smooth' });
}

//scrl3
function scrollToFAQ() {
    const carouselElement = document.getElementById('faq');
    carouselElement.scrollIntoView({ behavior: 'smooth' });
}