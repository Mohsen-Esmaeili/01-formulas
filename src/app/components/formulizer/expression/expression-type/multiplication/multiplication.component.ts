import { Component } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';
import { Expression } from './../../../../../models/expression';
import { Multiplication } from './../../../../../models/multiplication';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html'
})
export class MultiplicationComponent extends NodeComponent
{
  get left(): Node
  {
    return (<Multiplication>this.node).left;
  }

  get right(): Node
  {
    return (<Multiplication>this.node).right;
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
