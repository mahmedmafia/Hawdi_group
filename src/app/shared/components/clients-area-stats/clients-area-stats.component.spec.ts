import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsAreaStatsComponent } from './clients-area-stats.component';

describe('ClientsAreaStatsComponent', () => {
  let component: ClientsAreaStatsComponent;
  let fixture: ComponentFixture<ClientsAreaStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsAreaStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsAreaStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
