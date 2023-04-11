// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);



const markup = galleryItems.map(item => `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>
`).join('');

const refs = {
    list: document.querySelector('.gallery'),
}
refs.list.insertAdjacentHTML('afterbegin', markup);


let gallery = new SimpleLightbox('.gallery a', {
   captionsData: 'alt',
   captionDelay : 250
});