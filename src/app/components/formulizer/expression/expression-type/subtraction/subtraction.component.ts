import { Component } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';
import { Expression } from './../../../../../models/expression';
import { Subtraction } from './../../../../../models/subtraction';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html'
})
export class SubtractionComponent extends NodeComponent
{
  get left(): Node
  {
    return (<Subtraction>this.node).left;
  }

  get right(): Node
  {
    return (<Subtraction>this.node).right;
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
