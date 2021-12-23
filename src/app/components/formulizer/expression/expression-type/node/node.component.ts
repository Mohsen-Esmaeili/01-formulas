import { Component, Input } from '@angular/core';
import { Node } from '../../../../../models/node';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent
{
  @Input() node: Node;
  // @Output() updateEventEmitter = new EventEmitter();

  // onRemove(node: Node): void { }

  // onAdd(node: Node): void { }
}
