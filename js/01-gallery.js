import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

// отримаємо доступ до розмітки та додамо її в DOM
const imgMarkup = createGalary(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', imgMarkup);


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

// // функція збільшення зображення по типу відкриття модального вікна



galleryRef.onclick = (e) => {
    e.preventDefault()
    
    if (e.target.nodeName !== "IMG") {
        return;
    }


    const instance = basicLightbox.create(`
		<img width="800" height="600" src="${e.target.dataset.source}">
        `, {
        closable: true,
        onShow: () => {
        document.body.addEventListener("keydown", onKeyEscPress);
        },
        onClose: () => {
        document.body.removeEventListener("keydown", onKeyEscPress);
        },
    });


    function onKeyEscPress(evt) {
        if (evt.key === 'Escape') {
            instance.close(evt)
        }
    }
    

    instance.show();
}