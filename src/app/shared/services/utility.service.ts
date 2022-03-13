import { Injectable, Injector } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  public modal: NzModalService;
  serviceType = {
    hair : 0,
    face : 1,
    wax : 2,
    color : 3,
    package : 4
  }
  constructor(injector: Injector) { 
    this.modal = injector.get(NzModalService);
  }
}
