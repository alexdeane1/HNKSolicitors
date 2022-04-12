import $ from 'jquery'
import matchHeight from 'jquery-match-height'
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


$('.matchHeight').matchHeight({ property: 'min-height' });

const swiper = new Swiper('.swiper', {
  slidesPerView: 1.25,
  spaceBetween: 32,
  navigation: {
    nextEl: '.swiper-button-next',
    
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    700: {
      slidesPerView: 1.8,
    },
    900: {
      slidesPerView: 2.1,
    },
    1024: {
      slidesPerView: 1.4,
    },
    1280: {
      slidesPerView: 1.7,
    },
    1500: {
      slidesPerView: 1.9,
    },
    1675: {
      slidesPerView: 2.1,
    },
    2075: {
      slidesPerView: 2.5,
    },
    2300: {
      slidesPerView: 2.75,
    },
    2400: {
      slidesPerView: 3,
    },
  }
})


