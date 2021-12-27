import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { ExpressionService } from './../../../../../services/expression.service';
import { MultiplicationComponent } from './multiplication.component';


describe('MultiplicationComponent', () =>
{
  let component: MultiplicationComponent;
  let fixture: ComponentFixture<MultiplicationComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [MultiplicationComponent],
      imports: [MatDialogModule],
      providers: [ExpressionService]
    })
      .compileComponents();
  });

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(MultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () =>
  // {
  //   component.parentNode = undefined;
  //   component.node = new Value(5);
  //   expect(component).toBeTruthy();
  // });
});
