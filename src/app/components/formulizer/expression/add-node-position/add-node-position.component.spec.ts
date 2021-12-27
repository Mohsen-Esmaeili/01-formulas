import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddNodePositionComponent } from './add-node-position.component';

describe('AddNodePositionComponent', () =>
{
  let component: AddNodePositionComponent;
  let fixture: ComponentFixture<AddNodePositionComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [AddNodePositionComponent],
      providers: [
        { provide: MatDialogRef, useValue: { IsChanged: true } },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ]
    })
      .compileComponents();
  });

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(AddNodePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
