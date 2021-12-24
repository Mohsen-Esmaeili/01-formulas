import { Component } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';
import { NodeType } from './../../../../../constants/node-type';
import { Subtraction } from './../../../../../models/subtraction';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.scss']
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

  isParen(node: Node): boolean
  {
    return node.type === NodeType.Paren;
  }
}
