import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationVehicleFormComponent } from './transportation-vehicle-form.component';

describe('TransportationVehicleFormComponent', () => {
  let component: TransportationVehicleFormComponent;
  let fixture: ComponentFixture<TransportationVehicleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportationVehicleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationVehicleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
