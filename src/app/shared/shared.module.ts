import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNgZorroAntdModule } from '../app-ng-zorro-antd.module';
import { IconsProviderModule } from '../icons-provider.module';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
  ],
  imports: [
    AppNgZorroAntdModule,
    IconsProviderModule,
    CommonModule,
    GoogleMapsModule
  ],
  exports: [
    AppNgZorroAntdModule,
    IconsProviderModule,
    GoogleMapsModule]
})
export class SharedModule { }
