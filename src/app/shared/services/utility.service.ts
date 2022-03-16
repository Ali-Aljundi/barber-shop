import { Injectable, Injector } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  public modal: NzModalService;
  public route: Router;
  public notification :NzNotificationService
  serviceType = {
    hair : 0,
    face : 1,
    wax : 2,
    color : 3,
    package : 4
  }
  constructor(injector: Injector) { 
    this.modal = injector.get(NzModalService);
    this.route = injector.get(Router);
    this.notification = injector.get(NzNotificationService);
   }
  
  public navigate(url: string) {
    this.route.navigate([url]);
  }

}
