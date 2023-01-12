import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

// отримаємо доступ до розмітки та додамо її в DOM
const imgMarkup = createGalary(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', imgMarkup);

// створимо подію по кліку на зображення (делегуючи подію спільного предка div)
galleryRef.addEventListener('click', imgOnClick);


// функція створення елементів із зображеннями
function createGalary(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
                <div class="gimage.pngallery__item">
                    <a class="gallery__link" href=${original}>
                        <img
                            class="gallery__image"
                            src=${preview}
                            data-source=${original}
                            alt=${description}
                        />
                    </a>
                </div>`;
        })
        .join('')
}

// функція збільшення зображення по типу відкриття модального вікна
function imgOnClick (e) {
    e.preventDefault()
    
    if (e.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">`,
    );

    instance.show()


    // document.addEventListener("keydown", (instance) => instance.close(););
}

