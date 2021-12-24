import { Component } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent extends NodeComponent
{
  onAddNewNode(node: Node): void
  {
    this.node.addChild(this.node.id, node);
    this.sharedService.updatedEmitter.emit();
  }
}
