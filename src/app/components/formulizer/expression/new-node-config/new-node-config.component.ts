import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NodeType } from './../../../../constants/node-type';

@Component({
  selector: 'app-new-node-config',
  templateUrl: './new-node-config.component.html',
  styleUrls: ['./new-node-config.component.scss']
})
export class NewNodeConfigComponent implements OnInit
{
  isPower: boolean = false;
  requiredNumber: boolean = false;

  numberValue = new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
  textValue = new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]);
  isInLeftSide = new FormControl('', Validators.required);

  constructor(@Inject(MAT_DIALOG_DATA) public data: { newNodeType: NodeType, parentNodeType: NodeType, positionId: string | undefined; }, private dialogRef: MatDialogRef<NewNodeConfigComponent>) { }

  ngOnInit(): void
  {
    this.requiredNumber = this.data.newNodeType === NodeType.Function || this.data.newNodeType === NodeType.Number;
    this.isPower = this.data.parentNodeType === NodeType.Power;
  }

  onSelect()
  {
    if (this.formIsInValid)
    {
      return;
    }

    this.dialogRef.close({ isSelected: true, isInLeftSide: this.isInLeftSide.value[0], value: this.requiredNumber ? this.numberValue.value : this.textValue.value });
  }

  get formIsInValid(): boolean
  {
    return (!this.data?.positionId && this.isInLeftSide.invalid) || (!this.requiredNumber && this.textValue.invalid) || (this.requiredNumber && this.numberValue.invalid);
  }

  get valueTitle(): string
  {
    return this.data.newNodeType === NodeType.Number ? "Value" : "Number of arguments";
  }
}
