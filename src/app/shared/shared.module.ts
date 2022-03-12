import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNgZorroAntdModule } from '../app-ng-zorro-antd.module';
import { IconsProviderModule } from '../icons-provider.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  ],
  imports: [
    AppNgZorroAntdModule,
    IconsProviderModule,
    CommonModule,
    GoogleMapsModule,
    FormsModule 
  ],
  exports: [
    AppNgZorroAntdModule,
    IconsProviderModule,
    FormsModule,
    GoogleMapsModule]
})
export class SharedModule { }
