import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NodeType } from './../../../../constants/node-type';

@Component({
  selector: 'app-expression-input',
  templateUrl: './expression-input.component.html'
})
export class ExpressionInputComponent implements OnInit
{
  isVariable: boolean;

  numberValue = new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
  textValue = new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]);

  constructor(@Inject(MAT_DIALOG_DATA) public data: Record<string, unknown>, private dialogRef: MatDialogRef<ExpressionInputComponent>) { }

  ngOnInit(): void
  {
    this.isVariable = this.data["nodeType"] == NodeType.Variable;
  }

  onSelect()
  {
    if ((this.isVariable && this.textValue.invalid) || (!this.isVariable && this.numberValue.invalid))
    {
      return;
    }
    this.dialogRef.close({ isSelected: true, value: this.isVariable ? this.textValue.value : this.numberValue.value });
  }
}
