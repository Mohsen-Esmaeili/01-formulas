import { Component } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';
import { NodeType } from './../../../../../constants/node-type';
import { Multiplication } from './../../../../../models/multiplication';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html'
})
export class MultiplicationComponent extends NodeComponent
{
  operator: string = NodeType.Multiplication;

  get left(): Node
  {
    return (<Multiplication>this.node).left;
  }

  get right(): Node
  {
    return (<Multiplication>this.node).right;
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
    this.sharedService.openPositionSelectionDialog(this.node, node, this.addNewNode.bind(this));
  }

  addNewNode(positionId: string, node: Node): void
  {
    this.node.addChild(positionId, node);
    this.sharedService.updatedEmitter.emit();
  }

  onSelect(event: Event): void
  {
    event.stopPropagation();

    this.sharedService.selectedEmitter.emit(this.node.id);
  }
}
