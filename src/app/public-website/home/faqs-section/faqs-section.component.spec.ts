import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQsSectionComponent } from './faqs-section.component';

describe('FAQsSectionComponent', () => {
  let component: FAQsSectionComponent;
  let fixture: ComponentFixture<FAQsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAQsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
