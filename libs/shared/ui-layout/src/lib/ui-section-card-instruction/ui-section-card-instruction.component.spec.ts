import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiSectionCardInstructionComponent } from './ui-section-card-instruction.component';

describe('UiSectionCardInstructionComponent', () => {
  let component: UiSectionCardInstructionComponent;
  let fixture: ComponentFixture<UiSectionCardInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSectionCardInstructionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiSectionCardInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
