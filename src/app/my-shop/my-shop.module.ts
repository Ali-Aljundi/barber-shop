import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyShopRoutingModule } from './my-shop-routing.module';
import { MyShopComponent } from './my-shop.component';
import { AppNgZorroAntdModule } from '../app-ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddServiceComponent } from './add-service/add-service.component';


@NgModule({
  declarations: [
    MyShopComponent,
    AddServiceComponent
  ],
  imports: [
    CommonModule,
    MyShopRoutingModule,
    AppNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MyShopModule { }
