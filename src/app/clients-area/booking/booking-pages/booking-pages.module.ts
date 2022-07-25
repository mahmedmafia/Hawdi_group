import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TransportationAddBookingComponent } from './components/transportation-add-booking/transportation-add-booking.component';
import { TransportationAddBookingModule } from './components/transportation-add-booking/transportation-add-booking.module';
import { AccommodationAddBookingComponent } from './components/accommodation-add-booking/accommodation-add-booking.component';

const booknigPageRoutes: Routes = [
  {
    path: 'transportation',
    component:TransportationAddBookingComponent,
    loadChildren: () =>
      import(
        './components/transportation-add-booking/transportation-add-booking.module'
      ).then((m) => TransportationAddBookingModule),
  },
  {
    path: 'accommodation',
    component:AccommodationAddBookingComponent,
    loadChildren: () =>
      import(
        './components/accommodation-add-booking/accomodation-add-booking.module'
      ).then((m) => m.AccomodationAddBookingModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(booknigPageRoutes)],
})
export class BookingPagesModule {}
