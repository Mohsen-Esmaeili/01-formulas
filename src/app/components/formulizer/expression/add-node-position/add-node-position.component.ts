import { Component, Inject, OnInit } from '@angular/core';
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
  constructor(@Inject(MAT_DIALOG_DATA) public data: Record<string, unknown>, private dialogRef: MatDialogRef<AddNodePositionComponent>) { }

  ngOnInit(): void
  {
    this.isPower = this.data["nodeType"] == NodeType.Power;
  }

  onSelect(isInLeftSide: boolean)
  {
    this.dialogRef.close({ isSelected: true, isInLeftSide: isInLeftSide });
  }

}
