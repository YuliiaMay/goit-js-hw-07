import { galleryItems } from './gallery-items.js';
// Change code below this line


// посилання на галерею
const gallery = document.querySelector('.gallery');


// додаємо у розмітку нові елементи
const galleryMarkup = createGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);


// виклик події по кліку на img
gallery.addEventListener('click', onImgClick);


// функція створення елементів 
function createGallery(galleryItems) {
    return galleryItems
        .map(({preview, original, description}) => {
            return `<a class="gallery__item" href=${original}>
                        <img
                            class="gallery__image"
                            src=${preview} 
                            alt=${description}/>
                    </a>`
        })
        .join('')
};


// створимо функцію для збільшення зображення за допомогою бібліотеки simplelightbox
function onImgClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }

    const lightbox = new SimpleLightbox('.gallery a', {
        overlayOpacity: 0.9,
        captionsData: "alt",
        captionDelay: 400,
        animationSpeed: 500,
        captionPosition: 'top',
    });
};
