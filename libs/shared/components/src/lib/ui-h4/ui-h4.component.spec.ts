import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiH4Component } from './ui-h4.component';

describe('UiH4Component', () => {
  let component: UiH4Component;
  let fixture: ComponentFixture<UiH4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiH4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(UiH4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
