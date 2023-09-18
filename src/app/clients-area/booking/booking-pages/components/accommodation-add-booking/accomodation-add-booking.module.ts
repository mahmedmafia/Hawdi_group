import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationAddBookingComponent } from './accommodation-add-booking.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AccommodationAddBookingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class AccomodationAddBookingModule { }
