import { Component, Injector, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent  extends BaseComponent implements OnInit {

  @Input() editService;
  filterForm: FormGroup;
  initLoading = false;
  serviceTypeList = [
    {  name: 'Hair'},
    {  name: 'Haircut & Shave'},
    {  name: 'Cream & Shampoo'},
  ];
  
  constructor(
    injector: Injector,
    private fb: FormBuilder,
    private modal: NzModalRef,
  ) {
    super(injector);
   }

  ngOnInit(): void {

    const filterModal = {
      id: 0,
      serviceName: null,
      service_type: null,
      cost: null,
      description: null,
      duration: null
    };

    let filterObj = {};
    Object.keys(filterModal).forEach(key => {
      filterObj[key] = [filterModal[key]];
    });

    this.filterForm = this.fb.group(filterObj);

    if(this.editService){
      this.filterForm.patchValue(this.editService);
    }
  }

  handleCancel(): void {
    this.modal.close();
  }

}
