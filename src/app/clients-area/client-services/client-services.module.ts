import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientServicesComponent } from './client-services.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmedServicesTableComponent } from './confirmed-services-table/confirmed-services-table.component';
import { RequestedServicesTableComponent } from './requested-services-table/requested-services-table.component';

@NgModule({
  declarations: [
    ClientServicesComponent,
    RequestedServicesTableComponent,
    ConfirmedServicesTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ClientServicesModule { }
