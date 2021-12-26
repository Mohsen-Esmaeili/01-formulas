import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NodeType } from './../../../../constants/node-type';

@Component({
  selector: 'app-add-node-position',
  templateUrl: './add-node-position.component.html',
  styleUrls: ['./add-node-position.component.scss']
})
export class AddNodePositionComponent implements OnInit
{
  isPower: boolean;

  isInLeftSide = new FormControl('', Validators.required);

  constructor(@Inject(MAT_DIALOG_DATA) public data: Record<string, unknown>, private dialogRef: MatDialogRef<AddNodePositionComponent>) { }

  ngOnInit(): void
  {
    this.isPower = this.data["nodeType"] == NodeType.Power;
  }

  onSelect()
  {
    if (this.isInLeftSide.invalid)
    {
      return;
    }

    this.dialogRef.close({ isSelected: true, isInLeftSide: this.isInLeftSide.value[0] });
  }

}
