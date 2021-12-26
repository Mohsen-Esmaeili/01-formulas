import { Component } from '@angular/core';
import { Node } from 'src/app/models/node';
import { NodeComponent } from '../node/node.component';
import { Paren } from './../../../../../models/paren';

@Component({
  selector: 'app-paren',
  templateUrl: './paren.component.html'
})
export class ParenComponent extends NodeComponent
{
  get parenExpression(): Node
  {
    return (<Paren>this.node).expression;
  }

  get badgeIsHidden(): boolean
  {
    return this.node.getValue() === Number.MIN_VALUE;
  }

  onRemoveNode(): void
  {
    if (this.parentNode)
    {
      this.parentNode.removeChildById(this.node.id);
      this.sharedService.updatedEmitter.emit();
    }
  }

  onSelect(event: Event): void
  {
    event.stopPropagation();

    this.sharedService.selectedEmitter.emit(this.node.id);
  }
}
