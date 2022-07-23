import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss'],
})
export class BookingHistoryComponent implements OnInit {
  displayedColumns = [
    'No',
    'Service Type',
    'City',
    'Request Date',
    'Invoice',
    'Payment Metohd',
    'Stauts',
    'Details',
  ];
  dataSource = [
    {
      id: 1,
      serviceType: 'Transportation',
      city: 'Riyadh',
      RequestDate: new Date(2005, 10, 12),
      invoice: 74721,
      PaymentMethod: 'Card',
      Status: 'Closed',
    },
    {
      id: 1,
      serviceType: 'Transportation',
      city: 'Riyadh',
      RequestDate: new Date(2005, 10, 12),
      invoice: 74721,
      PaymentMethod: 'Card',
      Status: 'Closed',
    },
    {
      id: 1,
      serviceType: 'Transportation',
      city: 'Riyadh',
      RequestDate: new Date(2005, 10, 12),
      invoice: 74721,
      PaymentMethod: 'Card',
      Status: 'Closed',
    },
    {
      id: 1,
      serviceType: 'Transportation',
      city: 'Riyadh',
      RequestDate: new Date(2005, 10, 12),
      invoice: 74721,
      PaymentMethod: 'Card',
      Status: 'Closed',
    },
    {
      id: 1,
      serviceType: 'Transportation',
      city: 'Riyadh',
      RequestDate: new Date(2005, 10, 12),
      invoice: 74721,
      PaymentMethod: 'Card',
      Status: 'Closed',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  onViewService(rowId: number) {}
  onClickInvoice(invoiceNumber:number){

  }
}
