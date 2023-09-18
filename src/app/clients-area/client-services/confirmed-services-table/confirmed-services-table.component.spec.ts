import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedServicesTableComponent } from './confirmed-services-table.component';

describe('ConfirmedServicesTableComponent', () => {
  let component: ConfirmedServicesTableComponent;
  let fixture: ComponentFixture<ConfirmedServicesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedServicesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedServicesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
