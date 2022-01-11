import { Component } from '@angular/core';
import { Node } from 'src/app/models/node';
import { NodeComponent } from '../node/node.component';
import { Expression } from './../../../../../models/expression';
import { Paren } from './../../../../../models/paren';

@Component({
  selector: 'app-paren',
  templateUrl: './paren.component.html',
  styleUrls: ['./paren.component.scss']
})
export class ParenComponent extends NodeComponent
{
  get parenExpression(): Node
  {
    return (<Paren>this.node).expression;
  }

  get hasResult(): boolean
  {
    return !this.node.string.includes("_EMPTY_");
  }

  onRemoveNode(): void
  {
    if (this.parentNode)
    {
      this.parentNode.removeChildById(this.node.id);
      this.nodeManagerService.updatedEmitter.emit();
    }
  }

  onAddNew(expression: Expression): void
  {
    this.nodeManagerService.addNewNode(<Paren>this.node, expression);
  }

  onSelect(event: Event): void
  {
    event.stopPropagation();

    this.nodeManagerService.selectedEmitter.next(this.node.id);
  }
}
