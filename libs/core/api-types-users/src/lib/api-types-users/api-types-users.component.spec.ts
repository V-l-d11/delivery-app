import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiTypesUsersComponent } from './api-types-users.component';

describe('ApiTypesUsersComponent', () => {
  let component: ApiTypesUsersComponent;
  let fixture: ComponentFixture<ApiTypesUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiTypesUsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiTypesUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
