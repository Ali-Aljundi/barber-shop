import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    AOS.refresh()
  }
  title = 'barber-shop';

  ngOnInit(): void {
    AOS.init();
  }

}
 
