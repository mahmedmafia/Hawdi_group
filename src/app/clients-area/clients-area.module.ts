import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsAreaComponent } from './clients-area.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { SharedModule } from '../shared/shared.module';
import { BookingComponent } from './booking/booking.component';
import { ClientServicesComponent } from './client-services/client-services.component';

const clientRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'profile',
  },
  {
    path: 'profile',
    component: ClientProfileComponent,
    loadChildren: () => import('./client-profile/client-profile.module').then(m => m.ClientProfileModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule)
  },
  {
    path: 'services',
    component: ClientServicesComponent,
    loadChildren: () => import('./client-services/client-services.module').then(m => m.ClientServicesModule)
  },
]

@NgModule({
  declarations: [
    ClientsAreaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(clientRoutes),
    SharedModule
  ]
})
export class ClientsAreaModule { }
