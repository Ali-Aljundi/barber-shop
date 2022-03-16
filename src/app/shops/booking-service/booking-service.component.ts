import { AfterViewInit, Component, Injector, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ProxyService } from 'src/app/proxy/proxy.service';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'app-booking-service',
  templateUrl: './booking-service.component.html',
  styleUrls: ['./booking-service.component.scss']
})
export class BookingServiceComponent extends BaseComponent implements OnInit, AfterViewInit {

  @Input() shop
  bookForm: FormGroup
  constructor(injector: Injector, private formBuilder: FormBuilder, private proxyService: ProxyService,private modal: NzModalRef,
    ) { super(injector); }
  selectedService
  selectedDate
  loading = false
  ngAfterViewInit(): void {
    this.resizeCards()
  }

  isSelectedService(service) {
    return this.selectedService?.id == service?.id
  }

  // get totalCost(){
  //   return this.selectedService.reduce((total, el)=>Number(total) + Number(el.cost),0).toFixed(2)
  // }

  // get totalDuration(){
  //     return this.selectedService.reduce((total, el)=>Number(total) + Number(el.duration),0).toFixed(2)
  // }


  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      shop_id: [this.shop.id, [Validators.required]],
      services_id: [null, [Validators.required]],
      user_name: [this.getUserName, [Validators.required]],
      rsvp_date: [null, [Validators.required]],
    });
  }

  gridStyle = {
    width: '33.3%',
    textAlign: 'center',
    padding: '5px'
  };

  services = [
    {
      id: 1,
      serviceName: "Hair",
      cost: 13.3,
      description: 'Haircut & Shave',
      duration: 12,
      service_type: 'hair'
    },
    {
      id: 2,
      serviceName: "Hair",
      cost: 13.3,
      description: 'Haircut, Shave, Facial & Face Massage',
      duration: 13,
      service_type: 'face'
    },
    {
      id: 3,
      serviceName: "Haircut & Deluxe Beard Trim",
      cost: 13.3,
      description: 'Haircut & Deluxe Beard Trim',
      duration: 23,
      service_type: 'color'
    },
    {
      id: 4,
      serviceName: "Hair",
      cost: 13.3,
      description: 'Big Day',
      duration: 12,
      service_type: 'packages'
    },
    {
      id: 5,
      serviceName: "Hair",
      cost: 13.3,
      description: 'Big Day',
      duration: 120,
      service_type: 'wax'
    },
    {
      id: 6,
      serviceName: "Hair",
      cost: 13.3,
      description: 'Big Day',
      duration: 12,
      service_type: 'packages'
    },
    {
      id: 7,
      serviceName: "Hair",
      cost: 13.3,
      description: 'Big Day',
      duration: 120,
      service_type: 'wax'
    },
    {
      id: 8,
      serviceName: "Hair",
      cost: 13.3,
      description: 'Big Day',
      duration: 12,
      service_type: 'packages'
    },
    {
      id: 9,
      serviceName: "Hair",
      cost: 13.3,
      description: 'Big Day',
      duration: 120,
      service_type: 'wax'
    }
  ]

  resizeCards() {
    let cards: any = document.querySelectorAll("#settingCard")
    let cardsHeight = [...cards].map(res => res?.getBoundingClientRect()?.height);
    for (let index = 0; index < cardsHeight.length; index++) {
      let el = document.querySelectorAll("#settingCard")[index] as HTMLElement
      el.style.height = `${Math.max(...cardsHeight)}px`
    }
  }
  onDateChange(event) {
    this.bookForm.get('rsvp_date').setValue(event.toISOString())
  }

  bookService(input) {
    this.loading = true
    this.proxyService.bookService(input).subscribe(el => {
      this.loading = false
      this.modal.close()
    }, () => {
      this.loading = false
    })
  }
  selectService(service) {
    this.selectedService = service
    this.bookForm.get('services_id').setValue(service.id)
    // if (this.isSelectedService(service)) {
    //   this.selectedService = this.selectedService.filter(el=>el.id != service.id)
    // } else {
    //   this.selectedService.push(service)
    // }
  }
}
