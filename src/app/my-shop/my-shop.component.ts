import { Component, Injector, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BaseComponent } from '../shared/components/base.component';
import { AddServiceComponent } from './add-service/add-service.component';

@Component({
  selector: 'app-my-shop',
  templateUrl: './my-shop.component.html',
  styleUrls: ['./my-shop.component.scss']
})
export class MyShopComponent extends BaseComponent implements OnInit {

  servicList = [
    {name: 'Haircut & Shave'},
    {name: 'Cream & Shampoo'},
    {name: 'Mustache Expert'},
    {name: 'Haircomb'},
    {name: 'Razor For Beards'},
    {name: 'Haircut Styler'},
  ];
  constructor(
    injector: Injector,
    public modal: NzModalService,
    private viewContainerRef: ViewContainerRef,

  ) {
    super(injector);
   }

  ngOnInit(): void {
  }


  showDeleteConfirm(id){
    this.utility.modal.confirm({
      nzTitle: 'Delete Service',
      nzContent: `<b style="color: red;">Are You Sure</b>`,
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.deleteItem(id);
      },
      nzCancelText: 'No',
      nzOnCancel: () => null
    });
  }

  showSerModal(ser?){
    const modal = this.modal.create({
      nzTitle: ser ? 'Edit Service' : 'Add Service',
      nzContent: AddServiceComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams : {
        editService : ser
      },
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
    });

    modal.afterClose.subscribe(result => {      
      if (result) {
        // if (material?.id) {
        //   Object.assign(material, result);
        // } else {
        //   this.initLoading = true;
        //   this.materialsList = [];
        //   this.getMaterial();
        // }
      }
    });
  }

  deleteItem(id){}
}
