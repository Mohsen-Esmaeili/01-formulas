import { Component } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';
import { Expression } from './../../../../../models/expression';
import { Power } from './../../../../../models/power';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html'
})
export class PowerComponent extends NodeComponent
{
  get power(): Node
  {
    return (<Power>this.node).power;
  }

  get expression(): Node
  {
    return (<Power>this.node).expression;
  }

  onUpdate(expression: Expression): void
  {
    debugger;
    if (expression.nodeType)
    {
      const newNode = this.nodeManagerService.getNewNode(expression.nodeType, this.expression, this.power);
      this.parentNode?.updateNode(this.node.id, newNode);
      this.updateNodeEmitter.emit();
    }
  }
}
