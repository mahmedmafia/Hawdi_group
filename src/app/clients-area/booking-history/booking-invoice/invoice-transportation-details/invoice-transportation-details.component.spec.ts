import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTransportationDetailsComponent } from './invoice-transportation-details.component';

describe('InvoiceTransportationDetailsComponent', () => {
  let component: InvoiceTransportationDetailsComponent;
  let fixture: ComponentFixture<InvoiceTransportationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceTransportationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceTransportationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
