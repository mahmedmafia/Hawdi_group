import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceActionSectionComponent } from './service-action-section.component';

describe('ServiceActionSectionComponent', () => {
  let component: ServiceActionSectionComponent;
  let fixture: ComponentFixture<ServiceActionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceActionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceActionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
