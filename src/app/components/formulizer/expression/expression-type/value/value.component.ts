import { Component } from '@angular/core';
import { NodeComponent } from '../node/node.component';
import { Expression } from './../../../../../models/expression';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent extends NodeComponent
{
  onUpdate(expression: Expression): void
  {
    this.updateNodeEmitter.emit(expression);
  }
}
