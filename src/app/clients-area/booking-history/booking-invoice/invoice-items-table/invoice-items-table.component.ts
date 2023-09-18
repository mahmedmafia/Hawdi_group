import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-items-table',
  templateUrl: './invoice-items-table.component.html',
  styleUrls: ['./invoice-items-table.component.scss']
})
export class InvoiceItemsTableComponent implements OnInit {
  displayedColumns = [
    'No',
    'Item',
    'Description',
    'Qty',
    'U.Price',
    'U.Discount%',
    'Total',
    'Discount Value',
  ];
  constructor() { }

  ngOnInit(): void {
  }
  dataSource = [
    {
      id: 1,
      Item: 'Transportation',
      Description: 'Riyadh',
      Qty: 1,
      'U.Price': 74721,
      'U.Discount%':'20%',
      Total: 5000,
      discount:0
    },
    {
      id: 1,
      Item: 'Transportation',
      Description: 'Riyadh',
      Qty: 1,
      'U.Price': 74721,
      'U.Discount%':'20%',
      Total: 5000,
      discount:0
    },
  ]
}
