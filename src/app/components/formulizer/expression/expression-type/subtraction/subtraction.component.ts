import { Component } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';
import { Subtraction } from './../../../../../models/subtraction';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html'
})
export class SubtractionComponent extends NodeComponent
{
  get left(): Node
  {
    return (<Subtraction>this.node).left;
  }

  get right(): Node
  {
    return (<Subtraction>this.node).right;
  }
}
