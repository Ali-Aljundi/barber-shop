import { Component, Injector, OnInit } from '@angular/core';
import { ProxyService } from '../proxy/proxy.service';
import { BaseComponent } from '../shared/components/base.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent  extends BaseComponent implements OnInit {
  constructor(
    injector :Injector,
    private proxyService:ProxyService
  ) { 
    super(injector);
  }
  reservationList = []
  ngOnInit(): void {
    if(this.isUser){
      this.proxyService.getMyReservation(this.getUserName).subscribe((el:any)=>{
        this.reservationList = el
      })
    }
    if(this.isOwner){
      this.proxyService.getShopReservation(this.getUserName).subscribe((el:any)=>{
        this.reservationList = el
      })
    }
  }
  showReservation=false
  selectedReservationByDate=[]
  
  haveReservation(date) {
    return this.reservationList.filter(el=>{
       return (new Date(el.date).getMonth() == new Date(date).getMonth())&&(new Date(el.date).getDate() == new Date(date).getDate())&&(new Date(el.date).getFullYear() == new Date(date).getFullYear());
    })
  }

  getTime(date){
    return new Date(date).getTime()
  }
  serviceIcon(service){
    return `assets/icon/${service.service_type}.png`
}
}
