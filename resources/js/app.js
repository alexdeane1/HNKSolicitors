import $ from 'jquery'
import matchHeight from 'jquery-match-height'
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


$('.matchHeight').matchHeight({ property: 'min-height' });

const swiper = new Swiper('.swiper', {
    slidesPerView: 2.2,
    spaceBetween: 32,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})


