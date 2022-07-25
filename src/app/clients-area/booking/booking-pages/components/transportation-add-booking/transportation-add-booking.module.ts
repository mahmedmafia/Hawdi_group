import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportationAddBookingComponent } from './transportation-add-booking.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TransportationAddBookingComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TransportationAddBookingModule { }
