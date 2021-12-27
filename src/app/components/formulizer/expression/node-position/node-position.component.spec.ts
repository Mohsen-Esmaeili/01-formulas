import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NodePositionComponent } from './node-position.component';

describe('NodePositionComponent', () =>
{
  let component: NodePositionComponent;
  let fixture: ComponentFixture<NodePositionComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [NodePositionComponent],
      providers: [
        { provide: MatDialogRef, useValue: { IsChanged: true } },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ]
    })
      .compileComponents();
  });

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(NodePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
