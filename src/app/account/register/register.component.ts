import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProxyService } from 'src/app/proxy/proxy.service';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseComponent implements OnInit {

  registerForm :FormGroup;
  loading= false
  constructor(
    injector :Injector,
    private _formBuilder: FormBuilder,
    private activatedRoute:ActivatedRoute,
    private proxyService:ProxyService

  ) { 
    super(injector);

  }

  get isShop(){
    return this.activatedRoute.snapshot.params.type == 'shop'
  }

  ngOnInit(): void {
    if (this.isShop) {
      this.registerForm = this._formBuilder.group({
        user_name: ['', [Validators.required]],
        password: ['', Validators.required],
        shop_name:['', Validators.required]
      });
    } else {
      this.registerForm = this._formBuilder.group({
        user_name: ['', [Validators.required]],
        password: ['', Validators.required]
      });
    }

  }

  submitform(form){
    this.loading = true
    if (this.isShop) {
      this.proxyService.registerShop(form).subscribe(res=>{
        this.utility.route.navigate(['/account/login']);
        this.loading = false
      },()=>{
        this.utility.notification.error('Shop Register','userName or shopName Already exists')
        this.loading = false
      })
    } else {
      this.proxyService.userRegister(form).subscribe(res=>{
        this.utility.route.navigate(['/account/login']);
        this.loading = false
      },()=>{
        this.utility.notification.error('User Register','userName Already exists')
        this.loading = false
      })
    }

  }

}