import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSerivceComponent } from './about-serivce.component';

describe('AboutSerivceComponent', () => {
  let component: AboutSerivceComponent;
  let fixture: ComponentFixture<AboutSerivceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSerivceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSerivceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
