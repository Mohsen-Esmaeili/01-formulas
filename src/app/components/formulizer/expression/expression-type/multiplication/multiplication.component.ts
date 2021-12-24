import { Component, Input } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';
import { NodeType } from './../../../../../constants/node-type';
import { Multiplication } from './../../../../../models/multiplication';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.scss']
})
export class MultiplicationComponent implements NodeComponent
{
  @Input() node: Node;
  operator: string = NodeType.Multiplication;

  onRemove(id: string): void
  {

  }

  get left(): Node
  {
    return (<Multiplication>this.node).left;
  }

  get right(): Node
  {
    return (<Multiplication>this.node).right;
  }

  isParen(node: Node): boolean
  {
    return node.type === NodeType.Paren;
  }
}
