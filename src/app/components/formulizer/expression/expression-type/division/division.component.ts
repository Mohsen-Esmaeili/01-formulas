import { Component } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';
import { NodeType } from './../../../../../constants/node-type';
import { Division } from './../../../../../models/division';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html'
})
export class DivisionComponent extends NodeComponent
{
  operator: string = NodeType.Division;

  get left(): Node
  {
    return (<Division>this.node).left;
  }

  get right(): Node
  {
    return (<Division>this.node).right;
  }
}
