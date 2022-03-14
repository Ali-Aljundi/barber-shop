import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  
  activeFeedbacks = [
    {
      id: 1,
      descriptions: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
      image: 'assets/ExperienceImage.png',
      name: "Marah Daher",
      position: "Front web developer"
    },
    {
      id: 2,
      descriptions: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
      image: 'assets/ExperienceImage.png',
      name: "Majd Daher",
      position: "Front web developer"
    },
    {
      id: 3,
      descriptions: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
      image: 'assets/ExperienceImage.png',
      name: "Majd Daher",
      position: "Front web developer"
    },
    {
      id: 3,
      descriptions: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
      image: 'assets/ExperienceImage.png',
      name: "Majd Daher",
      position: "Front web developer"
    },
    {
      id: 3,
      descriptions: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
      image: 'assets/ExperienceImage.png',
      name: "Majd Daher",
      position: "Front web developer"
    },
    {
      id: 3,
      descriptions: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
      image: 'assets/ExperienceImage.png',
      name: "Majd Daher",
      position: "Front web developer"
    },
  ];

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: false,
    scrollbar: { draggable: true },
    autoplay: {
      delay: 3000,
    },
    speed: 1000,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    breakpoints: {
      340: {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
        autoplay: {
          delay: 3000,
        },
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
        autoplay: {
          delay: 3000,
        },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
        autoplay: {
          delay: 3000,
        },
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
        autoplay: {
          delay: 3000,
        },
      },
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
