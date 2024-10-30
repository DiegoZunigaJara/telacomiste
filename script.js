const images = [
    'fotos/4.jpg',
    'fotos/6.jpg',
    'fotos/7.jpg',
    'fotos/9.jpg',
    'fotos/10.jpg',
    'fotos/13.jpg',
    'fotos/15.jpg',
];
let currentIndex = 0;

function changeImage() {
    const slideshow = document.getElementById('slideshow');
    currentIndex = (currentIndex + 1) % images.length;
    slideshow.src = images[currentIndex];
}

setInterval(changeImage, 2000);
