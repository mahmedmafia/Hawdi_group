import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServiceEditComponent } from './client-service-edit.component';

describe('ClientServiceEditComponent', () => {
  let component: ClientServiceEditComponent;
  let fixture: ComponentFixture<ClientServiceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientServiceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientServiceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
