import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationServiceDetailsItemComponent } from './transportation-service-details-item.component';

describe('TransportationServiceDetailsItemComponent', () => {
  let component: TransportationServiceDetailsItemComponent;
  let fixture: ComponentFixture<TransportationServiceDetailsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportationServiceDetailsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationServiceDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
