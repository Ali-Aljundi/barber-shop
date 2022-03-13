import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  
  public route: Router;

  constructor(
    injector: Injector
  ) { 
    this.route = injector.get(Router);

  }

  public navigate(url: string) {
    this.route.navigate([url]);
  }

}
