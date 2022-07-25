import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from './booking-history.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookingHistoryDetailsComponent } from './booking-history-details/booking-history-details.component';
import { ClientServicesModule } from '../client-services/client-services.module';
import { RouterModule, Routes } from '@angular/router';
import { BookingHistoryRoutingModule } from './booking-history-routing.module';

@NgModule({
  declarations: [BookingHistoryComponent, BookingHistoryDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    BookingHistoryRoutingModule,
    ClientServicesModule

  ],
})
export class BookingHistoryModule {}
