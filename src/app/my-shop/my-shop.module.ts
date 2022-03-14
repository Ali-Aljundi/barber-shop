import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyShopRoutingModule } from './my-shop-routing.module';
import { MyShopComponent } from './my-shop.component';
import { AppNgZorroAntdModule } from '../app-ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyShopComponent
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
