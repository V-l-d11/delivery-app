import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiTypesCustomersComponent } from './api-types-customers.component';

describe('ApiTypesCustomersComponent', () => {
  let component: ApiTypesCustomersComponent;
  let fixture: ComponentFixture<ApiTypesCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiTypesCustomersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiTypesCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
