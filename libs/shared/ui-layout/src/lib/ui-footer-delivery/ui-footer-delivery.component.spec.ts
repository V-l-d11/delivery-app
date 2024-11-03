import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiFooterDeliveryComponent } from './ui-footer-delivery.component';

describe('UiFooterDeliveryComponent', () => {
  let component: UiFooterDeliveryComponent;
  let fixture: ComponentFixture<UiFooterDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiFooterDeliveryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiFooterDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
