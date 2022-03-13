import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  loginForm :FormGroup;

  constructor(
    injector :Injector,
    private _formBuilder: FormBuilder,

  ) { 
    super(injector);
    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submitform(form){
    this.utility.route.navigate(['/']);

  }

}
