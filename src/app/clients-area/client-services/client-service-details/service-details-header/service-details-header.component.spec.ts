import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsHeaderComponent } from './service-details-header.component';

describe('ServiceDetailsHeaderComponent', () => {
  let component: ServiceDetailsHeaderComponent;
  let fixture: ComponentFixture<ServiceDetailsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDetailsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
