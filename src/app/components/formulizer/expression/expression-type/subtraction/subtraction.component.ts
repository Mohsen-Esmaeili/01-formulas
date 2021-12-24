import { Component } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';
import { NodeType } from './../../../../../constants/node-type';
import { Subtraction } from './../../../../../models/subtraction';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html'
})
export class SubtractionComponent extends NodeComponent
{
  operator: string = NodeType.Subtraction;

  get left(): Node
  {
    return (<Subtraction>this.node).left;
  }

  get right(): Node
  {
    return (<Subtraction>this.node).right;
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
    this.sharedService.openPositionSelectionDialog(this.node.type, node, this.addNewNode.bind(this));
  }

  addNewNode(isLeft: boolean, node: Node): void
  {
    const positionId = isLeft ? this.left.id : this.right.id;
    this.node.addChild(positionId, node);
    this.sharedService.updatedEmitter.emit();
  }

  onSelect(event: Event): void
  {
    event.stopPropagation();

    this.sharedService.selectedEmitter.emit(this.node.id);
  }
}
