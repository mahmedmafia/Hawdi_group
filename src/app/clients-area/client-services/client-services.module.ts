import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientServicesComponent } from './client-services.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmedServicesTableComponent } from './confirmed-services-table/confirmed-services-table.component';
import { RequestedServicesTableComponent } from './requested-services-table/requested-services-table.component';
import { ClientServiceDetailsComponent } from './client-service-details/client-service-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientServiceEditComponent } from './client-service-edit/client-service-edit.component';
import { ServiceDetailsCostComponent } from './client-service-details/service-details-cost/service-details-cost.component';
import { GrandTotalDisplayComponent } from './client-service-details/grand-total-display/grand-total-display.component';
import { ServiceDetailsHeaderComponent } from './client-service-details/service-details-header/service-details-header.component';
import { TransportationServiceDetailsItemComponent } from './client-service-details/transportation-service-details-item/transportation-service-details-item.component';
import { ClientServicesRoutingModule } from './client-services-routing.module';
import { ClientServiceStatusComponent } from './client-service-status/client-service-status.component';

@NgModule({
  declarations: [
    ClientServicesComponent,
    RequestedServicesTableComponent,
    ConfirmedServicesTableComponent,
    ClientServiceDetailsComponent,
    ClientServiceEditComponent,
    ServiceDetailsCostComponent,
    GrandTotalDisplayComponent,
    ServiceDetailsHeaderComponent,
    TransportationServiceDetailsItemComponent,
    ClientServiceStatusComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
   ClientServicesRoutingModule
  ],
  exports:[
    ClientServiceDetailsComponent,
    TransportationServiceDetailsItemComponent

  ]
})
export class ClientServicesModule { }
