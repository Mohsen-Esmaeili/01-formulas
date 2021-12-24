import { Component, Input } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';
import { NodeType } from './../../../../../constants/node-type';
import { Division } from './../../../../../models/division';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements NodeComponent
{
  @Input() node: Node;
  operator: string = NodeType.Division;

  onRemove(id: string): void
  {

  }

  get left(): Node
  {
    return (<Division>this.node).left;
  }

  get right(): Node
  {
    return (<Division>this.node).right;
  }

  isParen(node: Node): boolean
  {
    return node.type === NodeType.Paren;
  }
}
