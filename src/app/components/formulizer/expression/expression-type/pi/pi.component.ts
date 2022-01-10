import { Component } from '@angular/core';
import { Expression } from './../../../../../models/expression';
import { NodeComponent } from './../node/node.component';

@Component({
  selector: 'app-pi',
  templateUrl: './pi.component.html',
  styleUrls: ['./pi.component.scss']
})
export class PiComponent extends NodeComponent
{
  onUpdate(expression: Expression): void
  {
    this.updateNodeEmitter.emit(expression);
  }
}
