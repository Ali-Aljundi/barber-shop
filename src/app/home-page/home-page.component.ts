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
      descriptions: 'Excellent treatment, high skill at work and punctuality.',
      name: "Jack Brown",
    },
    {
      id: 2,
      descriptions: 'Full commitment to deadlines and accuracy in the implementation of layoffs.',
      name: "Dylan Pen",
    },
  ];
  array = [1, 2, 3, 4];
  constructor() { }

  ngOnInit(): void {
  }

}
