import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNgZorroAntdModule } from '../app-ng-zorro-antd.module';
import { IconsProviderModule } from '../icons-provider.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmptyToNullDirective } from './services/empty-to-null.directive';



@NgModule({
  declarations: [
    EmptyToNullDirective
  ],
  imports: [
    AppNgZorroAntdModule,
    IconsProviderModule,
    CommonModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  exports: [
    AppNgZorroAntdModule,
    IconsProviderModule,
    FormsModule,
    GoogleMapsModule,
    EmptyToNullDirective,
    ReactiveFormsModule]
})
export class SharedModule { }
