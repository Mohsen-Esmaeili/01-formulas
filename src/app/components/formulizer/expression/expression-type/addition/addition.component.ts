import { Component } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';
import { Addition } from './../../../../../models/addition';
import { Expression } from './../../../../../models/expression';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html'
})
export class AdditionComponent extends NodeComponent
{
  get left(): Node
  {
    return (<Addition>this.node).left;
  }

  get right(): Node
  {
    return (<Addition>this.node).right;
  }

  onUpdate(expression: Expression): void
  {
    debugger;
    if (expression.nodeType)
    {
      const newNode = this.nodeManagerService.getNewNode(expression.nodeType, this.left, this.right);
      this.parentNode?.updateNode(this.node.id, newNode);
      this.updateNodeEmitter.emit();
    }
  }
}
