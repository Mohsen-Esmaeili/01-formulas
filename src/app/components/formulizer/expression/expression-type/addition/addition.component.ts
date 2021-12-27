import { Component } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';
import { Addition } from './../../../../../models/addition';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html'
})
export class AdditionComponent extends NodeComponent
{
  get left(): Node
  {
    return (<Addition>this.node).left;
  }

  get right(): Node
  {
    return (<Addition>this.node).right;
  }
}
