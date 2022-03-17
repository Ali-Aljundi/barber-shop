import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProxyService } from 'src/app/proxy/proxy.service';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  loginForm :FormGroup;
  loading = false
  constructor(
    injector :Injector,
    private _formBuilder: FormBuilder,
    private proxyService:ProxyService
  ) { 
    super(injector);
    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    localStorage.removeItem('token')
  }

  submitform(form){
    this.loading = true
    this.proxyService.login(form).subscribe(res=>{
      this.AuthService.setToken(res.headers.get('Authorization'))
      this.AuthService.setUserName(form.username)
      if (this.isOwner) {
        this.utility.route.navigate(['/my-shop']);
      } else {
        this.utility.route.navigate(['/']);
      }
      this.loading = false
    },err=>{
      this.utility.notification.error('Login','userName or Password error')
      this.loading = false
    })
  }

}
