import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

document.querySelector('.span.loader').classList.remove('loader');

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

const errorMessage = {
  iconColor: '#ffffff',
  message:
    'Sorry, there are no images matching your search query. Please try again!',
  backgroundColor: '#B51B1B',
  messageColor: '#ffffff',
  iconUrl: './img/error.svg',
};

const errorServerConnection = {
  title: 'ERROR',
  titleColor: '#ffffff',
  message: 'Error connecting to server',
  messageColor: '#ffffff',
  iconUrl: './img/error.svg',
  iconColor: '#ffffff',
  backgroundColor: '#B51B1B',
};

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  gallery.innerHTML = '';

  const usersRequest = event.target.elements.text.value.trim();
  checkInput(usersRequest);
  showLoader();

  getImagesByQuery(usersRequest)
    .then(response => {
      const array = response.data.hits;
      emptyInputCheck(array);
      hideLoader();
      createGallery(array);
      createLightBox();
    })
    .catch(error => {
      console.log(error.message);
      hideLoader();
      iziToast.show(errorServerConnection);
    });

  form.reset();
}

function createLightBox() {
  let galleryLightBox = new SimpleLightbox('.gallery li a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  galleryLightBox.refresh();
}

function checkInput(usersRequest) {
  if (!usersRequest) {
    iziToast.show(errorMessage);
    form.reset();
    return;
  }
}

function emptyInputCheck(array) {
  if (!array.length) {
    iziToast.show(errorMessage);
    clearGallery();
    hideLoader();
    return;
  }
}