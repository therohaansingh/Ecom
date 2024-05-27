document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.brand-slider');
    const sliderItems = document.querySelectorAll('.brand-item');

    // Clone first few items to create an infinite loop effect
    sliderItems.forEach(item => {
        const clone = item.cloneNode(true);
        slider.appendChild(clone);
    });
});
