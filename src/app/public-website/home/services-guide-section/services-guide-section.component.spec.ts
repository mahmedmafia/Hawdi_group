import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesGuideSectionComponent } from './services-guide-section.component';

describe('ServicesGuideSectionComponent', () => {
  let component: ServicesGuideSectionComponent;
  let fixture: ComponentFixture<ServicesGuideSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesGuideSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesGuideSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
