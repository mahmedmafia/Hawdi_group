import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from './booking-history.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BookingHistoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BookingHistoryModule { }
