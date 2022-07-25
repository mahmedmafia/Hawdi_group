import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationAddBookingComponent } from './accommodation-add-booking.component';

describe('AccommodationAddBookingComponent', () => {
  let component: AccommodationAddBookingComponent;
  let fixture: ComponentFixture<AccommodationAddBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccommodationAddBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationAddBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
