import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationAddBookingComponent } from './transportation-add-booking.component';

describe('TransportationAddBookingComponent', () => {
  let component: TransportationAddBookingComponent;
  let fixture: ComponentFixture<TransportationAddBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportationAddBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationAddBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
