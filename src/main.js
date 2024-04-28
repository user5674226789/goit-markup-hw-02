import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

export const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('#load-more-btn');
const elemLoader = document.querySelector('#loader');
let searchQueryResult;
let totalPage;
let currentPage = 1;
const maxPage = 15;
let data;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  gallery.innerHTML = '';
  currentPage = 1;
  searchQueryResult = event.target.elements.query.value.trim();
  if (searchQueryResult === '') {
    iziToast.warning({
      message: `The search field is empty. Please try again!`,
      position: 'topRight',
    });
    searchForm.reset();
    return;
  }
  try {
    showElemLoader();
    data = await fetchImages(searchQueryResult, currentPage);
    totalPage = Math.ceil(data.totalHits / maxPage);
    if (!data.hits.length) {
      hideElemLoader();
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again.',
        position: 'topRight',
      });
      checkBtnStatus();
    } else {
      hideElemLoader();
      renderGallery(data);
      lightbox.refresh();
      checkBtnStatus();
    }
  } catch (error) {
    hideElemLoader();
    iziToast.error({
      message: `Error rendering gallery. Please try again!`,
      position: 'topRight',
    });
  }
  searchForm.reset();
});

loadMoreBtn.addEventListener('click', onLoadMoreBtn);
async function onLoadMoreBtn() {
  currentPage++;
  showElemLoader();
  try {
    data = await fetchImages(searchQueryResult, currentPage);
    renderGallery(data);
    lightbox.refresh();
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: 'Error rendering next gallery images',
    });
  }
  hideElemLoader();
  onScroll();
  checkBtnStatus();
}

function onScroll() {
  const galleryCard = document.querySelector('.gallery-image');
  const cardHeight = galleryCard.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

function checkBtnStatus() {
  if (currentPage >= totalPage) {
    loadMoreBtn.classList.add('is-hidden');
    iziToast.info({
      message: "We're sorry, there are no more images to load",
      position: 'topRight',
    });
  } else {
    loadMoreBtn.classList.remove('is-hidden');
  }
}

function hideElemLoader() {
  elemLoader.classList.add('is-hidden');
}
function showElemLoader() {
  elemLoader.classList.remove('is-hidden');
}
