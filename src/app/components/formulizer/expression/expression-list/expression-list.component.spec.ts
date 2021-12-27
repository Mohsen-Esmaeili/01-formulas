import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { ExpressionService } from './../../../../services/expression.service';
import { ExpressionListComponent } from './expression-list.component';


describe('ExpressionListComponent', () =>
{
  let component: ExpressionListComponent;
  let fixture: ComponentFixture<ExpressionListComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [ExpressionListComponent],
      imports: [MatDialogModule, MatMenuModule],
      providers: [ExpressionService]
    })
      .compileComponents();
  });

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(ExpressionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
