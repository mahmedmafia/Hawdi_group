import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { RouterModule, Routes } from '@angular/router';
import { BookingHistoryComponent } from '../booking-history/booking-history.component';
import { BookingHistoryDetailsComponent } from '../booking-history/booking-history-details/booking-history-details.component';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
    pathMatch: 'full',
  },
  {
    path: 'history',
    loadChildren: () =>
      import('../booking-history/booking-history.module').then(
        (m) => m.BookingHistoryModule
      ),
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./booking-pages/booking-pages.module').then(
        (m) => m.BookingPagesModule
      ),
  },


];

@NgModule({
  declarations: [BookingComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BookingModule { }
