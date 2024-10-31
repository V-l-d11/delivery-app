import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiTypesAdminsComponent } from './api-types-admins.component';

describe('ApiTypesAdminsComponent', () => {
  let component: ApiTypesAdminsComponent;
  let fixture: ComponentFixture<ApiTypesAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiTypesAdminsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiTypesAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
