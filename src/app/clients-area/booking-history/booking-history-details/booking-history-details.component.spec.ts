import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingHistoryDetailsComponent } from './booking-history-details.component';

describe('BookingHistoryDetailsComponent', () => {
  let component: BookingHistoryDetailsComponent;
  let fixture: ComponentFixture<BookingHistoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingHistoryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingHistoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
