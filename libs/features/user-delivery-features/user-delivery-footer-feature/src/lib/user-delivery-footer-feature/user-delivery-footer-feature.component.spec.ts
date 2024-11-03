import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDeliveryFooterFeatureComponent } from './user-delivery-footer-feature.component';

describe('UserDeliveryFooterFeatureComponent', () => {
  let component: UserDeliveryFooterFeatureComponent;
  let fixture: ComponentFixture<UserDeliveryFooterFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDeliveryFooterFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDeliveryFooterFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
