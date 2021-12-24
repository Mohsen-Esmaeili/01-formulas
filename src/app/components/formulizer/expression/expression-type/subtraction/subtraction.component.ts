import { Component, Input } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';
import { NodeType } from './../../../../../constants/node-type';
import { Subtraction } from './../../../../../models/subtraction';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.scss']
})
export class SubtractionComponent implements NodeComponent
{
  @Input() node: Node;
  operator: string = NodeType.Subtraction;

  onRemove(id: string): void
  {

  }

  get left(): Node
  {
    return (<Subtraction>this.node).left;
  }

  get right(): Node
  {
    return (<Subtraction>this.node).right;
  }

  isParen(node: Node): boolean
  {
    return node.type === NodeType.Paren;
  }
}
