import { Injectable, Injector } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  public modal: NzModalService;

  constructor(injector: Injector) { 
    this.modal = injector.get(NzModalService);
  }
}
