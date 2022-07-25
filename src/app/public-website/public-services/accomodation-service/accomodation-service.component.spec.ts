import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationServiceComponent } from './accomodation-service.component';

describe('AccomodationServiceComponent', () => {
  let component: AccomodationServiceComponent;
  let fixture: ComponentFixture<AccomodationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomodationServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
