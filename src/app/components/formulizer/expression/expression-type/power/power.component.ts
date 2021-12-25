import { Component } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';
import { NodeType } from './../../../../../constants/node-type';
import { Power } from './../../../../../models/power';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html'
})
export class PowerComponent extends NodeComponent
{
  operator: string = NodeType.Power;

  get power(): Node
  {
    return (<Power>this.node).expression;
  }

  get expression(): Node
  {
    return (<Power>this.node).power;
  }
}
