import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss'],
})
export class BookingHistoryComponent implements OnInit {
  constructor(private router:Router,private activatedRoute:ActivatedRoute){}
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

  ngOnInit(): void {}
  onViewService(rowId: number) {
    this.router.navigate(['details/'+rowId],{relativeTo:this.activatedRoute});
  }
  onClickInvoice(invoiceNumber:number){
    this.router.navigate(['invoice/'+invoiceNumber],{relativeTo:this.activatedRoute});

  }
}
