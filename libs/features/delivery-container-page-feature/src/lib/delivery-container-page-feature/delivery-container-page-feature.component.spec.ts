import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryContainerPageFeatureComponent } from './delivery-container-page-feature.component';

describe('DeliveryContainerPageFeatureComponent', () => {
  let component: DeliveryContainerPageFeatureComponent;
  let fixture: ComponentFixture<DeliveryContainerPageFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryContainerPageFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryContainerPageFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
