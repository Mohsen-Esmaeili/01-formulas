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
  isVariable: boolean = false;
  isNumber: boolean = false;

  numberValue = new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
  textValue = new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]);
  isInLeftSide = new FormControl('', Validators.required);

  constructor(@Inject(MAT_DIALOG_DATA) public nodeType: string, private dialogRef: MatDialogRef<NewNodeConfigComponent>) { }

  ngOnInit(): void
  {
    this.loadNodeType();
  }

  onSelect()
  {
    if (this.formIsInValid)
    {
      return;
    }

    this.dialogRef.close({ isSelected: true, isInLeftSide: this.isInLeftSide.value[0], value: this.isVariable ? this.textValue.value : this.numberValue.value });
  }

  get formIsInValid(): boolean
  {
    return this.isInLeftSide.invalid || (this.isVariable && this.textValue.invalid) || (this.isNumber && this.numberValue.invalid);
  }

  loadNodeType(): void
  {
    switch (this.nodeType)
    {
      case NodeType.Number:
        this.isNumber = true;
        break;
      case NodeType.Power:
        this.isPower = true;
        break;
      case NodeType.Variable:
        this.isVariable = true;
        break;

      default:
        break;
    }
  }
}
