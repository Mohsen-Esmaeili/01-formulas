import { Component } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';
import { Division } from './../../../../../models/division';
import { Expression } from './../../../../../models/expression';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html'
})
export class DivisionComponent extends NodeComponent
{
  get left(): Node
  {
    return (<Division>this.node).left;
  }

  get right(): Node
  {
    return (<Division>this.node).right;
  }

  onUpdate(expression: Expression): void
  {
    if (expression.nodeType)
    {
      const newNode = this.nodeManagerService.getNewNode(expression.nodeType, this.left, this.right);
      this.parentNode?.updateNode(this.node.id, newNode);
      this.updateNodeEmitter.emit();
    }
  }
}
