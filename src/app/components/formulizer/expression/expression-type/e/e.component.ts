import { Component } from '@angular/core';
import { Expression } from './../../../../../models/expression';
import { NodeComponent } from './../node/node.component';

@Component({
  selector: 'app-e',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.scss']
})
export class EComponent extends NodeComponent
{
  onUpdate(expression: Expression): void
  {
    this.updateNodeEmitter.emit(expression);
  }
}
