import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');
console.log(galleryItems);
console.log(gallery);
console.log(SimpleLightbox);
const galleryItem = galleryItems
  .map(
    item =>
      `<div class="gallery__item"><a class="gallery__item" href="${item.original}"><img  class="gallery__image" src="${item.preview}"  alt="${item.description}" loading="lazy"
  />
</a>
  </div>`,
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', galleryItem);
gallery.addEventListener('click', imgHandlerClick);
const image = document.querySelector('.gallery__image');
function imgHandlerClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    overlay: true,
    showCounter: false,
    enableKeyboard: true,
    animationSlide: true,
    preloading: true,
    captionsData: 'alt',
  });
}