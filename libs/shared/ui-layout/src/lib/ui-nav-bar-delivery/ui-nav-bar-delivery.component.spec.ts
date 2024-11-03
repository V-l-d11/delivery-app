import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBarDeliveryComponent } from './ui-nav-bar-delivery.component';

describe('NavBarDeliveryComponent', () => {
  let component: NavBarDeliveryComponent;
  let fixture: ComponentFixture<NavBarDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarDeliveryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
