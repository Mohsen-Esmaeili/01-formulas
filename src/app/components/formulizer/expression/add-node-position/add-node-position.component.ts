import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NodeType } from './../../../../constants/node-type';

@Component({
  selector: 'app-add-node-position',
  templateUrl: './add-node-position.component.html',
  styleUrls: ['./add-node-position.component.scss']
})
export class AddNodePositionComponent
{
  constructor(@Inject(MAT_DIALOG_DATA) public nodeType: NodeType, private dialogRef: MatDialogRef<AddNodePositionComponent>) { }

  onSelect(firstSelected: boolean)
  {
    this.dialogRef.close({ isSelected: true, firstSelected: firstSelected });
  }

  get isPower(): boolean
  {
    return this.nodeType === NodeType.Power;
  }
}
