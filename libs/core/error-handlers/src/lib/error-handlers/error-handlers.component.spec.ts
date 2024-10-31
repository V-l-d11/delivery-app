import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorHandlersComponent } from './error-handlers.component';

describe('ErrorHandlersComponent', () => {
  let component: ErrorHandlersComponent;
  let fixture: ComponentFixture<ErrorHandlersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorHandlersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorHandlersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
