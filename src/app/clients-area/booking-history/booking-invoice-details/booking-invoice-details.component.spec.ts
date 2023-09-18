import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingInvoiceDetailsComponent } from './booking-invoice-details.component';

describe('BookingInvoiceDetailsComponent', () => {
  let component: BookingInvoiceDetailsComponent;
  let fixture: ComponentFixture<BookingInvoiceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingInvoiceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingInvoiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
