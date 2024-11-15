import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiFoodCardRestaurantHomeComponent } from './ui-food-card-restaurant-home.component';

describe('UiFoodCardRestaurantHomeComponent', () => {
  let component: UiFoodCardRestaurantHomeComponent;
  let fixture: ComponentFixture<UiFoodCardRestaurantHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiFoodCardRestaurantHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiFoodCardRestaurantHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
