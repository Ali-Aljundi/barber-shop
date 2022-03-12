import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './home-page/home-page.module';
import { MainComponent } from './shared/components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule),
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
      },
      {
        path: 'reservation',
        loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule),
      },
      {
        path: 'services',
        loadChildren: () => import('./services/services.module').then(m => m.ServicesModule),
      },
      {
        path: 'shops',
        loadChildren: () => import('./shops/shops.module').then(m => m.ShopsModule),
      },
    ]
  },
  {
      path: 'control-panel',
      loadChildren: () => import('./control-panel/control-panel.module').then(m => m.ControlPanelModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
