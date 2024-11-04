import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDeliveryHomePageComponent } from './user-delivery-home-page.component';

describe('UserDeliveryHomePageComponent', () => {
  let component: UserDeliveryHomePageComponent;
  let fixture: ComponentFixture<UserDeliveryHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDeliveryHomePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDeliveryHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
