import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const makeListOfImages = ({ preview, original, description }) => {
  return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>
  `    
};

const listOfImages = galleryItems.map(makeListOfImages).join('');
const galleryEl = document.querySelector('div.gallery');
galleryEl.insertAdjacentHTML('afterbegin', listOfImages);

galleryEl.addEventListener('click', onGalleryClick)

function onGalleryClick(evt) {
    evt.preventDefault();
    const isImgEl = evt.target.classList.contains('gallery__image');

    if (!isImgEl) {
        return;
    }
    
    const instance = basicLightbox.create(`
	<img
        width="1400"
        height="900"
        src="${evt.target.dataset.source}"            
    />
`)
    instance.show()

    galleryEl.addEventListener("keydown", evt => {
if (evt.code==='Escape') {
    instance.close()
}
});
}





