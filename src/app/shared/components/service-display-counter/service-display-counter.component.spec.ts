import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDisplayCounterComponent } from './service-display-counter.component';

describe('ServiceDisplayCounterComponent', () => {
  let component: ServiceDisplayCounterComponent;
  let fixture: ComponentFixture<ServiceDisplayCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDisplayCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDisplayCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
