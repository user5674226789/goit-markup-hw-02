import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

let query;
let currentPage = 1;
let maxPage = 0;
const pageSize = 15;


const form = document.querySelector('.search-form');
const list = document.querySelector('.list');
const load = document.querySelector('.loader');
const btnLoadMore = document.querySelector('.btn-load-more');


form.addEventListener('submit', handleImages);

async function handleImages(event) {
    event.preventDefault();
    query = event.target.elements.search.value.trim();
    list.innerHTML = "";
    currentPage = 1;
    showLoader();
    if (query === '') {
      iziToast.error({
        backgroundColor: 'lightred',
        icon: false,
        progressBar: false,
        close: false,
        position: 'topRight',
        message: 'Please, fill the field!',
      });
      return;
    }
    try {
      const data = await getImages(query, currentPage);
      maxPage = Math.ceil(data.totalHits / pageSize);
      renderImages(data.hits);
    showLoader ();
        if (data.hits && data.hits.length === 0) {
          iziToast.error({
            backgroundColor: 'red',
            progressBar: false,
            close: false,
            position: 'topRight',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        }
        const markup = renderImages(data.hits);
        list.innerHTML = markup;
        const lightbox = new SimpleLightbox('.gallery-link', {
          captionsData: 'alt',
          captionDelay: 250,
        });
        lightbox.refresh();
      
      } catch (error) {
        console.error('Error occurred while fetching images:', error);
        iziToast.error({
          backgroundColor: 'red',
          icon: false,
          progressBar: false,
          close: false,
          position: 'topRight',
          message:
            'Sorry, an error occurred while fetching images. Please try again!',
        });
      }
    hideLoader(); 
    event.target.reset();
    checkBtnStatus();
  }


btnLoadMore.addEventListener('click', onLoadMoreClick);

async function onLoadMoreClick(){
  currentPage += 1;
showLoader();
try{
const data = await getImages(query, currentPage);
list.insertAdjacentHTML('beforeend', renderImages(data.hits));
if (currentPage >= maxPage) {
  iziToast.show({
    color: 'green',
    message: `We're sorry, but you've reached the end of search results.`,
    position: 'topCenter',
    timeout: 3000,
  });
}
} catch (err) {
console.log(err);
}
hideLoadMore();
myScroll();
hideLoader();
checkBtnStatus();
}
//hideLoader();
//hideLoadMore();
function showLoadMore() {
  btnLoadMore.classList.remove('hidden');
}
function hideLoadMore() {
  btnLoadMore.classList.add('hidden');
}
function showLoader () {
  load.classList.remove('hidden');
}
function hideLoader () {
  load.classList.add('hidden');
}
function checkBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadMore();
  } else {
    showLoadMore();
  }
}
function myScroll() {
  const height = (list.firstChild.getBoundingClientRect().height);

  window.scrollBy({
      top: height*2 ,
      behavior: 'smooth',
  });
}
