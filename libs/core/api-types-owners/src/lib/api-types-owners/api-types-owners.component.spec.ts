import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiTypesOwnersComponent } from './api-types-owners.component';

describe('ApiTypesOwnersComponent', () => {
  let component: ApiTypesOwnersComponent;
  let fixture: ComponentFixture<ApiTypesOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiTypesOwnersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiTypesOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
