import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationServiceComponent } from './transportation-service.component';

describe('TransportationServiceComponent', () => {
  let component: TransportationServiceComponent;
  let fixture: ComponentFixture<TransportationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportationServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
