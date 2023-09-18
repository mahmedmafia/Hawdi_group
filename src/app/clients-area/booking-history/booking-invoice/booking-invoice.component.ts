import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-invoice',
  templateUrl: './booking-invoice.component.html',
  styleUrls: ['./booking-invoice.component.scss']
})
export class BookingInvoiceComponent implements OnInit {
  isInvoiceSent:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  sendInvoice(){
    this.isInvoiceSent=true;
  }
  print(){

  }
}
