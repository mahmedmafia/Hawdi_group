import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTermsConditionsComponent } from './invoice-terms-conditions.component';

describe('InvoiceTermsConditionsComponent', () => {
  let component: InvoiceTermsConditionsComponent;
  let fixture: ComponentFixture<InvoiceTermsConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceTermsConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceTermsConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
