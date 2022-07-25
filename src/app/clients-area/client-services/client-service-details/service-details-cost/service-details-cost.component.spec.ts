import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsCostComponent } from './service-details-cost.component';

describe('ServiceDetailsCostComponent', () => {
  let component: ServiceDetailsCostComponent;
  let fixture: ComponentFixture<ServiceDetailsCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDetailsCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDetailsCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
