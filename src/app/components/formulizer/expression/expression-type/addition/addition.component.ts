import { Component } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';
import { NodeType } from './../../../../../constants/node-type';
import { Addition } from './../../../../../models/addition';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html'
})
export class AdditionComponent extends NodeComponent
{
  operator: string = NodeType.Addition;

  get left(): Node
  {
    return (<Addition>this.node).left;
  }

  get right(): Node
  {
    return (<Addition>this.node).right;
  }

  onRemoveNode(): void
  {
    if (this.parentNode)
    {
      this.parentNode.removeChildById(this.node.id);
      this.sharedService.updatedEmitter.emit();
    }
  }

  onAddNewNode(node: Node): void
  {
    debugger;
    this.node.addChild((<Addition>this.node).left.id, node);
    this.sharedService.updatedEmitter.emit();
  }

  onSelect(event: Event): void
  {
    event.stopPropagation();

    this.sharedService.selectedEmitter.emit(this.node.id);
  }
}
