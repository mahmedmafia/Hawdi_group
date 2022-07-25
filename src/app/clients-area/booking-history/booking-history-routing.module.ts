import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingHistoryDetailsComponent } from './booking-history-details/booking-history-details.component';
import { BookingHistoryComponent } from './booking-history.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BookingHistoryComponent },
  {
    path: 'details/:id',
    component: BookingHistoryDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingHistoryRoutingModule { }
