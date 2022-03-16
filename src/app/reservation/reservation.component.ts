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
    this.proxyService.getMyReservation(this.getUserName).subscribe((el:any)=>{
      this.reservationList = el
    })
  }
  showReservation=false
  selectedReservationByDate=[]
  // reservationList:any = [
  //   {
  //     id: 3,
  //     serviceName: 'Haircut & Deluxe Beard Trim',
  //     cost: 13.3,
  //     rate:3,
  //     description: 'Haircut & Deluxe Beard Trim',
  //     duration: 23,
  //     shopName:"barberShop",
  //     service_type: 'color',
  //     date:'2022-03-15T22:00:00.000Z',
  //     location: {
  //       "lat": 33.504191847389116,
  //       "lng": 36.249179950576305
  //     },
  //   },
  //   {
  //     id: 3,
  //     serviceName: 'Haircut & Deluxe Beard Trim',
  //     cost: 13.3,
  //     rate:3,
  //     description: 'Haircut & Deluxe Beard Trim',
  //     duration: 23,
  //     shopName:"barberShop",
  //     service_type: 'color',
  //     date:'2022-03-11T22:00:00.000Z',
  //     location: {
  //       "lat": 33.504191847389116,
  //       "lng": 34.249179950576305
  //     },
  //   },
  //   {
  //     id: 3,
  //     serviceName: 'Haircut & Deluxe Beard Trim',
  //     cost: 13.3,
  //     rate:3,
  //     description: 'Haircut & Deluxe Beard Trim',
  //     duration: 23,
  //     shopName:"barberShop",
  //     service_type: 'color',
  //     date:'2022-03-11T22:00:00.000Z',
  //     location: {
  //       "lat": 33.504191847389116,
  //       "lng": 34.249179950576305
  //     },
  //   },
  //   {
  //     id: 3,
  //     serviceName: 'Haircut & Deluxe Beard Trim',
  //     cost: 13.3,
  //     rate:3,
  //     description: 'Haircut & Deluxe Beard Trim',
  //     duration: 23,
  //     shopName:"barberShop",
  //     service_type: 'color',
  //     date:'2022-03-22T22:00:00.000Z',
  //     location: {
  //       "lat": 36.504191847389116,
  //       "lng": 36.249179950576305
  //     },
  //   },
  //   {
  //     id: 3,
  //     serviceName: 'Haircut & Deluxe Beard Trim',
  //     cost: 13.3,
  //     rate:3,
  //     description: 'Haircut & Deluxe Beard Trim',
  //     duration: 23,
  //     shopName:"barberShop",
  //     service_type: 'color',
  //     date:'2022-03-22T22:00:00.000Z',
  //     location: {
  //       "lat": 36.504191847389116,
  //       "lng": 36.249179950576305
  //     },
  //   },
  //   {
  //     id: 3,
  //     serviceName: 'Haircut & Deluxe Beard Trim',
  //     cost: 13.3,
  //     rate:3,
  //     description: 'Haircut & Deluxe Beard Trim',
  //     duration: 23,
  //     shopName:"barberShop",
  //     service_type: 'color',
  //     date:'2022-03-22T22:00:00.000Z',
  //     location: {
  //       "lat": 36.504191847389116,
  //       "lng": 36.249179950576305
  //     },
  //   },
  //   {
  //     id: 3,
  //     serviceName: 'Haircut & Deluxe Beard Trim',
  //     cost: 13.3,
  //     rate:3,
  //     description: 'Haircut & Deluxe Beard Trim',
  //     duration: 23,
  //     shopName:"barberShop",
  //     service_type: 'color',
  //     date:'2022-03-22T22:00:00.000Z',
  //     location: {
  //       "lat": 36.504191847389116,
  //       "lng": 36.249179950576305
  //     },
  //   },
  //   {
  //     id: 3,
  //     serviceName: 'Haircut & Deluxe Beard Trim',
  //     cost: 13.3,
  //     rate:3,
  //     description: 'Haircut & Deluxe Beard Trim',
  //     duration: 23,
  //     shopName:"barberShop",
  //     service_type: 'color',
  //     date:'2022-03-22T22:00:00.000Z',
  //     location: {
  //       "lat": 36.504191847389116,
  //       "lng": 36.249179950576305
  //     },
  //   },
  //   {
  //     id: 3,
  //     serviceName: 'Haircut & Deluxe Beard Trim',
  //     cost: 13.3,
  //     rate:3,
  //     description: 'Haircut & Deluxe Beard Trim',
  //     duration: 23,
  //     shopName:"barberShop",
  //     service_type: 'color',
  //     date:'2022-03-22T22:00:00.000Z',
  //     location: {
  //       "lat": 36.504191847389116,
  //       "lng": 36.249179950576305
  //     },
  //   },
  //   {
  //     id: 3,
  //     serviceName: 'Haircut & Deluxe Beard Trim',
  //     cost: 13.3,
  //     rate:3,
  //     description: 'Haircut & Deluxe Beard Trim',
  //     duration: 23,
  //     shopName:"barberShop",
  //     service_type: 'color',
  //     date:'2022-03-22T22:00:00.000Z',
  //     location: {
  //       "lat": 36.504191847389116,
  //       "lng": 36.249179950576305
  //     },
  //   },
  //   {
  //     id: 3,
  //     serviceName: 'Haircut & Deluxe Beard Trim',
  //     cost: 13.3,
  //     rate:3,
  //     description: 'Haircut & Deluxe Beard Trim',
  //     duration: 23,
  //     shopName:"barberShop",
  //     service_type: 'color',
  //     date:'2022-03-22T22:00:00.000Z',
  //     location: {
  //       "lat": 36.504191847389116,
  //       "lng": 36.249179950576305
  //     },
  //   },
  //   {
  //     id: 3,
  //     serviceName: 'Haircut & Deluxe Beard Trim',
  //     cost: 13.3,
  //     rate:3,
  //     description: 'Haircut & Deluxe Beard Trim',
  //     duration: 23,
  //     shopName:"barberShop",
  //     service_type: 'color',
  //     date:'2022-03-22T22:00:00.000Z',
  //     location: {
  //       "lat": 36.504191847389116,
  //       "lng": 36.249179950576305
  //     },
  //   },
  //   {
  //     id: 3,
  //     serviceName: 'Haircut & Deluxe Beard Trim',
  //     cost: 13.3,
  //     rate:3,
  //     description: 'Haircut & Deluxe Beard Trim',
  //     duration: 23,
  //     shopName:"barberShop",
  //     service_type: 'color',
  //     date:'2022-03-22T22:00:00.000Z',
  //     location: {
  //       "lat": 36.504191847389116,
  //       "lng": 36.249179950576305
  //     },
  //   },
  //   {
  //     id: 3,
  //     serviceName: 'Haircut & Deluxe Beard Trim',
  //     cost: 13.3,
  //     rate:3,
  //     description: 'Haircut & Deluxe Beard Trim',
  //     duration: 23,
  //     shopName:"barberShop",
  //     service_type: 'color',
  //     date:'2022-03-22T22:00:00.000Z',
  //     location: {
  //       "lat": 36.504191847389116,
  //       "lng": 36.249179950576305
  //     },
  //   },
  // ];

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
