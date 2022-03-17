import { Component, Injector, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ProxyService } from 'src/app/proxy/proxy.service';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent extends BaseComponent implements OnInit {

  @Input() editService;
  @Input() shopId;

  filterForm: FormGroup;
  initLoading = false;

  constructor(
    injector: Injector,
    private fb: FormBuilder,
    private modal: NzModalRef,
    private proxyService: ProxyService
  ) {
    super(injector);
  }

  ngOnInit(): void {

    const filterModal = {
      id: 0,
      service_name: null,
      service_type: null,
      cost: null,
      description: null,
      service_duration: null,
      shop_id: this.shopId
    };

    let filterObj = {};
    Object.keys(filterModal).forEach(key => {
      filterObj[key] = [filterModal[key]];
    });

    this.filterForm = this.fb.group(filterObj);

    if (this.editService) {
      this.filterForm.patchValue(this.editService);
    }
  }

  handleCancel(): void {
    this.modal.close();
  }
  submitForm(ev) {
    if (this.editService) {
      let editData = {
        id: ev.id,
        service_name: ev.service_name,
        cost: ev.cost,
        duration: ev.service_duration,
        service_type: ev.service_type
      }
      this.proxyService.updateService(editData).subscribe(el => {
        this.modal.close();
      })
    } else {
      this.proxyService.addService(ev).subscribe(el => {
        this.modal.close();
      })
    }
  }
}
