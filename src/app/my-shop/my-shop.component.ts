import { Component, Injector, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProxyService } from '../proxy/proxy.service';
import { BaseComponent } from '../shared/components/base.component';
import { AddServiceComponent } from './add-service/add-service.component';

@Component({
  selector: 'app-my-shop',
  templateUrl: './my-shop.component.html',
  styleUrls: ['./my-shop.component.scss']
})
export class MyShopComponent extends BaseComponent implements OnInit {

  servicList = [
    { name: 'Haircut & Shave' },
    { name: 'Cream & Shampoo' },
    { name: 'Mustache Expert' },
    { name: 'Haircomb' },
    { name: 'Razor For Beards' },
    { name: 'Haircut Styler' },
  ];
  myShop: any = {}
  loading = false
  constructor(
    injector: Injector,
    public modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private proxyService: ProxyService
  ) {
    super(injector);
  }

  deflat=51.501791209228806
  deflag=-0.13595796615182953

  ngOnInit(): void {
    this.proxyService.getMyShop(this.getUserName).subscribe(shop => {
      this.myShop = shop
    })
  }


  showDeleteConfirm(id) {
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

  showSerModal(ser?) {
    let editData
    if (ser) {
     editData = {
        id: ser.id,
        service_name: ser.serviceName,
        service_type: ser.service_type,
        cost: ser.cost,
        description: ser.description,
        service_duration: ser.duration,
        shop_id:this.myShop.id
      }
    }

    const modal = this.modal.create({
      nzTitle: ser ? 'Edit Service' : 'Add Service',
      nzContent: AddServiceComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        shopId:this.myShop.id,
        editService: editData
      },
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
    });

    modal.afterClose.subscribe(result => {
      this.ngOnInit()
    });
  }

  updateLocation(event: google.maps.MouseEvent) {
    this.myShop.lat = event.latLng.toJSON().lat
    this.myShop.lng = event.latLng.toJSON().lng
  }

  update() {
    this.myShop.username = this.getUserName
    this.myShop.rate = 5
    this.myShop.shop_name = this.myShop.shopName
    this.loading = true
    this.proxyService.updateMyShop(this.myShop).subscribe(el => {
      this.loading = false
      this.utility.notification.success('Update Shop Info', 'Update Shop Info success')
    }, () => {
      this.loading = false
      this.utility.notification.error('Update Shop Info', 'Update Shop Info Error')
    })
  }
  deleteItem(id) { 
    this.proxyService.deleteService(id,this.myShop.id).subscribe(el=>{
      this.ngOnInit()
    })
  }
}
