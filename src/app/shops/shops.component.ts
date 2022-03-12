import { Component, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MapInfoWindow } from '@angular/google-maps';
import { NzMarks } from 'ng-zorro-antd/slider';
import { BaseComponent } from '../shared/components/base.component';
import { BookingServiceComponent } from './booking-service/booking-service.component';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent extends BaseComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;

  constructor(injector: Injector,    private viewContainerRef: ViewContainerRef,
    ){
    super(injector);

  }
  ngOnInit(): void {
   }

  center: google.maps.LatLngLiteral = { lat: 33.50467494035581, lng: 36.25054251275587 };
  zoom = 14;
  vertices: google.maps.LatLngLiteral[] = [
    { lat: 13, lng: 13 },
    { lat: -13, lng: 0 },
    { lat: 13, lng: -13 },
  ];
  selectedShop
  price = 0
  marks: NzMarks = {
    1: {
      style: {
        color: '#00FF00 '
      },
      label: '<strong>1$</strong>'
    },
    1000: {
      style: {
        color: '#f50'
      },
      label: '<strong>1000$</strong>'
    }
  };
  
  markerOptions: google.maps.MarkerOptions = { draggable: false, animation: google.maps.Animation.BOUNCE, icon: 'https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/32/000000/external-barber-public-service-photo3ideastudio-flat-photo3ideastudio.png' };
  markerPositions: google.maps.LatLngLiteral[] | any = [
    {
      postion: {
        "lat": 33.50467494035581,
        "lng": 36.25054251275587,
      },
      title: '1'
    },
    {
      postion: {
        "lat": 33.50553376563862,
        "lng": 36.24955545983839
      },
      title: '2'
    },
    {
      postion: {
        "lat": 33.50609736509894,
        "lng": 36.25087510667372
      },
      title: '3'
    },
    {
      postion: {
        "lat": 33.505918445032975,
        "lng": 36.24754916749525
      },
      title: '4'
    },
    {
      postion: {
        "lat": 33.502849908333644,
        "lng": 36.247667184691906
      },
      title: '5'
    },
    {
      postion: {
        "lat": 33.504191847389116,
        "lng": 36.249179950576305
      },
      title: '6'
    }
  ];
  openInfoWindow(node) {
    this.selectedShop = node
    this.utility.modal.create({
      nzContent: BookingServiceComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzWidth: '50%',
    })
  }
  addMarker(event: google.maps.MapMouseEvent) {
    // this.markerPositions.push(event.latLng.toJSON());
    console.log(event.latLng.toJSON())
    // this.markerPositions = [    {
    //   postion: {
    //     "lat": 33.502849908333644,
    //     "lng": 36.247667184691906
    //   },
    //   title: '5'
    // },
    // {
    //   postion: {
    //     "lat": 33.504191847389116,
    //     "lng": 36.249179950576305
    //   },
    //   title: '6'
    // }]
  }
}
