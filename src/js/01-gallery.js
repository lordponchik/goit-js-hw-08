// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryEl.style.listStyle = 'none';

galleryEl.innerHTML = createGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGallery(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                 <a class="gallery__link" href="${original}">
                   <img class="gallery__image" src="${preview}" alt="${description}" />
               </a>
            </li>`;
    })
    .join('');
}
