import { galleryItems } from './gallery-items.js';
// Change code below this line


// посилання на галерею
const gallery = document.querySelector('.gallery');


// додаємо у розмітку нові елементи
const galleryMarkup = createGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);


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


// застосуємо можливості бібліотеки simplelightbox
const gallarySlider = new SimpleLightbox('.gallery a', { 
        overlayOpacity: 0.9,
        captionsData: "alt",
        captionDelay: 250,
        animationSpeed: 500,
});