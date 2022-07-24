import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientServicesComponent } from './client-services.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmedServicesTableComponent } from './confirmed-services-table/confirmed-services-table.component';
import { RequestedServicesTableComponent } from './requested-services-table/requested-services-table.component';
import { ClientServiceDetailsComponent } from './client-service-details/client-service-details.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: ClientServicesComponent,
    pathMatch:'full',
  },
  {
    path: ':id',
    component: ClientServiceDetailsComponent,
  }
]
@NgModule({
  declarations: [
    ClientServicesComponent,
    RequestedServicesTableComponent,
    ConfirmedServicesTableComponent,
    ClientServiceDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientServicesModule { }
