import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from './booking-history.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientServicesModule } from '../client-services/client-services.module';
import { BookingHistoryRoutingModule } from './booking-history-routing.module';
import { BookingHistoryDetailsComponent } from './booking-history-details/booking-history-details.component';
import { InvoiceFooterComponent } from './booking-invoice/invoice-footer/invoice-footer.component';
import { BookingInvoiceComponent } from './booking-invoice/booking-invoice.component';
import { InvoiceInfoComponent } from './booking-invoice/invoice-info/invoice-info.component';
import { InvoiceItemsTableComponent } from './booking-invoice/invoice-items-table/invoice-items-table.component';
import { InvoiceTransportationDetailsComponent } from './booking-invoice/invoice-transportation-details/invoice-transportation-details.component';
import { InvoiceTermsConditionsComponent } from './booking-invoice/invoice-terms-conditions/invoice-terms-conditions.component';
import { BookingInvoiceDetailsComponent } from './booking-invoice-details/booking-invoice-details.component';



@NgModule({
  declarations: [
    BookingHistoryComponent,
    BookingHistoryDetailsComponent,
    BookingInvoiceDetailsComponent,
    InvoiceInfoComponent,
    InvoiceItemsTableComponent,
    InvoiceTransportationDetailsComponent,
    InvoiceTermsConditionsComponent,
    InvoiceFooterComponent,
    BookingInvoiceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookingHistoryRoutingModule,
    ClientServicesModule,

  ]
})
export class BookingHistoryModule { }
