import { Injectable, Injector } from '@angular/core';
import { BaseComponent } from '../shared/components/base.component';

@Injectable({
  providedIn: 'root'
})
export class ProxyService extends BaseComponent {
  constructor(injector: Injector) { super(injector) }
  url='http://barber-shop-hub.herokuapp.com';

  addService(input) {
    return this.HttpClient.post(this.url+"/services/add",input);
  }
  updateService(input) {
    return this.HttpClient.put(this.url+"/services/update",input);
  }
  bookService(input) {
    return this.HttpClient.post(this.url+"/Rsvp/book",input);
  }
  deleteService(service_id,shop_id) {
    return this.HttpClient.delete(this.url+`/services/delete/${service_id}/${shop_id}`);
  }


  addShop(input) {
    return this.HttpClient.post(this.url+"/shop/add",input);
  }
  getAllShop() {
    return this.HttpClient.post(this.url+"/shop/getAll",{});
  }
  getAllShopByFilter(input) {
    return this.HttpClient.post(this.url+"/services/services_filter",input);
  }
  getMyReservation(user_name) {
    return this.HttpClient.get(this.url+"/Rsvp/getMyRsvp/"+user_name);
  }
  getMyShop(user_name) {
    return this.HttpClient.get(this.url+"/shop/getShopByUser/"+user_name);
  }
  updateMyShop(user_name) {
    return this.HttpClient.put(this.url+"/shop/update",user_name);
  }
  
  login(input) {
    return this.HttpClient.post(this.url+"/login",input, {observe: 'response'});
  }
  userRegister(input) {
    return this.HttpClient.post(this.url+"/user_management/user_register",input);
  }
  registerShop(input) {
    return this.HttpClient.post(this.url+"/user_management/shop_register",input);
  }
}
