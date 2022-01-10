import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NodeComponent } from '../node/node.component';
import { Expression } from './../../../../../models/expression';
import { Variable } from './../../../../../models/variable';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.scss']
})
export class VariableComponent extends NodeComponent implements OnInit
{
  varName = new FormControl('');

  override ngOnInit(): void
  {
    this.varName.setValue((<Variable>this.node).value);
  }

  onChangeValue(): void
  {
    (<Variable>this.node).value = this.varName.value;
  }

  onUpdate(expression: Expression): void
  {
    this.updateNodeEmitter.emit(expression);
  }
}
