import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceItemCostComponent } from './service-item-cost.component';

describe('ServiceItemCostComponent', () => {
  let component: ServiceItemCostComponent;
  let fixture: ComponentFixture<ServiceItemCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceItemCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceItemCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
