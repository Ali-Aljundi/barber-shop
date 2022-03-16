import { Component, Injector, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { BaseComponent } from '../shared/components/base.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends BaseComponent  implements OnInit {

  
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
  constructor(injector: Injector) {super(injector) }

  ngOnInit(): void {
  }
  reserveNow(){
    if (this.isUser) {
      this.utility.route.navigate(['/shops'])
    } else {
      this.utility.route.navigate(['/login'])
    }
  }
}
