import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { NodeManagerService } from './../../../../services/node-manager.service';
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
      providers: [NodeManagerService]
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
