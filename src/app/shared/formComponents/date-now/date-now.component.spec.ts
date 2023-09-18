import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateNowComponent } from './date-now.component';

describe('DateNowComponent', () => {
  let component: DateNowComponent;
  let fixture: ComponentFixture<DateNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
