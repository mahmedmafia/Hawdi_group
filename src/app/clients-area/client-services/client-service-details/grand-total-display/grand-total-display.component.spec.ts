import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandTotalDisplayComponent } from './grand-total-display.component';

describe('GrandTotalDisplayComponent', () => {
  let component: GrandTotalDisplayComponent;
  let fixture: ComponentFixture<GrandTotalDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandTotalDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandTotalDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
