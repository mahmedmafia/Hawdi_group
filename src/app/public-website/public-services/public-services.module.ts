import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PublicServicesComponent } from './public-services.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutSerivceComponent } from './about-serivce/about-serivce.component';
import { TransportationServiceComponent } from './transportation-service/transportation-service.component';
import { BookingStepsComponent } from './booking-steps/booking-steps.component';
import { ServiceActionSectionComponent } from './service-action-section/service-action-section.component';
import { HomeModule } from '../home/home.module';


const publicServicesRoute: Route[] = [

  {
    path: 'transportation',
    component:TransportationServiceComponent,
  },

]
@NgModule({
  declarations: [
    PublicServicesComponent,
    AboutSerivceComponent,
    TransportationServiceComponent,
    BookingStepsComponent,
    ServiceActionSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(publicServicesRoute),
    SharedModule,
    HomeModule
  ]
})
export class PublicServicesModule { }
