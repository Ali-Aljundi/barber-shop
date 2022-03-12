import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNgZorroAntdModule } from '../app-ng-zorro-antd.module';
import { IconsProviderModule } from '../icons-provider.module';



@NgModule({
  declarations: [
  ],
  imports: [
    AppNgZorroAntdModule,
    IconsProviderModule,
    CommonModule
  ],
  exports: [
    AppNgZorroAntdModule,
    IconsProviderModule,]
})
export class SharedModule { }
