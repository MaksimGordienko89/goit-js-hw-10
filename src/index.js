import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

fetch('https://restcountries.com/v3.1/name/{name}?fullText=true')
  .then(response => {
    return response.json();
  })
  .then(country => {
    console.log(country);
  })
  .catch(error => {
    console.log(error);
  });
