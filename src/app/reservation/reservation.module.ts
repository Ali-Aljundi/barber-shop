import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationComponent } from './reservation.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ReservationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReservationRoutingModule
  ]
})
export class ReservationModule { }
