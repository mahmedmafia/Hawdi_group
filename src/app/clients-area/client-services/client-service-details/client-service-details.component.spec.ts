import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServiceDetailsComponent } from './client-service-details.component';

describe('ClientServiceDetailsComponent', () => {
  let component: ClientServiceDetailsComponent;
  let fixture: ComponentFixture<ClientServiceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientServiceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientServiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
