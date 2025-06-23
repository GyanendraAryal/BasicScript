const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg']; // your image URLs
let currentIndex = 0;

const imgElem = document.getElementById('galleryImage');
document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imgElem.src = images[currentIndex];
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    imgElem.src = images[currentIndex];
});