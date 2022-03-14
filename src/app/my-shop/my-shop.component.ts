import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/components/base.component';

@Component({
  selector: 'app-my-shop',
  templateUrl: './my-shop.component.html',
  styleUrls: ['./my-shop.component.scss']
})
export class MyShopComponent extends BaseComponent implements OnInit {

  servicList = [
    {name: 'Hair Cat'},
    {name: 'Hair Cat'},
    {name: 'Hair Cat'},
    {name: 'Hair Cat'},
    {name: 'Hair Cat'},
    {name: 'Hair Cat'},
    {name: 'Hair Cat'},
    {name: 'Hair Cat'},
  ];
  constructor(
    injector: Injector
  ) {
    super(injector);
   }

  ngOnInit(): void {
  }


  showDeleteConfirm(id){
    this.utility.modal.confirm({
      nzTitle: 'Delete Service',
      nzContent: `<b style="color: red;">Are You Sure'</b>`,
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

  showSerModal(ser?){}

  deleteItem(id){}
}
