import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ExpressionHostDirective } from './../../../directives/expression-host.directive';
import { ExpressionComponent } from './expression.component';


describe('ExpressionComponent', () =>
{
  let component: ExpressionComponent;
  let fixture: ComponentFixture<ExpressionComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [ExpressionComponent, ExpressionHostDirective],
      imports: [MatIconModule, MatFormFieldModule]
    })
      .compileComponents();
  });

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(ExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () =>
  // {
  //   component.node = new Addition(new Value(5), new Value(7));
  //   fixture.detectChanges();
  //   expect(component).toBeTruthy();
  // });
});
