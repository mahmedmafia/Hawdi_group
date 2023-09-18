import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestedServicesTableComponent } from './requested-services-table.component';


describe('RequestedServicesTableComponent', () => {
  let component: RequestedServicesTableComponent;
  let fixture: ComponentFixture<RequestedServicesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedServicesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedServicesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
