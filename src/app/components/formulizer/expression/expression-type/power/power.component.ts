import { Component } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';
import { NodeType } from './../../../../../constants/node-type';
import { Power } from './../../../../../models/power';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html'
})
export class PowerComponent extends NodeComponent
{
  operator: string = NodeType.Power;

  get power(): Node
  {
    return (<Power>this.node).expression;
  }

  get expression(): Node
  {
    return (<Power>this.node).power;
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
