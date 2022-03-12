import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My first AGM project';
  center: google.maps.LatLngLiteral = { lat: 33.50467494035581, lng: 36.25054251275587 };
  zoom = 14;
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  vertices: google.maps.LatLngLiteral[] = [
    { lat: 13, lng: 13 },
    { lat: -13, lng: 0 },
    { lat: 13, lng: -13 }, 
  ];
selectedShop
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
  openInfoWindow(marker,node) {
    this.selectedShop = node
    this.infoWindow.open(marker);
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

