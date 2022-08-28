// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryMeinItem = document.querySelector('.gallery');
const galleryMarkUp = galleryItems.map(createImageGridMarkup).join('');

galleryMeinItem.insertAdjacentHTML('afterbegin', galleryMarkUp);

function createImageGridMarkup({ preview, original, description } = {}) {
  return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/></a>`;
}

(function () {
  var $gallery = new SimpleLightbox('.gallery a', { captionDelay: 250 });
})();
