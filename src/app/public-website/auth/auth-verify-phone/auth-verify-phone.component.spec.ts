import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthVerifyPhoneComponent } from './auth-verify-phone.component';

describe('AuthVerifyPhoneComponent', () => {
  let component: AuthVerifyPhoneComponent;
  let fixture: ComponentFixture<AuthVerifyPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthVerifyPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthVerifyPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
