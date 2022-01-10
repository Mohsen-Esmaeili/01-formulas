import { Component } from '@angular/core';
import { NodeComponent } from '../node/node.component';
import { Expression } from './../../../../../models/expression';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent extends NodeComponent
{
  onUpdate(expression: Expression): void
  {
    this.updateNodeEmitter.emit(expression);
  }
}
