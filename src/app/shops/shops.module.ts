import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { ShopsComponent } from './shops.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ShopsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopsRoutingModule
  ]
})
export class ShopsModule { }
