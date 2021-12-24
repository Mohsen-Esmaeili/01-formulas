import { Component } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';
import { NodeType } from './../../../../../constants/node-type';
import { Addition } from './../../../../../models/addition';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss']
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

  isParen(node: Node): boolean
  {
    return node.type === NodeType.Paren;
  }
}
